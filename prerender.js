const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const express = require('express');

const routes = [
  '/',
  '/about',
  '/projects',
  '/experience',
  '/achievements',
  '/tech',
  '/photo',
  '/blog',
  '/blog/rover-battery',
  '/blog/ieee-research',
  '/blog/digsafe',
  '/blog/smartaid',
  '/blog/trusttrade',
  '/contact'
];

async function prerender() {
  console.log('Starting prerender...');
  
  const app = express();
  app.use(express.static(path.join(__dirname, 'build')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  const server = app.listen(0, async () => {
    const port = server.address().port;
    console.log(`Server listening on port ${port}`);
    
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0' });
      
      const html = await page.content();
      
      const routeDir = path.join(__dirname, 'build', route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      
      fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    }
    
    await browser.close();
    server.close();
    console.log('Prerender complete!');
  });
}

prerender().catch(console.error);

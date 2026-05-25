/**
 * PURE NODE.JS STATIC SEO GENERATOR
 * ZERO BROWSER DEPENDENCY - NO PUPPETEER REQUIRED
 * This is a Vercel-safe static string-replacement architecture.
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://aswanthks-portfolio.vercel.app';
const TITLE_SUFFIX = ' | Aswanth Karuppannan';
const DEFAULT_DESC = 'Backend-focused developer portfolio showcasing Java, Spring Boot, IoT systems, AI-powered engineering projects, and creative technical work.';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const TWITTER_HANDLE = '@_vision69_';

const routes = [
  { path: '/', title: 'Aswanth Karuppannan | Backend Developer Portfolio', desc: DEFAULT_DESC },
  { path: '/about', title: 'About' + TITLE_SUFFIX, desc: 'Learn more about Aswanth Karuppannan, a backend-focused developer and engineer.' },
  { path: '/projects', title: 'Projects' + TITLE_SUFFIX, desc: 'Explore my portfolio of software engineering, IoT, and AI projects.' },
  { path: '/experience', title: 'Experience' + TITLE_SUFFIX, desc: 'My professional experience as a Software Developer.' },
  { path: '/achievements', title: 'Achievements' + TITLE_SUFFIX, desc: 'Awards, hackathons, and certifications.' },
  { path: '/tech', title: 'Tech Stack' + TITLE_SUFFIX, desc: 'My technical skills, languages, and tools.' },
  { path: '/photo', title: 'Photography' + TITLE_SUFFIX, desc: 'My creative photography portfolio.' },
  { path: '/blog', title: 'Journal' + TITLE_SUFFIX, desc: 'Articles on software engineering, hardware, and research.' },
  { path: '/blog/rover-battery', title: 'Rover Battery Build: Powering Autonomous Robotics' + TITLE_SUFFIX, desc: 'Building a Custom 3S2P Lithium Battery Pack for My Smart Agricultural Rover', type: 'article' },
  { path: '/blog/ieee-research', title: 'IEEE Research Journey: Optimizing Edge Computing' + TITLE_SUFFIX, desc: 'Lessons from Publishing My First IEEE Research Paper as a Student', type: 'article' },
  { path: '/blog/digsafe', title: 'DIGSAFE: Smart Helmet for Miners' + TITLE_SUFFIX, desc: 'DIGSAFE: A 5G-Enabled Smart Helmet for Worker Safety in Hazardous Environments', type: 'article' },
  { path: '/blog/smartaid', title: 'SmartAid: Award-Winning Emergency Healthcare System' + TITLE_SUFFIX, desc: 'SmartAid – AI & IoT Powered Emergency Response System', type: 'article' },
  { path: '/blog/trusttrade', title: 'TrustTrade: Secure Escrow Platform for Digital Assets' + TITLE_SUFFIX, desc: 'How the Idea of TrustTrade Was Born', type: 'article' },
  { path: '/contact', title: 'Contact' + TITLE_SUFFIX, desc: 'Get in touch with me for opportunities and collaboration.' },
];

const buildDir = path.join(__dirname, '..', 'build');
const indexHtmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error(`build/index.html not found at ${indexHtmlPath}! Run npm run build first.`);
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const buildBreadcrumbs = (normalizedPath) => {
  if (normalizedPath === '/') return null;
  const segments = normalizedPath.split("/").filter(Boolean);
  const items = [{ "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL }];
  let accumulated = "";
  segments.forEach((seg, i) => {
    accumulated += `/${seg}`;
    items.push({
      "@type": "ListItem",
      "position": i + 2,
      "name": seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " "),
      "item": `${SITE_URL}${accumulated}`
    });
  });
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": items };
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aswanth Karuppannan",
  "jobTitle": "Backend Developer",
  "url": SITE_URL,
  "image": DEFAULT_IMAGE,
  "sameAs": ["https://github.com/aswanth-ks", "https://www.linkedin.com/in/aswanth-karuppannan/", "https://www.instagram.com/_vision69_"],
  "knowsAbout": ["Java", "Spring Boot", "React", "IoT", "AI", "Backend Development", "REST APIs", "MySQL", "MongoDB"],
  "worksFor": { "@type": "Organization", "name": "MoviCloud Labs Pvt Ltd" },
  "alumniOf": { "@type": "EducationalOrganization", "name": "Computer Science Engineering" }
};

routes.forEach(route => {
  const currentUrl = route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`;
  const ogType = route.type === 'article' ? 'article' : 'website';
  
  let activeSchema = personSchema;
  if (route.type === 'article') {
    activeSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": route.title,
      "author": { "@type": "Person", "name": "Aswanth Karuppannan", "url": SITE_URL },
      "publisher": { "@type": "Person", "name": "Aswanth Karuppannan", "url": SITE_URL },
      "description": route.desc,
      "image": DEFAULT_IMAGE,
      "url": currentUrl,
      "mainEntityOfPage": { "@type": "WebPage", "@id": currentUrl }
    };
  }

  const breadcrumbSchema = buildBreadcrumbs(route.path);
  
  const metaTags = `
    <title>${route.title}</title>
    <meta name="description" content="${route.desc}" />
    <link rel="canonical" href="${currentUrl}" />
    
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${currentUrl}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.desc}" />
    <meta property="og:image" content="${DEFAULT_IMAGE}" />
    <meta property="og:site_name" content="Aswanth Karuppannan Portfolio" />
    <meta property="og:locale" content="en_US" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${currentUrl}" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.desc}" />
    <meta name="twitter:image" content="${DEFAULT_IMAGE}" />
    <meta name="twitter:creator" content="${TWITTER_HANDLE}" />
    
    <script type="application/ld+json">${JSON.stringify(activeSchema)}</script>
    ${breadcrumbSchema ? `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>` : ''}
  `;

  let newHtml = baseHtml.replace('</head>', `${metaTags}</head>`);
  newHtml = newHtml.replace(/<title>.*?<\/title>/, '');
  newHtml = newHtml.replace(/<meta name="description".*?>/, '');

  let outPath;
  if (route.path === '/') {
    outPath = path.join(buildDir, 'index.html');
  } else {
    const relativePath = route.path.substring(1) + '.html';
    outPath = path.join(buildDir, relativePath);
    const parentDir = path.dirname(outPath);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }
  }

  fs.writeFileSync(outPath, newHtml);
  console.log(`Injected SEO for ${route.path} -> ${outPath}`);
});

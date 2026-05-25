import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FiCalendar, FiClock, FiArrowLeft, FiTag, FiCpu, FiCloud, 
  FiSmartphone, FiMapPin, FiEye, FiGlobe, FiAlertTriangle, 
  FiActivity, FiNavigation, FiShield, FiHeart, FiTrendingUp, FiSearch, FiCode, FiTerminal
} from "react-icons/fi";
import { FaAws, FaReact, FaNodeJs } from "react-icons/fa";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/blog/SEO1.png";
import authorImage from "../assets/images/profile/aswanth-profile.jpg";
import ProtectedImage from "../components/ui/ProtectedImage";
import SEO from "../components/ui/SEO";

const articleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ─── Custom Premium UI Components ───────────────── */

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="glass-premium rounded-2xl p-6 lg:p-8 border border-emerald-500/20 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 relative z-10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
      <Icon className="text-2xl" />
    </div>
    <h3 className="text-xl font-heading font-bold text-white mb-3 relative z-10 m-0">{title}</h3>
    <p className="text-[15px] text-white/70 leading-relaxed m-0 relative z-10">{description}</p>
  </motion.div>
);

const TechStackBadge = ({ icon: Icon, name }) => (
  <div className="flex flex-col items-center justify-center p-6 glass-premium border border-white/5 rounded-2xl hover:bg-white/5 transition-colors group">
    <Icon className="text-3xl text-white/40 mb-3 group-hover:text-emerald-400 transition-colors" />
    <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors tracking-wide">{name}</span>
  </div>
);

const WorkflowStep = ({ step, title, description }) => (
  <div className="flex gap-6 mb-8 relative">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-heading font-bold text-xl relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
      {step}
    </div>
    <div className="pb-8">
      <h4 className="text-xl font-bold text-white mb-2 m-0 font-heading">{title}</h4>
      <p className="text-[16px] text-white/70 leading-relaxed m-0">{description}</p>
    </div>
  </div>
);

const ImpactMetric = ({ value, label }) => (
  <div className="text-center p-6 border-l border-white/10 first:border-l-0">
    <div className="text-4xl lg:text-5xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">{value}</div>
    <div className="text-sm font-semibold text-white/50 uppercase tracking-widest">{label}</div>
  </div>
);

const CalloutBox = ({ title, children }) => (
  <div className="rounded-2xl p-6 border border-emerald-500/30 bg-emerald-500/5 text-emerald-50 my-8 flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <FiAlertTriangle className="text-emerald-400 text-xl" />
    </div>
    <div>
      {title && <h4 className="font-bold mb-2 m-0 text-white font-heading">{title}</h4>}
      <div className="text-[15px] opacity-90 leading-relaxed m-0">{children}</div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   BLOG POST
   ═══════════════════════════════════════════════════ */

export default function SEOFixPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.article
      className="relative min-h-screen bg-navy-950 overflow-hidden font-body pb-32 pt-24 lg:pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        article={true}
        schema="article"
        title="How I Fixed My React Portfolio’s SEO (After Realizing Google Was Seeing the Wrong Site)"
        description="A technical deep-dive into debugging React SPA routing, Vercel deployments, and building a custom static SEO injection architecture."
        publishedTime="2026-05-26T10:00:00Z"
      />
      {/* ── Background Orbs ──────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-emerald-600/5 blur-[150px] animate-float-slow" />
        <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[130px] animate-float" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8">
        
        {/* Back Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 max-w-[750px] mx-auto"
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors duration-300 group">
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Journal
          </Link>
        </motion.div>

        {/* ── Header Section ── */}
        <motion.header
          variants={articleVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 max-w-[750px] mx-auto text-center md:text-left"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-6">
            <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10">
              <FiCode className="text-sm" /> SOFTWARE ENGINEERING
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.1] mb-6 tracking-tight">
            How I Fixed My React Portfolio’s SEO (After Realizing Google Was Seeing the Wrong Site)
          </h1>

          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-8 max-w-3xl font-light">
            A real-world debugging story: How I solved the React SPA SEO problem and engineered a custom static prerender architecture for Vercel.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-xs text-white/40 font-medium py-6 border-y border-white/5">
            <div className="flex items-center gap-3">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-8 h-8 rounded-full object-cover border-2 border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              />
              <span className="text-white/80 font-semibold tracking-wide">Aswanth Karuppannan</span>
            </div>
            <span className="flex items-center gap-2 uppercase tracking-wider">
              <FiCalendar className="text-white/30 text-sm" /> May 26, 2026
            </span>
            <span className="flex items-center gap-2 uppercase tracking-wider">
              <FiClock className="text-white/30 text-sm" /> 8–10 min read
            </span>
          </div>
        </motion.header>

        {/* ── Hero Image ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-20 rounded-2xl md:rounded-[32px] overflow-hidden glass-premium border border-emerald-500/20 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.15)] relative group mx-auto w-full max-w-[900px]"
        >
          <ProtectedImage 
            src={heroImage} 
            alt="SEO Architecture" 
            className="w-full h-auto max-h-[600px] object-contain bg-navy-950 transition-transform duration-1000 group-hover:scale-105"
            watermark={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent pointer-events-none" />
        </motion.div>

        {/* ── Article Content ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="prose prose-invert max-w-[750px] mx-auto 
                     prose-headings:font-heading prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight
                     prose-h2:text-[32px] md:prose-h2:text-[36px] prose-h2:font-extrabold prose-h2:mt-24 prose-h2:mb-8 prose-h2:leading-snug prose-h2:text-emerald-400 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                     prose-h3:text-[24px] md:prose-h3:text-[28px] prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-emerald-300
                     prose-p:text-[18px] md:prose-p:text-[20px] prose-p:text-white/70 prose-p:font-light prose-p:leading-[1.9] prose-p:mb-8
                     prose-li:text-[18px] md:prose-li:text-[20px] prose-li:text-white/70 prose-li:font-light prose-li:leading-[1.9] prose-ul:mb-8
                     prose-strong:text-white/90 prose-strong:font-semibold
                     prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
                     marker:text-emerald-500"
        >
          
          <p className="text-[21px] leading-[1.8] text-white/80 font-medium">
            I thought my portfolio's SEO was perfect. I had set up <code>react-helmet-async</code>, generated a dynamic <code>sitemap.xml</code>, configured <code>robots.txt</code>, and rigorously mapped out canonical URLs, Open Graph images, and Twitter cards. When I navigated through my live site and inspected the Elements tab in Chrome DevTools, everything looked pristine. 
          </p>

          <p className="text-[21px] leading-[1.8] text-white/80 font-medium">
            But then I checked the <strong>Raw Page Source (Ctrl+U)</strong>. It was a disaster.
          </p>

          <h2>1. The React SPA Problem: Hydrated DOM vs. Raw Source</h2>
          <p>
            When a user navigates to <code>/blog/ieee-research</code>, the browser loads the page, downloads the JavaScript bundle, executes React, and <em>hydrates</em> the DOM. At this point, <code>react-helmet</code> kicks in and injects the correct title, description, and OG tags into the <code>&lt;head&gt;</code>.
          </p>
          <p>
            However, when a simple crawler (like WhatsApp, Discord, LinkedIn, or an older search engine bot) scrapes the page, it <strong>does not execute JavaScript</strong>. It only reads the initial, un-hydrated HTML sent by the server. 
          </p>

          <CalloutBox title="The Discovery">
            Because my site was a purely client-side Create React App hosted on Vercel, the server was returning the exact same generic `index.html` file for every single route. Crawlers were seeing my homepage title, my homepage canonical URL, and zero route-specific JSON-LD schemas, regardless of what subpage they requested.
          </CalloutBox>

          <h2>2. The Failed Attempts</h2>
          <p>
            Fixing this was not a straight line. Here is the engineering journey of the approaches that failed before I arrived at the perfect solution.
          </p>

          <h3>Attempt 1: Metadata Cleanup</h3>
          <p>
            My first instinct was to clean up the existing setup. I refined the <code>sitemap.xml</code>, fixed broken canonical tags, and updated JSON-LD structures. But this missed the core architectural issue: it doesn't matter how perfect your metadata is if the crawler never gets to execute the React code that mounts it. The raw HTML remained unchanged.
          </p>

          <h3>Attempt 2: Puppeteer Prerendering</h3>
          <p>
            I realized I needed to statically prerender the pages. I wrote a custom Node script utilizing Puppeteer to spin up a headless Chrome instance, navigate to every route locally, wait for hydration, and save the resulting HTML.
          </p>
          <p>
            Locally, this worked flawlessly. I pushed to Vercel and... the build failed.
          </p>
          
          <div className="bg-navy-900 border border-white/10 rounded-xl p-6 font-mono text-sm text-rose-300 mb-8 overflow-x-auto">
            Error: Failed to launch the browser process<br/>
            Code: 127<br/>
            /vercel/.cache/puppeteer/chrome/.../chrome: error while loading shared libraries: libnspr4.so: cannot open shared object file
          </div>

          <p>
            <strong>The Lesson:</strong> Vercel's serverless build images (running Amazon Linux) intentionally strip away heavy OS-level shared libraries (like <code>libnspr4.so</code> and <code>libnss3.so</code>) required to run Chromium. Relying on browser automation during a Vercel build is structurally unreliable.
          </p>

          <h3>Attempt 3: The Vercel Routing Mismatch</h3>
          <p>
            Even after tweaking my scripts to output files like <code>build/about/index.html</code>, Vercel's SPA routing configuration intercepted the requests. My <code>vercel.json</code> contained a catch-all rewrite forcing everything to <code>/index.html</code>, completely ignoring my pre-rendered nested folders. Vercel's <code>cleanUrls: true</code> setting natively expects <code>about.html</code>, not <code>about/index.html</code>.
          </p>

          <h2>3. The Final Architecture: Static SEO Generation</h2>
          <p>
            I needed a solution that was <strong>Vercel-safe</strong>, completely <strong>Chromium-free</strong>, and lightning fast. I engineered a pure Node.js string-replacement script: <code>static-seo-generator.js</code>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
            <FeatureCard 
              icon={FiTerminal} 
              title="Zero Browser Dependency" 
              description="Uses pure Node.js fs/path modules to manipulate strings, bypassing Vercel's Chromium limitations entirely."
              delay={0}
            />
            <FeatureCard 
              icon={FiCode} 
              title="Vercel-Native Paths" 
              description="Outputs .html files directly to the build root (e.g., about.html), perfectly matching Vercel's cleanUrls routing."
              delay={0.1}
            />
          </div>

          <p>
            The script hooks into the <code>postbuild</code> step. It reads the compiled <code>index.html</code> shell, strips out the fallback generic metadata, dynamically constructs route-specific tags (Title, Canonical, OG, Twitter), and seamlessly generates complex JSON-LD structured data schemas (like <code>BlogPosting</code> and <code>BreadcrumbList</code>). Finally, it injects these strings natively into the raw HTML.
          </p>

          <div className="my-12 ml-4 relative border-l-2 border-cyan-500/20 pl-8 not-prose">
            <WorkflowStep step="1" title="React Build" description="npm run build compiles the standard SPA shell." />
            <WorkflowStep step="2" title="Static Injection" description="static-seo-generator loops through all defined live routes." />
            <WorkflowStep step="3" title="Schema Generation" description="JSON-LD, Canonical, and OG tags are crafted per route." />
            <WorkflowStep step="4" title="HTML Output" description="New static files (e.g., /about.html, /blog.html) are saved to the build directory." />
            <WorkflowStep step="5" title="Vercel Deployment" catch-all="Vercel's edge network serves the exact static file natively without aggressive rewrites." />
          </div>

          <h2>4. Key Engineering Lessons</h2>

          <ul>
            <li><strong>DevTools Lie to You:</strong> Inspecting the DOM in Chrome DevTools shows the <em>hydrated</em> state. For SEO, the only truth that matters is what you see in <strong>View Source</strong>.</li>
            <li><strong>Deployment Success ≠ SEO Success:</strong> Your site can be blazing fast and visually perfect, but if the crawler gets an empty SPA shell, your SEO is fundamentally broken.</li>
            <li><strong>Build Architecture Matters:</strong> Understanding the specific constraints of your CI/CD environment (like Vercel's OS libraries) is crucial before selecting a technical approach.</li>
            <li><strong>The Power of Native Solutions:</strong> Over-engineering with Puppeteer caused catastrophic failures. A simple, robust Node.js string replacement script proved infinitely more reliable.</li>
          </ul>

          <h2>5. Conclusion</h2>
          <p>
            Today, if you fetch any route on this portfolio—whether through curl, WhatsApp, LinkedIn, or Googlebot—you will instantly receive the exact route-specific title, accurate canonical tags, and rich JSON-LD schemas before a single line of JavaScript executes.
          </p>
          <p>
            It was a frustrating, multi-layered debugging journey, but the resulting architecture is bulletproof. Remember: in the world of SPAs and SEO, the raw source is the only source of truth.
          </p>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />
          
          {/* Article Footer */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 not-prose">
            <div className="flex items-center gap-4">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              />
              <div>
                <p className="text-white font-bold text-sm">Aswanth Karuppannan</p>
                <p className="text-white/40 text-xs">Software Engineer & Researcher</p>
              </div>
            </div>
            <Link to="/blog" className="px-6 py-2.5 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm font-semibold">
               Back to Journal
            </Link>
          </div>

        </motion.div>
      </div>
    </motion.article>
  );
}

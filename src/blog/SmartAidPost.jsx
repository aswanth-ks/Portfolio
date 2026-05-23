import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FiCalendar, FiClock, FiArrowLeft, FiTag, FiCpu, FiCloud, 
  FiSmartphone, FiMapPin, FiEye, FiGlobe, FiAlertTriangle, 
  FiActivity, FiNavigation, FiShield, FiHeart, FiTrendingUp 
} from "react-icons/fi";
import { FaAws } from "react-icons/fa";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/blog/SmartAid1.png";
import smartAid2 from "../assets/images/blog/SmartAid2.jpeg";
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
    className="glass-premium rounded-2xl p-6 lg:p-8 border border-rose-500/20 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400 mb-6 relative z-10 border border-rose-500/20 shadow-glow-rose">
      <Icon className="text-2xl" />
    </div>
    <h3 className="text-xl font-heading font-bold text-white mb-3 relative z-10 m-0">{title}</h3>
    <p className="text-[15px] text-white/70 leading-relaxed m-0 relative z-10">{description}</p>
  </motion.div>
);

const TechStackBadge = ({ icon: Icon, name }) => (
  <div className="flex flex-col items-center justify-center p-6 glass-premium border border-white/5 rounded-2xl hover:bg-white/5 transition-colors group">
    <Icon className="text-3xl text-white/40 mb-3 group-hover:text-rose-400 transition-colors" />
    <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors tracking-wide">{name}</span>
  </div>
);

const WorkflowStep = ({ step, title, description }) => (
  <div className="flex gap-6 mb-8 relative">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-heading font-bold text-xl relative z-10 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
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
    <div className="text-4xl lg:text-5xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 mb-2">{value}</div>
    <div className="text-sm font-semibold text-white/50 uppercase tracking-widest">{label}</div>
  </div>
);

const CalloutBox = ({ title, children }) => (
  <div className="rounded-2xl p-6 border border-rose-500/30 bg-rose-500/5 text-rose-50 my-8 flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <FiAlertTriangle className="text-rose-400 text-xl" />
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

export default function SmartAidPost() {
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
        title="SmartAid: Award-Winning Emergency Healthcare System"
        description="A deep-dive into SmartAid, the hackathon-winning IoT and AI platform designed to optimize emergency healthcare routing and response times."
        publishedTime="2024-04-05T14:30:00Z"
      />
      {/* ── Background Orbs ──────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-rose-600/5 blur-[150px] animate-float-slow" />
        <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[130px] animate-float" />
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
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-400 mb-6">
            <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10">
              <FiTag className="text-sm" /> SMART SYSTEMS
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.1] mb-6 tracking-tight">
            SmartAid – AI & IoT Powered Emergency Response System
          </h1>

          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-8 max-w-3xl font-light">
            How AI, IoT, cloud infrastructure, and real-time automation can dramatically reduce emergency response delays.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-xs text-white/40 font-medium py-6 border-y border-white/5">
            <div className="flex items-center gap-3">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-8 h-8 rounded-full object-cover border-2 border-rose-500/50 shadow-glow-rose"
              />
              <span className="text-white/80 font-semibold tracking-wide">Aswanth Karuppannan</span>
            </div>
            <span className="flex items-center gap-2 uppercase tracking-wider">
              <FiCalendar className="text-white/30 text-sm" /> May 25, 2026
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
          className="mb-20 rounded-2xl md:rounded-[32px] overflow-hidden glass-premium border border-rose-500/20 shadow-[0_20px_60px_-15px_rgba(244,63,94,0.15)] relative group mx-auto w-full max-w-[900px]"
        >
          <ProtectedImage 
            src={heroImage} 
            alt="SmartAid System Architecture" 
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
                     prose-h2:text-[32px] md:prose-h2:text-[36px] prose-h2:font-extrabold prose-h2:mt-24 prose-h2:mb-8 prose-h2:leading-snug prose-h2:text-rose-400 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                     prose-h3:text-[24px] md:prose-h3:text-[28px] prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-rose-300
                     prose-p:text-[18px] md:prose-p:text-[20px] prose-p:text-white/70 prose-p:font-light prose-p:leading-[1.9] prose-p:mb-8
                     prose-li:text-[18px] md:prose-li:text-[20px] prose-li:text-white/70 prose-li:font-light prose-li:leading-[1.9] prose-ul:mb-8
                     prose-strong:text-white/90 prose-strong:font-semibold
                     prose-a:text-rose-400 prose-a:no-underline hover:prose-a:underline
                     marker:text-rose-500"
        >
          
          <p className="text-[21px] leading-[1.8] text-white/80 font-medium">
            In critical emergencies, every second matters. Traditional accident response systems heavily depend on manual reporting, which often causes life-threatening delays—especially when victims are unconscious or unable to call for help. SmartAid was built to solve this exact problem.
          </p>

          <h2>1. Introduction</h2>
          <p>
            SmartAid is an intelligent emergency response ecosystem that combines IoT, Artificial Intelligence, cloud computing, and mobile technology to automate accident detection and accelerate medical assistance. It removes the human dependency from the initial reporting phase.
          </p>

          <h2>2. The Problem</h2>
          <p>
            Road accidents remain one of the leading causes of preventable deaths, not only because of the impact itself, but due to delayed emergency response during the critical golden hour.
          </p>

          <CalloutBox title="The Golden Hour">
            In emergency medicine, the "Golden Hour" refers to the crucial 60-minute window immediately following traumatic injury during which there is the highest likelihood that prompt medical and surgical treatment will prevent death.
          </CalloutBox>

          <h2>3. Why Traditional Emergency Response Fails</h2>
          <p>
            The fundamental flaw in current safety infrastructure is reliance on conscious, capable humans to orchestrate the rescue. Key challenges include:
          </p>
          <ul>
            <li><strong>Delayed manual reporting:</strong> Waiting for bystanders to call emergency services.</li>
            <li><strong>Lack of accurate location sharing:</strong> Panic leads to poor geographical descriptions.</li>
            <li><strong>Poor coordination:</strong> Fragmentation between patients, ambulance drivers, and hospitals.</li>
            <li><strong>Communication barriers:</strong> Language discrepancies in diverse regions.</li>
          </ul>

          <h2>4. Our Solution</h2>
          <p>
            SmartAid creates a fully connected emergency ecosystem where detection, communication, and response happen automatically.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
            <FeatureCard 
              icon={FiActivity} 
              title="Accident Detection" 
              description="Onboard IoT telemetry detects high-G impacts and roll-overs autonomously."
              delay={0}
            />
            <FeatureCard 
              icon={FiCloud} 
              title="Cloud Intelligence" 
              description="Sensor data is validated against cloud-based threshold models to eliminate false positives."
              delay={0.1}
            />
            <FeatureCard 
              icon={FiNavigation} 
              title="Live Routing" 
              description="Nearest available ambulances are routed using live traffic data via Google Maps API."
              delay={0.2}
            />
            <FeatureCard 
              icon={FiHeart} 
              title="Hospital Alerts" 
              description="Receiving hospitals get pre-arrival notifications containing exact patient vitals and trauma type."
              delay={0.3}
            />
          </div>

          <h2>5. IoT-Powered Accident Detection</h2>
          <p>
            A smart embedded IoT device continuously monitors vehicle movement. Using an ESP32 integrated with an Accelerometer, Gyroscope, and GPS module, the hardware tracks 3D orientation and sudden deceleration forces.
          </p>

          <figure className="my-14 max-w-xl mx-auto rounded-2xl overflow-hidden glass-premium border border-rose-500/20 shadow-glow-rose not-prose group">
            <ProtectedImage 
              src={smartAid2} 
              alt="SmartAid IoT Hardware Prototype" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              watermark={true}
            />
          </figure>

          <p>
            Using multi-layer detection logic, SmartAid identifies real accident scenarios while intelligently reducing false positives caused by deep potholes or sudden, non-collisional braking.
          </p>

          <h2>6. Intelligent Cloud Architecture & Tech Stack</h2>
          <p>
            Hardware is only half the solution. The software architecture requires distributed coordination across multiple platforms. Here is the premium tech stack powering SmartAid:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 not-prose">
            <TechStackBadge icon={FiCloud} name="Google Cloud" />
            <TechStackBadge icon={FiCpu} name="Gemini AI" />
            <TechStackBadge icon={FiSmartphone} name="Flutter" />
            <TechStackBadge icon={FiCpu} name="ESP32" />
            <TechStackBadge icon={FiMapPin} name="Maps API" />
            <TechStackBadge icon={FiEye} name="Vision AI" />
            <TechStackBadge icon={FiGlobe} name="Translate API" />
            <TechStackBadge icon={FaAws} name="AWS" />
          </div>

          <h2>7. Ecosystem Modules</h2>
          <p>
            The system is divided into three interconnected, cross-platform Flutter applications ensuring real-time data synchronization:
          </p>
          <ul>
            <li><strong>Patient Module:</strong> For personal setup, emergency contacts, and medical history.</li>
            <li><strong>Ambulance Driver Module:</strong> For optimized routing, live traffic updates, and dispatch acceptance.</li>
            <li><strong>Hospital Module:</strong> For ER staff to prepare trauma bays and anticipate incoming casualties.</li>
          </ul>

          <h2>8. System Flow Architecture</h2>
          <p>
            The entire pipeline triggers and executes within milliseconds.
          </p>

          <div className="my-12 ml-4 relative border-l-2 border-orange-500/20 pl-8 not-prose">
            <WorkflowStep step="1" title="Accident Detection" description="IoT sensor array registers abnormal G-force and orientation." />
            <WorkflowStep step="2" title="AI Validation" description="Cloud logic filters out false alarms based on historical threshold data." />
            <WorkflowStep step="3" title="Location Capture" description="Precise GPS coordinates are locked and encrypted." />
            <WorkflowStep step="4" title="Emergency Dispatch" description="The nearest available ambulance is automatically summoned." />
            <WorkflowStep step="5" title="Hospital Notification" description="The target hospital receives patient data and ETA." />
          </div>

          <h2>9. AI + Agentic Intelligence</h2>
          <p>
            We utilized Gemini-powered workflows to elevate the platform from a simple notification tool to an intelligent agent. Gemini handles:
          </p>
          <ul>
            <li><strong>Severity assessment:</strong> Estimating trauma levels based on crash telemetry.</li>
            <li><strong>Intelligent prioritization:</strong> Managing multiple simultaneous emergencies in a region.</li>
            <li><strong>Multilingual automation:</strong> Translating critical medical details using Google Translate API for drivers and doctors who speak different languages.</li>
          </ul>

          <h2>10. Real-World Impact</h2>
          <p>
            The measurable benefits of an automated, AI-driven emergency response system are profound. By removing manual delays, the architecture aims to achieve:
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center bg-white/5 rounded-3xl border border-white/10 my-12 not-prose overflow-hidden shadow-2xl">
            <ImpactMetric value="-60%" label="Response Delay" />
            <ImpactMetric value="Zero" label="Manual Dependency" />
            <ImpactMetric value="100%" label="Automated Dispatch" />
          </div>

          <h2>11. Engineering Learnings</h2>
          <p>
            Building this system required mastering a wide breadth of domains. Key engineering learnings included IoT architecture, precise sensor fusion (combining accelerometer and gyro data cleanly), scalable cloud deployment, integrating LLMs into time-critical workflows, and distributed mobile systems design.
          </p>

          <h2>12. Final Thoughts</h2>
          <p>
            SmartAid is more than a technical project or a hackathon submission. It is a vision for intelligent emergency infrastructure. As smart cities evolve, the integration of autonomous emergency telemetry will eventually become a standard, saving thousands of lives through simple, intelligent automation.
          </p>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />
          
          {/* Article Footer */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 not-prose">
            <div className="flex items-center gap-4">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-12 h-12 rounded-full object-cover border-2 border-rose-500/50 shadow-glow-rose"
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

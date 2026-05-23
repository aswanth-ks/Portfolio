import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiArrowLeft, FiTag, FiCpu, FiWifi, FiActivity, FiShield, FiAlertOctagon, FiCheck, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/blog/DigSafe1.png";
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
    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 relative z-10 border border-emerald-500/20">
      <Icon className="text-2xl" />
    </div>
    <h3 className="text-xl font-heading font-bold text-white mb-3 relative z-10 m-0">{title}</h3>
    <p className="text-[15px] text-white/70 leading-relaxed m-0 relative z-10">{description}</p>
  </motion.div>
);

const ComparisonTable = () => {
  const features = [
    { name: "Helmet Detection", traditional: false, digsafe: true },
    { name: "Environmental Monitoring", traditional: false, digsafe: true },
    { name: "Health Monitoring (Vitals)", traditional: false, digsafe: true },
    { name: "Real-Time Cloud Alerts", traditional: false, digsafe: true },
    { name: "5G High-Speed Communication", traditional: false, digsafe: true },
    { name: "AI Explainability (XAI)", traditional: false, digsafe: true },
    { name: "Emergency SOS", traditional: false, digsafe: true },
    { name: "Predictive Safety Analytics", traditional: false, digsafe: true },
    { name: "Physical Impact Protection", traditional: true, digsafe: true },
  ];

  return (
    <div className="my-16 overflow-x-auto">
      <div className="min-w-[600px] glass-premium rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse m-0">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="p-6 text-white font-heading font-bold text-lg w-1/2">Feature Comparison</th>
              <th className="p-6 text-white/50 font-heading font-semibold text-center border-l border-white/10">Traditional Helmet</th>
              <th className="p-6 text-emerald-400 font-heading font-bold text-center border-l border-white/10 bg-emerald-500/5">DIGSAFE</th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, idx) => (
              <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                <td className="p-5 text-white/80 font-medium">{item.name}</td>
                <td className="p-5 border-l border-white/5 text-center">
                  {item.traditional ? <FiCheck className="mx-auto text-white/40 text-xl" /> : <FiX className="mx-auto text-rose-500/50 text-xl" />}
                </td>
                <td className="p-5 border-l border-white/5 text-center bg-emerald-500/[0.02]">
                  {item.digsafe ? <FiCheck className="mx-auto text-emerald-400 text-xl" /> : <FiX className="mx-auto text-rose-500/50 text-xl" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

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

/* ═══════════════════════════════════════════════════
   BLOG POST
   ═══════════════════════════════════════════════════ */

export default function DigsafePost() {
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
        title="DIGSAFE: Smart Helmet for Miners"
        description="Engineering a life-saving IoT smart helmet for underground miners, featuring real-time environmental monitoring and emergency response systems."
        publishedTime="2023-11-20T10:00:00Z"
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
              <FiTag className="text-sm" /> RESEARCH PROJECT
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.1] mb-6 tracking-tight">
            DIGSAFE: A 5G-Enabled Smart Helmet for Worker Safety in Hazardous Environments
          </h1>

          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-8 max-w-3xl font-light">
            An IEEE research project exploring how AI, IoT, and 5G communication can transform industrial worker safety and predictive emergency response.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-xs text-white/40 font-medium py-6 border-y border-white/5">
            <div className="flex items-center gap-3">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-8 h-8 rounded-full object-cover border-2 border-emerald-500/50 shadow-[0_0_15px_rgba(52,211,153,0.3)]"
              />
              <span className="text-white/80 font-semibold tracking-wide">Aswanth Karuppannan</span>
            </div>
            <span className="flex items-center gap-2 uppercase tracking-wider">
              <FiCalendar className="text-white/30 text-sm" /> May 24, 2026
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
          className="mb-20 rounded-2xl md:rounded-[32px] overflow-hidden glass-premium border border-emerald-500/20 shadow-[0_20px_60px_-15px_rgba(52,211,153,0.15)] relative group mx-auto w-full max-w-[900px]"
        >
          <ProtectedImage 
            src={heroImage} 
            alt="DigSafe Smart Helmet System" 
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
            Industrial worker safety has long relied on passive physical protection. A hard hat stops a falling brick, but it cannot warn a worker about a toxic gas leak or a sudden spike in heart rate. It was time to modernize industrial safety.
          </p>

          <h2>1. Introduction</h2>
          <p>
            Construction sites, deep underground mines, and chemical plants present severe hazards. Traditional safety paradigms are inherently reactive. We conceptualized and built <strong>DIGSAFE</strong> to shift industrial safety from reactive protection to proactive, predictive monitoring using the convergence of IoT telemetry, AI logic, and 5G networking.
          </p>

          <h2>2. The Problem with Traditional Safety Systems</h2>
          <p>
            Currently, workers in hazardous environments face risks that cannot be mitigated by physical armor alone:
          </p>
          <ul>
            <li><strong>Invisible Threats:</strong> Toxic gases like Carbon Monoxide or Methane are undetectable until symptoms appear.</li>
            <li><strong>Physiological Stress:</strong> Heat exhaustion and cardiac events often occur without immediate supervision.</li>
            <li><strong>Isolation:</strong> When accidents happen in remote zones of a site, raising an emergency SOS is heavily delayed.</li>
          </ul>

          <h2>3. What is DIGSAFE?</h2>
          <p>
            DIGSAFE is a next-generation 5G-enabled smart helmet architecture. It integrates an array of environmental sensors, biometric monitors, and edge-AI processing capabilities directly into standard industrial headgear. It acts as a continuous safety node that streams real-time telemetry back to a centralized dashboard.
          </p>

          <h2>4. Key Features of DIGSAFE</h2>
          <p>
            We designed the architecture to encompass every critical aspect of a worker's environment. Here are the core modules of the system:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
            <FeatureCard 
              icon={FiActivity} 
              title="Health Monitoring" 
              description="Continuous tracking of heart rate, blood oxygen levels, and body temperature to preempt heat stroke or cardiac distress."
              delay={0}
            />
            <FeatureCard 
              icon={FiShield} 
              title="Environmental Scan" 
              description="Onboard MQ-series sensors detect hazardous gas leaks and trigger immediate localized and cloud alerts."
              delay={0.1}
            />
            <FeatureCard 
              icon={FiWifi} 
              title="5G Communication" 
              description="Ultra-low latency data transmission ensures that emergency telemetry reaches central control within milliseconds."
              delay={0.2}
            />
            <FeatureCard 
              icon={FiCpu} 
              title="Explainable AI (XAI)" 
              description="AI models don't just alert; they provide transparent reasoning (e.g., 'Evacuate: Gas concentration rising linearly')."
              delay={0.3}
            />
          </div>

          <h2>5. How DIGSAFE Works</h2>
          <p>
            The hardware revolves around an ESP32 microcontroller that interfaces with a pulse oximeter sensor, temperature sensors, and gas detectors. This localized "edge node" processes raw analog signals, converts them into structured telemetry payloads, and pushes them via 5G modules to a secure cloud backend.
          </p>

          <h2>6. System Workflow Architecture</h2>
          <p>
            Understanding the data pipeline is critical. The system operates on a seamless, zero-latency loop:
          </p>

          <div className="my-12 ml-4 relative border-l-2 border-cyan-500/20 pl-8 not-prose">
            <WorkflowStep 
              step="1" 
              title="Data Acquisition" 
              description="Sensors continuously sample physiological and environmental data at the helmet level." 
            />
            <WorkflowStep 
              step="2" 
              title="Edge Processing" 
              description="The onboard microcontroller filters noise and flags immediate critical thresholds locally." 
            />
            <WorkflowStep 
              step="3" 
              title="5G Transmission" 
              description="Telemetry is streamed to the cloud dashboard with ultra-low latency, ensuring supervisors see live data." 
            />
            <WorkflowStep 
              step="4" 
              title="AI Analysis & Action" 
              description="Cloud-based predictive models analyze trends and automatically dispatch SOS alerts if anomalies are detected." 
            />
          </div>

          <h2>7. Comparison with Existing Systems</h2>
          <p>
            To understand the leap in engineering, look at the stark contrast between standard PPE (Personal Protective Equipment) and the DIGSAFE architecture.
          </p>

          <ComparisonTable />

          <h2>8. Why DIGSAFE Matters</h2>
          <p>
            Engineering is ultimately about saving and improving lives. DIGSAFE proves that by treating the worker as a connected node within an industrial IoT network, we can achieve zero-accident goals. It eliminates the fatal delay between an incident occurring and emergency responders being notified.
          </p>

          <h2>9. Potential Applications</h2>
          <p>
            While heavily focused on construction and mining, the architecture is highly scalable. It can be adapted for firefighters, offshore oil rig workers, and chemical plant operators. The core telemetry logic remains identical; only the sensor payload needs customization.
          </p>

          <h2>10. Future Scope</h2>
          <p>
            The next iteration of DIGSAFE will focus on miniaturization and power efficiency. We plan to integrate solar-harvesting materials directly into the hard hat surface, effectively eliminating the need for daily battery charging. Furthermore, integrating augmented reality (AR) visors could allow workers to see environmental warnings overlaid on their field of vision.
          </p>

          <h2>11. Final Thoughts</h2>
          <p>
            Building DIGSAFE and publishing it as an IEEE research paper was an incredible journey. It bridged the gap between theoretical software engineering and raw, impactful hardware implementation. It proved that the future of safety isn't just a stronger helmet—it's a smarter one.
          </p>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />
          
          {/* Article Footer */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 not-prose">
            <div className="flex items-center gap-4">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/50 shadow-[0_0_15px_rgba(52,211,153,0.3)]"
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

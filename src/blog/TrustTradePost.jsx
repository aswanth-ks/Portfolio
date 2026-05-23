import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FiCalendar, FiClock, FiArrowLeft, FiTag, FiShield, FiUserCheck, 
  FiLock, FiMessageSquare, FiAlertCircle, FiCheckCircle 
} from "react-icons/fi";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/blog/TrustTrade1.png";
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
    className="glass-premium rounded-2xl p-6 lg:p-8 border border-indigo-500/20 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 relative z-10 border border-indigo-500/20 shadow-glow-blue">
      <Icon className="text-2xl" />
    </div>
    <h3 className="text-xl font-heading font-bold text-white mb-3 relative z-10 m-0">{title}</h3>
    <p className="text-[15px] text-white/70 leading-relaxed m-0 relative z-10">{description}</p>
  </motion.div>
);

const WorkflowStep = ({ step, title, description }) => (
  <div className="flex gap-6 mb-8 relative">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-heading font-bold text-xl relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
      {step}
    </div>
    <div className="pb-8">
      <h4 className="text-xl font-bold text-white mb-2 m-0 font-heading">{title}</h4>
      <p className="text-[16px] text-white/70 leading-relaxed m-0">{description}</p>
    </div>
  </div>
);

const CalloutBox = ({ title, children }) => (
  <div className="rounded-2xl p-6 border border-indigo-500/30 bg-indigo-500/5 text-indigo-50 my-8 flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <FiAlertCircle className="text-indigo-400 text-xl" />
    </div>
    <div>
      {title && <h4 className="font-bold mb-2 m-0 text-white font-heading">{title}</h4>}
      <div className="text-[15px] opacity-90 leading-relaxed m-0">{children}</div>
    </div>
  </div>
);

const ComparisonTable = () => {
  const features = [
    { name: "Verified Identity", traditional: false, trusttrade: true },
    { name: "Escrow Payment Holding", traditional: false, trusttrade: true },
    { name: "Private Communication Space", traditional: false, trusttrade: true },
    { name: "Structured Dispute Resolution", traditional: false, trusttrade: true },
    { name: "Evidence Tracking", traditional: false, trusttrade: true },
    { name: "Anonymity Protection", traditional: true, trusttrade: false },
  ];

  return (
    <div className="my-16 overflow-x-auto">
      <div className="min-w-[600px] glass-premium rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse m-0">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="p-6 text-white font-heading font-bold text-lg w-1/2">Problem Area</th>
              <th className="p-6 text-white/50 font-heading font-semibold text-center border-l border-white/10">Standard Platforms</th>
              <th className="p-6 text-indigo-400 font-heading font-bold text-center border-l border-white/10 bg-indigo-500/5">TrustTrade</th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, idx) => (
              <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                <td className="p-5 text-white/80 font-medium">{item.name}</td>
                <td className="p-5 border-l border-white/5 text-center text-white/40 font-semibold">
                  {item.traditional ? "Yes" : "No"}
                </td>
                <td className="p-5 border-l border-white/5 text-center bg-indigo-500/[0.02] font-bold text-indigo-400">
                  {item.trusttrade ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   BLOG POST
   ═══════════════════════════════════════════════════ */

export default function TrustTradePost() {
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
        title="TrustTrade: Secure Escrow Platform for Digital Assets"
        description="Developing a secure, transparent escrow platform to protect buyers and sellers during digital asset transactions, featuring real-time dispute resolution."
        publishedTime="2024-03-22T08:00:00Z"
      />
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[150px] animate-float-slow" />
        <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[130px] animate-float" />
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
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-6">
            <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10">
              <FiTag className="text-sm" /> PRODUCT CASE STUDY
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.1] mb-6 tracking-tight">
            How the Idea of TrustTrade Was Born
          </h1>

          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-8 max-w-3xl font-light">
            A real-world frustration that evolved into the idea for a safer peer-to-peer trading platform.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-xs text-white/40 font-medium py-6 border-y border-white/5">
            <div className="flex items-center gap-3">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500/50 shadow-glow-blue"
              />
              <span className="text-white/80 font-semibold tracking-wide">Aswanth Karuppannan</span>
            </div>
            <span className="flex items-center gap-2 uppercase tracking-wider">
              <FiCalendar className="text-white/30 text-sm" /> May 25, 2026
            </span>
            <span className="flex items-center gap-2 uppercase tracking-wider">
              <FiClock className="text-white/30 text-sm" /> 7–9 min read
            </span>
          </div>
        </motion.header>

        {/* ── Hero Image ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-20 rounded-2xl md:rounded-[32px] overflow-hidden glass-premium border border-indigo-500/20 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.15)] relative group mx-auto w-full max-w-[900px]"
        >
          <ProtectedImage 
            src={heroImage} 
            alt="TrustTrade Digital Security and P2P Commerce" 
            className="w-full h-auto max-h-[600px] object-cover bg-navy-950 transition-transform duration-1000 group-hover:scale-105"
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
                     prose-h2:text-[32px] md:prose-h2:text-[36px] prose-h2:font-extrabold prose-h2:mt-24 prose-h2:mb-8 prose-h2:leading-snug prose-h2:text-indigo-400 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                     prose-h3:text-[24px] md:prose-h3:text-[28px] prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-indigo-300
                     prose-p:text-[18px] md:prose-p:text-[20px] prose-p:text-white/70 prose-p:font-light prose-p:leading-[1.9] prose-p:mb-8
                     prose-li:text-[18px] md:prose-li:text-[20px] prose-li:text-white/70 prose-li:font-light prose-li:leading-[1.9] prose-ul:mb-8
                     prose-strong:text-white/90 prose-strong:font-semibold
                     prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
                     marker:text-indigo-500"
        >
          
          <p className="text-[21px] leading-[1.8] text-white/80 font-medium">
            Every meaningful product starts with a real-world problem. TrustTrade was no different. The foundational idea was born out of pure frustration with the existing digital marketplace landscape.
          </p>

          <h2>1. The Problem I Faced</h2>
          <p>
            The idea sparked from a personal experience when I was searching online to buy a used camera. Like many buyers navigating peer-to-peer marketplaces, I found several sellers offering attractive prices. But right before sending the money, a massive roadblock hit me: <strong>I couldn’t trust them.</strong>
          </p>
          <p>
            I had no clear way to verify the seller’s true identity, no guarantee that my payment would be secure once it left my bank account, and zero assurance that I would actually receive the product after paying.
          </p>

          <blockquote className="border-l-4 border-indigo-500 pl-6 my-10 italic text-2xl text-white/90 font-heading bg-gradient-to-r from-indigo-500/10 to-transparent py-4 rounded-r-xl">
            "The real problem wasn’t buying a camera. It was trust."
          </blockquote>

          <h2>2. The Trust Problem in Online Trading</h2>
          <p>
            This fear is not isolated. It is a systemic issue plaguing almost every peer-to-peer trading platform on the internet today. Buyers operate under constant fear of scams, fake sellers, and payment fraud. Conversely, genuine sellers struggle to prove their credibility against a backdrop of anonymity.
          </p>
          <p>
            That singular moment of realization became the foundation of TrustTrade. 
          </p>

          <ComparisonTable />

          <h2>3. The Core Product Vision</h2>
          <p>
            TrustTrade is designed from the ground up to make person-to-person trading secure, transparent, and completely stress-free. The core concept is simple yet powerful: <strong>build trust natively into every single transaction.</strong>
          </p>

          <h2>4. Building Trust Into Transactions</h2>
          <p>
            To achieve this vision, we needed to design a secure architecture that protected both parties equally. We broke the solution down into four critical fintech pillars.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
            <FeatureCard 
              icon={FiUserCheck} 
              title="Verified User Identity" 
              description="Rigorous identity verification drastically reduces fake accounts and anonymous fraud, instilling immediate confidence."
              delay={0}
            />
            <FeatureCard 
              icon={FiLock} 
              title="Secure Payment Protection" 
              description="Escrow-style secure holding protects buyers by ensuring funds are conditionally released only when terms are met."
              delay={0.1}
            />
            <FeatureCard 
              icon={FiMessageSquare} 
              title="The Traderoom" 
              description="A private, centralized workspace to communicate securely, share details, upload proof, and track progress."
              delay={0.2}
            />
            <FeatureCard 
              icon={FiShield} 
              title="Smart Dispute Resolution" 
              description="Structured platform intervention using chat records and uploaded evidence for fair, unbiased conflict decisions."
              delay={0.3}
            />
          </div>

          <h2>5. The Product Workflow</h2>
          <p>
            How does the secure flow actually operate? We designed a frictionless journey that maintains maximum security without bogging the user down in bureaucracy.
          </p>

          <div className="my-12 ml-4 relative border-l-2 border-blue-500/20 pl-8 not-prose">
            <WorkflowStep 
              step="1" 
              title="Discovery & Verification" 
              description="Buyer finds a seller. Both parties undergo the platform's seamless identity verification protocols." 
            />
            <WorkflowStep 
              step="2" 
              title="Secure Escrow Payment" 
              description="Buyer initiates the trade. Funds are securely locked in an escrow holding state, protecting both parties." 
            />
            <WorkflowStep 
              step="3" 
              title="Traderoom Collaboration" 
              description="Parties enter the Traderoom. All communication, shipping proofs, and documentation are securely logged." 
            />
            <WorkflowStep 
              step="4" 
              title="Confirmation & Release" 
              description="Buyer confirms receipt of the product in good condition. The escrow smart system automatically releases the funds to the seller." 
            />
          </div>

          <CalloutBox title="Handling the Unexpected">
            If a problem occurs—such as wrong product delivery, damaged items, or a payment conflict—the system immediately freezes the escrow. TrustTrade's Smart Dispute Resolution steps in, reviewing the immutable evidence logged inside the Traderoom to enforce a fair decision.
          </CalloutBox>

          <h2>6. Future Vision & Final Thoughts</h2>
          <p>
            TrustTrade is not just another trading platform. It is a highly engineered solution built from a real-world trust problem. Its mission is definitive: make online trading safer, simpler, and profoundly more trustworthy for everyone involved.
          </p>
          <p>
            By shifting the focus from simply "connecting buyers and sellers" to "securing the transaction", we are reimagining the baseline infrastructure of digital peer-to-peer commerce.
          </p>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />
          
          {/* Article Footer */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 not-prose">
            <div className="flex items-center gap-4">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/50 shadow-glow-blue"
              />
              <div>
                <p className="text-white font-bold text-sm">Aswanth Karuppannan</p>
                <p className="text-white/40 text-xs">Product Designer & Developer</p>
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

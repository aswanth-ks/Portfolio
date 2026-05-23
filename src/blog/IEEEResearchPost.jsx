import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiArrowLeft, FiTag, FiBookOpen, FiAward, FiAlertTriangle, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/blog/ieee1.png";
import ieee2 from "../assets/images/blog/ieee2.png";
import authorImage from "../assets/images/profile/aswanth-profile.jpg";
import ProtectedImage from "../components/ui/ProtectedImage";
import SEO from "../components/ui/SEO";

const articleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ─── Custom UI Components ───────────────────────── */

const LessonCard = ({ number, title, children }) => (
  <div className="glass-premium rounded-2xl p-6 border border-white/10 my-10 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="flex items-center gap-4 mb-4 relative z-10">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex flex-col items-center justify-center border border-white/5 shadow-inner">
        <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none mb-1">Lesson</span>
        <span className="text-xl font-heading font-extrabold text-blue-400 leading-none">{number}</span>
      </div>
      <h3 className="text-xl font-heading font-bold text-white m-0 leading-tight">{title}</h3>
    </div>
    <div className="relative z-10 text-[15px] text-white/70 leading-relaxed m-0 prose-p:last:mb-0">
      {children}
    </div>
  </div>
);

const PullQuote = ({ children }) => (
  <blockquote className="my-12 px-8 py-6 border-l-4 border-blue-500 bg-gradient-to-r from-blue-500/10 to-transparent rounded-r-2xl">
    <p className="text-xl md:text-2xl font-heading font-bold text-white leading-snug m-0 tracking-tight">
      {children}
    </p>
  </blockquote>
);

const CalloutBox = ({ title, children, type = "info" }) => {
  const styles = {
    info: "border-blue-500/30 bg-blue-500/5 text-blue-100",
    warning: "border-amber-500/30 bg-amber-500/5 text-amber-100",
    success: "border-emerald-500/30 bg-emerald-500/5 text-emerald-100",
  };
  
  let icon;
  if (type === "warning") icon = <FiAlertTriangle className="text-amber-400 text-xl" />;
  else if (type === "success") icon = <FiCheckCircle className="text-emerald-400 text-xl" />;
  else icon = <FiBookOpen className="text-blue-400 text-xl" />;

  return (
    <div className={`rounded-2xl p-6 border ${styles[type]} my-8 flex gap-4`}>
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        {title && <h4 className="font-bold mb-2 m-0 text-white">{title}</h4>}
        <div className="text-[15px] opacity-90 leading-relaxed m-0 prose-ul:my-2 prose-li:my-1">{children}</div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   BLOG POST
   ═══════════════════════════════════════════════════ */

export default function IEEEResearchPost() {
  // Scroll to top on mount
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
        title="IEEE Research Journey: Optimizing Edge Computing"
        description="My experience researching and publishing a paper on edge computing architecture, performance metrics, and low-latency system design."
        publishedTime="2024-02-15T09:00:00Z"
      />
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[150px] animate-float-slow" />
        <div className="absolute bottom-[20%] right-[-15%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[130px] animate-float" />
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
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 mb-6">
            <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10">
              <FiAward className="text-sm" /> FEATURED ARTICLE
            </span>
            <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-white/60">
              <FiTag /> RESEARCH JOURNEY
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.1] mb-6 tracking-tight">
            Lessons from Publishing My First IEEE Research Paper as a Student
          </h1>

          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-8 max-w-3xl font-light">
            A brutally honest breakdown of what it actually takes to go from a student project idea to a published IEEE conference paper.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-xs text-white/40 font-medium py-6 border-y border-white/5">
            <div className="flex items-center gap-3">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-8 h-8 rounded-full object-cover border-2 border-purple-500/50 shadow-glow-purple"
              />
              <span className="text-white/80 font-semibold tracking-wide">Aswanth Karuppannan</span>
            </div>
            <span className="flex items-center gap-2 uppercase tracking-wider">
              <FiCalendar className="text-white/30 text-sm" /> May 23, 2026
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
          className="mb-16 rounded-2xl md:rounded-[32px] overflow-hidden glass-premium border border-white/10 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.15)] relative group mx-auto w-full max-w-[900px]"
        >
          <ProtectedImage 
            src={heroImage} 
            alt="IEEE Research Abstract Model" 
            className="w-full h-auto max-h-[600px] object-contain bg-navy-950 transition-transform duration-1000 group-hover:scale-105"
            watermark={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent pointer-events-none" />
        </motion.div>

        {/* ── Article Content ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="prose prose-invert max-w-[750px] mx-auto 
                     prose-headings:font-heading prose-headings:font-bold prose-headings:text-white prose-headings:tracking-tight
                     prose-h2:text-[32px] md:prose-h2:text-[36px] prose-h2:font-extrabold prose-h2:mt-24 prose-h2:mb-8 prose-h2:leading-snug prose-h2:text-purple-400 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                     prose-h3:text-[24px] md:prose-h3:text-[28px] prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-purple-300
                     prose-p:text-[18px] md:prose-p:text-[20px] prose-p:text-white/70 prose-p:font-light prose-p:leading-[1.9] prose-p:mb-8
                     prose-li:text-[18px] md:prose-li:text-[20px] prose-li:text-white/70 prose-li:font-light prose-li:leading-[1.9] prose-ul:mb-8
                     prose-strong:text-white/90 prose-strong:font-semibold
                     prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
                     marker:text-purple-500"
        >
          
          <p className="text-[21px] leading-[1.8] text-white/80 font-medium">
            Publishing a research paper in IEEE always felt like something meant for experienced researchers, professors, or postgraduate students—not for someone like me, an undergraduate engineering student still figuring things out.
          </p>

          <p>
            But recently, I went through the entire process of writing, reviewing, revising, registering, and submitting my first IEEE conference paper. It was stressful, confusing, expensive, and honestly overwhelming at times—but also one of the most valuable learning experiences I’ve had.
          </p>

          <p>
            If you're a student thinking about publishing a paper, here’s the real story and what I actually learned.
          </p>

          <PullQuote>
            The paper we worked on was called: DIGSAFE: A 5G-Enabled Smart Helmet for Worker Safety in Hazardous Environments.
          </PullQuote>

          <h2>The Core Idea</h2>
          <p>
            The idea was simple but critical. Workers in construction sites, mines, and hazardous industries face serious risks: toxic gas exposure, abnormal heart conditions, heat stress, sudden accidents, and a lack of emergency communication. Traditional helmets only provide physical protection; they don’t monitor health or the environment.
          </p>
          <p>
            So we designed a smart helmet that could monitor environmental conditions, track worker health, detect dangerous situations, trigger alerts, send SOS notifications, and utilize Explainable AI (XAI) to ensure safety decisions were transparent. This wasn’t just a random academic project. It solved a real-world problem.
          </p>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

          <h2>10 Brutally Honest Lessons</h2>

          <LessonCard number="1" title="Good Research Starts with a Real Problem">
            <p>
              You cannot engineer a solution looking for a problem. The reason DIGSAFE gained traction is because it addressed tangible, severe safety gaps in hazardous industries. If your project doesn't solve a real problem, it will be incredibly difficult to justify its relevance in your introduction and conclusion.
            </p>
          </LessonCard>

          <LessonCard number="2" title="Writing the Paper Is Harder Than Building the Project">
            <p>
              I thought writing the code and building the hardware would be the hardest part. I was wrong. Structuring an academic paper is a completely different skill. You must clearly articulate:
            </p>
            <ul>
              <li><strong>Abstract & Introduction:</strong> Hook the reader and define the problem.</li>
              <li><strong>Related Work:</strong> Prove you read existing literature.</li>
              <li><strong>Methodology & System Design:</strong> Explain your architecture technically.</li>
              <li><strong>Results & Discussion:</strong> Defend your solution with data.</li>
              <li><strong>Conclusion & References:</strong> Wrap up cleanly and cite everything.</li>
            </ul>
            <p>
              Spoiler alert: our first draft was bad. It took multiple heavy revisions to reach academic standards.
            </p>
          </LessonCard>

          <LessonCard number="3" title="Reviewers Will Point Out What You Missed">
            <p>
              Peer review feedback can hurt your ego, but it makes your paper infinitely better. Reviewers demanded stronger comparison requests against existing solutions, pointed out grammar fixes, and highlighted missing references. Embrace the critique; they are stress-testing your engineering logic.
            </p>
          </LessonCard>

          <LessonCard number="4" title="IEEE Submission Systems Are Confusing">
            <p>
              The logistics of submission are a nightmare for first-timers. Between CMT (Conference Management Toolkit), submitting the camera-ready version, navigating IEEE PDF eXpress, signing copyright forms, waiting for plagiarism checks, verifying payments, dealing with broken conference IDs, and answering random Google Forms from organizers—it is organized chaos. Keep a checklist.
            </p>
          </LessonCard>

          <CalloutBox title="Clarification: 'Camera-Ready'" type="info">
            When organizers ask for the "Camera-Ready" submission, they do NOT mean a video recording. It’s an old publishing term that simply means the final, polished PDF that is formatted exactly as it will appear in the printed or digital proceedings.
          </CalloutBox>

          <figure className="my-14 max-w-xl mx-auto rounded-2xl overflow-hidden glass-premium border border-purple-500/20 shadow-xl">
            <ProtectedImage 
              src={ieee2} 
              alt="IEEE Conference Proceedings and Technical Documentation" 
              className="w-full h-auto max-h-[400px] object-contain bg-navy-950 m-0 transition-transform duration-700 hover:scale-105"
              watermark={true}
            />
            <figcaption className="text-center text-[13px] text-white/40 p-4 m-0 border-t border-white/5 bg-white/[0.02]">
              Navigating the complexities of academic publishing systems and camera-ready formatting.
            </figcaption>
          </figure>

          <LessonCard number="5" title="IEEE PDF eXpress Can Be Annoying">
            <p>
              IEEE requires all PDFs to be validated through PDF eXpress. You will need conference IDs, and you will likely fail validation the first time due to minor format issues (like missing embedded fonts or incorrect margins). Dealing with this under extreme deadline pressure is not fun. Do it early.
            </p>
          </LessonCard>

          <LessonCard number="6" title="Publishing Research Costs Money">
            <p>
              Nobody tells students that academic publishing isn't free. Between heavy conference registration fees, IEEE publication costs, and potential travel implications to present your work, the financial aspect is a genuine barrier. Look for student discounts or university sponsorships.
            </p>
          </LessonCard>

          <LessonCard number="7" title="Team Communication Matters">
            <p>
              When a deadline approaches, ambiguity kills teams. You need to definitively decide: Who is paying? Who is handling the CMT uploads? Who is designing the presentation slides? Conference logistics require serious project management. Worse, conference schedules often clash directly with semester exams, requiring careful time management.
            </p>
          </LessonCard>

          <LessonCard number="8" title="Presentation Is Mandatory">
            <p>
              Most conferences have a strict "No Show, No Publish" rule. The final publication of your paper is completely dependent on at least one author showing up (virtually or physically) and presenting the work successfully to the panel.
            </p>
          </LessonCard>

          <LessonCard number="9" title="Research Changes Engineering Thinking">
            <p>
              Going through this process forced an engineering mindset shift. It moved me from just hacking things together to systematic thinking. You start questioning assumptions, focusing on technical communication, and heavily prioritizing solution comparison. You stop asking "Does it work?" and start asking "Is this the optimal, proven way it should work?"
            </p>
          </LessonCard>

          <LessonCard number="10" title="Publishing is Not About Genius">
            <p>
              This is the ultimate lesson. Publishing isn't about being a genius. It’s entirely about persistence, iteration, problem-solving, patience, and surviving messy bureaucratic systems. 
            </p>
          </LessonCard>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

          <PullQuote>
            From: "Can I publish?" <br />
            To: "I did."
          </PullQuote>
          
          {/* Article Footer */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 not-prose">
            <div className="flex items-center gap-4">
              <ProtectedImage 
                src={authorImage} 
                alt="Aswanth Karuppannan" 
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/50 shadow-glow-purple"
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

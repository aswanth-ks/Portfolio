import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiClock, FiCalendar, FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";

import ProtectedImage from "../components/ui/ProtectedImage";
import { featuredPosts } from "../data/blogPosts";
import SEO from "../components/ui/SEO";

/* ─── Animation Variants ─────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};



function BlogCard({ post, isRecent }) {
  return (
    <motion.article
      variants={itemVariants}
      className="group flex flex-col glass-premium rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:glow-border h-full"
    >
      {/* Thumbnail Area */}
      <div className="h-56 relative overflow-hidden bg-navy-950 border-b border-white/5">
        <ProtectedImage 
          src={post.image} 
          alt={post.title} 
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          watermark={true}
        />
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {isRecent && (
            <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white shadow-lg backdrop-blur-md border border-white/20">
              RECENT
            </span>
          )}
          <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${post.gradient} text-white shadow-lg backdrop-blur-md`}>
            {post.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent opacity-60" />
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10 bg-navy-950/40">
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
            <FiCalendar /> {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
            <FiClock /> {post.readTime}
          </span>
        </div>

        <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        <Link to={post.link} className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-300 mt-auto">
          Read Article
          <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

/* ═══════════════════════════════════════════════════
   BLOG PAGE
   ═══════════════════════════════════════════════════ */
export default function Blog() {
  // Sort posts by date descending
  const sortedPosts = [...featuredPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <motion.section
      className="relative min-h-screen bg-navy-950 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title="Engineering Blog" 
        description="Thoughts, engineering, and experiments. Documenting my journey through backend development, system design, and technical challenges."
      />
      {/* ── Background ────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[150px] animate-float-slow" />
        <div className="absolute top-[40%] left-[-15%] w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[130px] animate-float" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] animate-float-medium" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24">
        {/* ── Page Header ─────────────────────── */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-white/50 uppercase tracking-widest mb-6"
          >
            <FiBookOpen className="text-purple-400" />
            Engineering Journal
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
          >
            <span className="text-white">Thoughts, Engineering & </span>
            <br className="hidden sm:block" />
            <span className="gradient-text">Experiments</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Documenting my journey through backend development, system design, 
            research publications, and the technical challenges I encounter along the way.
          </motion.p>
        </motion.div>

        {/* ═══ Blog Grid ═══════════════════════ */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sortedPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} isRecent={index < 2} />
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}

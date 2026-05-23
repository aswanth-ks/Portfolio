import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiGithub,
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiShield,
  FiShoppingCart,
  FiUsers,
  FiCpu,
  FiZap,
  FiServer,
  FiCalendar,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";
import { featuredProjects, standardProjects } from "../data/projects";
import SEO from "../components/ui/SEO";

/* ─── Animation Variants ─────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ─── Reusable TechBadge ─────────────────────────── */
function TechBadge({ label }) {
  return (
    <span className="px-3 py-1.5 rounded-lg text-xs font-medium glass text-white/50 hover:text-white/80 hover:bg-white/[0.04] transition-all duration-300">
      {label}
    </span>
  );
}

/* ─── Reusable CTAButton ─────────────────────────── */
function CTAButton({ href, children, variant = "primary" }) {
  if (variant === "github") {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-white/60 text-sm font-semibold hover:text-white hover:bg-white/10 transition-all duration-300 group/btn"
      >
        <FiGithub className="text-sm" />
        {children}
        <FiArrowRight className="text-xs transition-transform group-hover/btn:translate-x-0.5" />
      </motion.a>
    );
  }
  return null;
}

/* ─── Featured Project Card ──────────────────────── */
function FeaturedProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.12 }}
      whileHover={{ y: -5 }}
      className="group relative glass-premium rounded-3xl overflow-hidden transition-all duration-500 hover:glow-border gradient-border"
    >
      {/* Faded number watermark */}
      <span className="absolute top-4 right-6 font-heading text-[6rem] font-extrabold text-white/[0.02] leading-none select-none pointer-events-none">
        {project.number}
      </span>

      <div className="relative z-10 p-8 sm:p-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left: Content */}
          <div className="flex-1 lg:flex-[1.3]">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                <project.icon className="text-white text-xl" />
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${project.gradient} text-white`}>
                {project.category}
              </span>
              {project.achievement && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                  <FiAward className="text-amber-400 text-xs" />
                  {project.achievement}
                </span>
              )}
              {project.researchBadge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                  <FiBookOpen className="text-cyan-400 text-xs" />
                  {project.researchBadge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.name}
            </h3>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/30 mb-4">
              <span className="flex items-center gap-1.5">
                <FiCalendar className="text-white/25" />
                {project.date}
              </span>
              <span className="flex items-center gap-1.5">
                <FiUsers className="text-white/25" />
                {project.role}
              </span>
              {project.teamSize && (
                <span className="flex items-center gap-1.5">
                  <FiUsers className="text-white/25" />
                  Team of {project.teamSize}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/40 leading-relaxed mb-6 max-w-2xl">
              {project.description}
            </p>

            {/* Key Contributions */}
            <div className="space-y-2 mb-6">
              {project.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-2.5"
                >
                  <FiCheckCircle className="text-green-400/60 mt-0.5 flex-shrink-0 text-sm" />
                  <span className="text-sm text-white/50">{h}</span>
                </motion.div>
              ))}
            </div>

            {/* GitHub CTA */}
            <CTAButton href={project.github} variant="github">
              View on GitHub
            </CTAButton>
          </div>

          {/* Right: Tech + Meta */}
          <div className="lg:flex-[0.55] flex flex-col gap-4">
            <div className="glass rounded-2xl p-5">
              <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
            {project.impactMetric && (
              <div className={`glass rounded-2xl p-5 border ${project.impactBorder || "border-transparent"}`}>
                <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-2">
                  Impact
                </p>
                <p className={`text-sm font-bold ${project.impactColor || "text-white/70"}`}>
                  {project.impactMetric}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Standard Project Card ──────────────────────── */
function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative glass rounded-3xl p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:glow-border"
    >
      {/* Top accent */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Faded number */}
      <span className="absolute top-3 right-5 font-heading text-[5rem] font-extrabold text-white/[0.02] leading-none select-none pointer-events-none">
        {project.number}
      </span>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
            <project.icon className="text-white text-base" />
          </div>
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${project.gradient} text-white`}>
            {project.category}
          </span>
          {project.backendHighlight && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-300 uppercase tracking-wider">
              <FiServer className="text-blue-400 text-xs" />
              Backend
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1.5">
          {project.name}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-white/30 mb-4">
          {project.date && (
            <span className="flex items-center gap-1">
              <FiCalendar className="text-white/25" />
              {project.date}
            </span>
          )}
          {project.role && (
            <span className="flex items-center gap-1">
              <FiUsers className="text-white/25" />
              {project.role}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-white/40 leading-relaxed mb-5 max-w-2xl">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {project.highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.05 }}
              className="flex items-start gap-2.5"
            >
              <FiCheckCircle className="text-green-400/60 mt-0.5 flex-shrink-0 text-sm" />
              <span className="text-sm text-white/50">{h}</span>
            </motion.div>
          ))}
        </div>

        {/* Tech + GitHub */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
          <CTAButton href={project.github} variant="github">
            GitHub
          </CTAButton>
        </div>
      </div>
    </motion.article>
  );
}



/* ═══════════════════════════════════════════════════
   PROJECTS PAGE
   ═══════════════════════════════════════════════════ */
export default function Projects() {
  return (
    <motion.section
      className="relative min-h-screen bg-navy-950 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title="Projects" 
        description="Explore my portfolio of projects, including the hackathon-winning SmartAid system, DIGSAFE IoT helmet, and enterprise-level REST APIs."
      />
      {/* ── Background ────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-8%] left-[-8%] w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[130px] animate-float-slow" />
        <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] rounded-full bg-purple-600/6 blur-[140px] animate-float" />
        <div className="absolute bottom-[-5%] left-[25%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] animate-float-medium" />
        <div className="absolute bottom-[25%] right-[5%] w-[300px] h-[300px] rounded-full bg-amber-500/3 blur-[100px] animate-float-slow" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24">
        {/* ── Page Header ─────────────────────── */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-white/50 uppercase tracking-widest mb-5"
          >
            <HiOutlineSparkles className="text-amber-400" />
            Selected Work
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            <span className="gradient-text">Projects</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Real-world products, hackathon-winning systems, and engineering projects
            built with purpose and technical depth.
          </motion.p>
        </motion.div>

        {/* ═══ Featured Projects ══════════════ */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.2em]">
              Featured Projects
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, i) => (
              <FeaturedProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* ═══ More Projects ═════════════════ */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">
              More Projects
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="space-y-6">
            {standardProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ──────────────────────── */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white/30 text-sm mb-4">Interested in working together?</p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-glow-blue hover:shadow-glow-purple transition-all duration-300 hover:scale-[1.03]"
          >
            Get in Touch
            <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

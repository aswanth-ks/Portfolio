import React from "react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiGlobe,
  FiCheckCircle,
  FiBookOpen,
  FiArrowRight,
  FiBriefcase,
  FiCode,
  FiUsers,
  FiZap,
  FiShield,
  FiDatabase,
  FiServer,
  FiSmartphone,
  FiCalendar,
} from "react-icons/fi";
import {
  HiOutlineSparkles,
  HiOutlineLightBulb,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { internshipExperience, technicalProjects, innovationItems, skillsFromExperience } from "../data/experience";
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

/* ─── Experience Card Component ──────────────────── */
function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className="group relative glass rounded-3xl overflow-hidden transition-all duration-500 hover:glow-border"
    >
      {/* Accent bar */}
      <div className={`absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b ${experience.gradient}`} />

      {/* Faded number watermark */}
      <span className="absolute top-4 right-6 font-heading text-[5rem] font-extrabold text-white/[0.02] leading-none select-none pointer-events-none">
        {experience.number}
      </span>

      <div className="p-7 sm:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Left: Main content */}
          <div className="flex-1 lg:flex-[1.3]">
            {/* Header row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${experience.gradient} flex items-center justify-center shadow-lg`}>
                <experience.icon className="text-white text-lg" />
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r ${experience.gradient} text-white`}>
                {experience.type}
              </span>
              {experience.featured && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                  <HiOutlineSparkles className="text-amber-400 text-xs" />
                  Featured
                </span>
              )}
              {experience.current && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-300 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Current
                </span>
              )}
            </div>

            {/* Role & Company */}
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1.5">
              {experience.role}
            </h3>
            <p className="text-base sm:text-lg text-white/50 font-medium mb-2">
              {experience.company}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/30 mb-5">
              <span className="flex items-center gap-1.5">
                <FiCalendar className="text-white/25" />
                {experience.duration}
              </span>
              {experience.teamSize && (
                <span className="flex items-center gap-1.5">
                  <FiUsers className="text-white/25" />
                  {experience.teamSize}
                </span>
              )}
              {experience.location && (
                <span className="flex items-center gap-1.5">
                  <FiGlobe className="text-white/25" />
                  {experience.location}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-2xl">
              {experience.description}
            </p>

            {/* Responsibilities */}
            {experience.responsibilities && (
              <div className="space-y-2.5 mb-6">
                {experience.responsibilities.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="flex items-start gap-2.5"
                  >
                    <FiCheckCircle className="text-green-400/60 mt-0.5 flex-shrink-0 text-sm" />
                    <span className="text-sm text-white/50">{item}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Outcome */}
            {experience.outcome && (
              <div className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border ${experience.outcomeBg || "bg-cyan-500/10 border-cyan-500/20"}`}>
                <FiBookOpen className={experience.outcomeColor || "text-cyan-400"} />
                <span className={`text-sm font-semibold ${experience.outcomeTextColor || "text-cyan-300/90"}`}>
                  {experience.outcome}
                </span>
              </div>
            )}
          </div>

          {/* Right: Tech Stack & Meta */}
          <div className="lg:flex-[0.55] flex flex-col gap-4">
            {/* Technologies */}
            <div className="glass rounded-2xl p-5">
              <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-3">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>

            {/* Key Focus Areas */}
            {experience.focusAreas && (
              <div className="glass rounded-2xl p-5">
                <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-3">
                  Key Focus
                </p>
                <div className="space-y-2">
                  {experience.focusAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.gradient}`} />
                      <span className="text-xs text-white/45">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Technical Project Card (for DIGSAFE / SMART-AID) ── */
function TechProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:glow-border"
    >
      {/* Top accent */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

      <div className="p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
            <project.icon className="text-white text-base" />
          </div>
          <div className="flex-1">
            <h4 className="font-heading text-lg font-bold text-white">{project.title}</h4>
            <p className="text-xs text-white/30">{project.role} · {project.date}</p>
          </div>
          {project.badge && (
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${project.badgeStyle}`}>
              {project.badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-white/40 leading-relaxed mb-4">{project.description}</p>

        {/* Contributions */}
        <div className="space-y-1.5 mb-4">
          {project.contributions.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <FiCheckCircle className="text-green-400/50 mt-0.5 flex-shrink-0 text-xs" />
              <span className="text-xs text-white/45">{item}</span>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 rounded-md text-[10px] font-medium glass text-white/40">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Innovation Card ────────────────────────────── */
function InnovationCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.04] group"
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
          <item.icon className="text-white text-base" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-heading text-base sm:text-lg font-bold text-white mb-1">
            {item.title}
          </h4>
          <p className="text-xs text-white/30 mb-1.5">{item.venue}</p>
          <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Skill Card ─────────────────────────────────── */
function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="glass rounded-2xl p-5 text-center transition-all duration-300 hover:bg-white/[0.04] group"
    >
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
        <skill.icon className="text-white text-xl" />
      </div>
      <h4 className="font-heading text-sm font-bold text-white mb-1">{skill.title}</h4>
      <p className="text-xs text-white/35">{skill.subtitle}</p>
    </motion.div>
  );
}



/* ═══════════════════════════════════════════════════
   EXPERIENCE PAGE
   ═══════════════════════════════════════════════════ */
export default function Experience() {
  return (
    <motion.section
      className="relative min-h-screen bg-navy-950 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title="Experience" 
        description="Professional internship, research contributions, and engineering experiences building real-world systems and products."
      />
      {/* ── Background ────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[130px] animate-float-slow" />
        <div className="absolute top-[50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[140px] animate-float" />
        <div className="absolute bottom-[-8%] right-[20%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[110px] animate-float-medium" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-24">
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
            <FiBriefcase className="text-blue-400" />
            Professional Journey
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            <span className="gradient-text">Experience</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Professional internship, research contributions, and engineering experiences
            building real-world systems and products.
          </motion.p>
        </motion.div>

        {/* ═══ Internship Experience (FEATURED) ══ */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
            <span className="text-xs font-semibold text-blue-400/70 uppercase tracking-[0.2em]">
              Professional Experience
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
          </div>

          <ExperienceCard experience={internshipExperience} index={0} />
        </div>

        {/* ═══ Technical Engineering Experience ══ */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
            <span className="text-xs font-semibold text-cyan-400/70 uppercase tracking-[0.2em]">
              Technical Engineering
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {technicalProjects.map((project, i) => (
              <TechProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* ═══ Innovation & Leadership ════════ */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <span className="text-xs font-semibold text-amber-400/60 uppercase tracking-[0.2em]">
              Innovation & Participation
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {innovationItems.map((item, i) => (
              <InnovationCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* ═══ Skills from Experience ═════════ */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-xs font-semibold text-white/35 uppercase tracking-[0.2em]">
              Skills from Experience
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {skillsFromExperience.map((skill, i) => (
              <SkillCard key={i} skill={skill} index={i} />
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
          <p className="text-white/30 text-sm mb-4">Let's build something together</p>
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

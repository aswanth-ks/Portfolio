import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiBookOpen,
  FiCpu,
  FiGlobe,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiOutlineSparkles, HiOutlineAcademicCap } from "react-icons/hi";
import { stats, majorAchievements, digsafeTech, digsafeContributions, additionalAchievements } from "../data/achievements";
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ─── Animated Counter Hook ──────────────────────── */
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
}

/* ─── Stat Card Component ────────────────────────── */
function StatCard({ value, suffix = "", label, icon: Icon, delay = 0 }) {
  const [count, ref] = useCountUp(parseInt(value), 1600);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative glass rounded-2xl p-6 text-center stat-card-glow group transition-all duration-300 hover:bg-white/[0.04]"
    >
      <div className="flex justify-center mb-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          <Icon className="text-blue-400 text-lg" />
        </div>
      </div>
      <p className="font-heading text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
        {count}{suffix}
      </p>
      <p className="text-xs sm:text-sm text-white/40 font-medium">{label}</p>
    </motion.div>
  );
}

/* ─── DIGSAFE Tech Tag ───────────────────────────── */
function TechTag({ label, icon: Icon }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass text-xs sm:text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors">
      {Icon && <Icon className="text-cyan-400/70 text-sm" />}
      <span>{label}</span>
    </div>
  );
}

/* ─── Major Achievement Card ─────────────────────── */
function AchievementCard({ achievement, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-3xl p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:glow-border"
    >
      {/* Subtle gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${achievement.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Trophy position indicator */}
      <span className="absolute top-4 right-5 font-heading text-[4rem] font-extrabold text-white/[0.02] leading-none select-none pointer-events-none">
        {achievement.position}
      </span>

      <div className="relative z-10">
        {/* Icon + Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center shadow-lg`}>
            <FiAward className="text-white text-xl" />
          </div>
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r ${achievement.gradient} text-white`}>
              {achievement.badge}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1.5">
          {achievement.title}
        </h3>

        {/* Venue */}
        <p className="text-sm text-white/40 mb-3 flex items-center gap-1.5">
          <HiOutlineAcademicCap className="text-white/30" />
          {achievement.venue}
        </p>

        {/* Description */}
        <p className="text-sm text-white/45 leading-relaxed mb-4">
          {achievement.description}
        </p>

        {/* Award highlight */}
        {achievement.award && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <HiOutlineSparkles className="text-amber-400 text-sm" />
            <span className="text-amber-300/90 text-sm font-semibold">{achievement.award}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Minor Achievement Card ─────────────────────── */
function MinorCard({ item, index }) {
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
          <h4 className="font-heading text-base sm:text-lg font-bold text-white mb-1 group-hover:text-white transition-colors">
            {item.title}
          </h4>
          {item.subtitle && (
            <p className="text-xs text-white/30 mb-1.5">{item.subtitle}</p>
          )}
          <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}



/* ═══════════════════════════════════════════════════
   ACHIEVEMENTS PAGE
   ═══════════════════════════════════════════════════ */
export default function Achievements() {
  return (
    <motion.section
      className="relative min-h-screen bg-navy-950 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title="Achievements" 
        description="A curated collection of milestones, hackathon wins, and my IEEE research publication."
      />
      {/* ── Background ────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-8%] left-[-8%] w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[130px] animate-float-slow" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/6 blur-[150px] animate-float" />
        <div className="absolute bottom-[-5%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] animate-float-medium" />
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
            Achievement Showcase
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            <span className="gradient-text">Achievements</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            A curated collection of milestones, competition wins, and research contributions
            that define my journey in technology and innovation.
          </motion.p>
        </motion.div>

        {/* ── Stats Banner ────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>

        {/* ═══ DIGSAFE Research Hero ═══════════ */}
        <motion.div
          className="mb-20"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <span className="text-xs font-semibold text-cyan-400/70 uppercase tracking-[0.2em]">
              Featured Research
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative glass-premium rounded-3xl overflow-hidden gradient-border glow-research"
          >
            {/* Inner content */}
            <div className="relative z-10 p-8 sm:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left: Main content */}
                <div className="flex-1 lg:flex-[1.3]">
                  {/* IEEE Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-5"
                  >
                    <FiBookOpen className="text-cyan-400 text-sm" />
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                      IEEE Conference Paper
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
                    DIGSAFE
                  </h2>
                  <p className="text-base sm:text-lg text-white/50 font-medium mb-5">
                    Smart Industrial Safety Helmet System
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/40 leading-relaxed mb-6 max-w-xl">
                    A smart industrial safety helmet designed for mine workers and construction
                    workers operating in hazardous environments. Integrates real-time biometric
                    and environmental monitoring with 5G-enabled remote alert systems.
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-2.5 mb-6">
                    {digsafeContributions.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        className="flex items-start gap-2.5"
                      >
                        <FiCheckCircle className="text-cyan-400/70 mt-0.5 flex-shrink-0 text-sm" />
                        <span className="text-sm text-white/50">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Publication Badge */}
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/20 glow-amber">
                    <HiOutlineSparkles className="text-amber-400 text-lg" />
                    <div>
                      <p className="text-amber-300 text-sm font-bold">Published Research</p>
                      <p className="text-amber-400/50 text-xs">IEEE Conference Paper · 2025</p>
                    </div>
                  </div>
                </div>

                {/* Right: Meta info */}
                <div className="lg:flex-[0.7] flex flex-col gap-5">
                  {/* Role & Meta */}
                  <div className="glass rounded-2xl p-5">
                    <p className="text-xs text-white/30 uppercase tracking-widest mb-3 font-semibold">Project Details</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-white/30 mb-0.5">Role</p>
                        <p className="text-sm font-semibold text-white/80">IoT Developer / Frontend Engineer</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/30 mb-0.5">Date</p>
                        <p className="text-sm font-semibold text-white/80">October 2025</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/30 mb-0.5">Team Size</p>
                        <p className="text-sm font-semibold text-white/80">4 Members</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="glass rounded-2xl p-5">
                    <p className="text-xs text-white/30 uppercase tracking-widest mb-3 font-semibold">Technologies</p>
                    <div className="grid grid-cols-2 gap-2">
                      {digsafeTech.map((tech) => (
                        <TechTag key={tech.label} {...tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ═══ Major Achievements ═════════════ */}
        <div className="mb-20">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            <span className="text-xs font-semibold text-amber-400/70 uppercase tracking-[0.2em]">
              Competition Wins
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {majorAchievements.map((achievement, i) => (
              <AchievementCard key={i} achievement={achievement} index={i} />
            ))}
          </div>
        </div>

        {/* ═══ Additional Achievements ════════ */}
        <div className="mb-16">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em]">
              More Milestones
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalAchievements.map((item, i) => (
              <MinorCard key={i} item={item} index={i} />
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
          <p className="text-white/30 text-sm mb-4">Interested in collaborating?</p>
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

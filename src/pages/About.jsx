import React from "react";
import { motion } from "framer-motion";
import {
  FaJava, FaCode, FaDatabase, FaCamera, FaFilm, FaTrophy,
  FaGraduationCap, FaLanguage, FaServer, FaRocket, FaCogs,
  FaLightbulb, FaUserGraduate, FaCut,
} from "react-icons/fa";
import {
  SiSpringboot, SiMongodb, SiReact, SiPython,
} from "react-icons/si";
import {
  HiOutlineGlobeAlt, HiOutlineSparkles, HiOutlineCube,
  HiOutlineChartBar, HiOutlineUser, HiOutlineAcademicCap,
  HiOutlineBriefcase, HiOutlineTranslate,
} from "react-icons/hi";
import SEO from "../components/ui/SEO";

/* ── Animation Variants ─────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const scaleCard = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ── Section Wrapper ────────────────────────── */
function Section({ children, className = "" }) {
  return (
    <div className={`relative max-w-6xl mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* ── Section Label ──────────────────────────── */
function SectionLabel({ text }) {
  return (
    <motion.span
      variants={fadeUp}
      className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-white/50 uppercase tracking-[0.2em] mb-5"
    >
      {text}
    </motion.span>
  );
}

/* ══════════════════════════════════════════════
   ABOUT PAGE
   ══════════════════════════════════════════════ */
export default function About() {
  return (
    <motion.div
      className="relative bg-navy-950 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title="About Me" 
        description="Discover my journey from frontend development to backend engineering with Java and Spring Boot, and my unique creative edge in filmmaking and photography."
      />
      {/* ── Global background orbs ─────── */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        <div className="absolute top-[10%] left-[-8%] w-[600px] h-[600px] rounded-full bg-blue-600/[0.04] blur-[160px]" />
        <div className="absolute top-[50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/[0.04] blur-[140px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* ══════════════════════════════════
            1. HERO INTRO
           ══════════════════════════════════ */}
        <section className="min-h-[70vh] flex items-center py-28 lg:py-36">
          <Section>
            <motion.div
              className="max-w-3xl"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <SectionLabel text="About Me" />

              <motion.h1
                variants={fadeUp}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6"
              >
                <span className="text-white">Backend-Focused Engineer</span>
                <br />
                <span className="gradient-text">with a Creative Edge.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-lg sm:text-xl text-white/40 leading-relaxed max-w-2xl mb-8"
              >
                I'm <span className="text-white/70 font-medium">Aswanth Karuppannan</span> — a Computer Science 
                student building depth in backend engineering while bringing a unique perspective 
                shaped by filmmaking, photography, and visual storytelling.
              </motion.p>

              {/* Accent line */}
              <motion.div
                variants={fadeUp}
                custom={2}
                className="flex items-center gap-4"
              >
                <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-purple-500" />
                <span className="text-sm text-white/30 font-medium tracking-wide">
                  Java · Spring Boot · System Design · Creative Tech
                </span>
              </motion.div>
            </motion.div>
          </Section>
        </section>

        {/* ══════════════════════════════════
            2. PROFESSIONAL STORY
           ══════════════════════════════════ */}
        <section className="py-24">
          <Section>
            <motion.div
              className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Left — Label */}
              <div>
                <SectionLabel text="My Journey" />
                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4"
                >
                  How I got here
                </motion.h2>
                <motion.div
                  variants={fadeUp}
                  custom={1}
                  className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>

              {/* Right — Story paragraphs */}
              <motion.div
                className="space-y-6 text-base sm:text-lg leading-relaxed text-white/40"
                variants={staggerContainer}
              >
                <motion.p variants={fadeUp}>
                  It started with a simple question — <span className="text-white/60 italic">how does 
                  all of this actually work?</span> Not just the websites or the apps, but the logic 
                  underneath. The architecture. The systems that keep things running when millions of 
                  requests hit at once.
                </motion.p>

                <motion.p variants={fadeUp}>
                  Frontend development gave me my entry point into tech — HTML, CSS, React taught 
                  me how users interact with software. But the more I built, the more I was drawn to 
                  what happens behind the screen: <span className="text-white/60">API design, database 
                  modeling, authentication flows, server-side logic</span>. That's where the engineering 
                  problems live.
                </motion.p>

                <motion.p variants={fadeUp}>
                  Today, I'm going deep on <span className="text-blue-400/80">Java</span> and{" "}
                  <span className="text-green-400/80">Spring Boot</span> — not just to learn frameworks, 
                  but to understand how production-grade backend systems are actually built. REST APIs, 
                  service layers, persistence strategies, clean architecture. The kind of engineering 
                  that scales.
                </motion.p>

                <motion.p variants={fadeUp}>
                  What makes me different isn't just technical skill — it's perspective. Years of 
                  filmmaking and photography taught me to think about <span className="text-white/60">
                  storytelling, user experience, and intentional design</span>. I bring that lens to 
                  every system I build.
                </motion.p>
              </motion.div>
            </motion.div>
          </Section>
        </section>

        {/* ══════════════════════════════════
            3. TECHNICAL FOCUS
           ══════════════════════════════════ */}
        <section className="py-24">
          <Section>
            <motion.div
              className="text-center mb-14"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <SectionLabel text="Core Focus" />
              <motion.h2
                variants={fadeUp}
                className="font-heading text-3xl sm:text-4xl font-bold gradient-text"
              >
                What I'm Building Expertise In
              </motion.h2>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {[
                {
                  icon: FaJava,
                  color: "#ed8b00",
                  title: "Java Development",
                  desc: "Building strong foundations in object-oriented programming, design patterns, and enterprise Java.",
                },
                {
                  icon: SiSpringboot,
                  color: "#6db33f",
                  title: "Spring Boot",
                  desc: "Developing RESTful services, dependency injection, layered architecture, and production-ready APIs.",
                },
                {
                  icon: FaServer,
                  color: "#3b82f6",
                  title: "REST API Design",
                  desc: "Designing clean, versioned, well-documented APIs with proper status codes and error handling.",
                },
                {
                  icon: FaDatabase,
                  color: "#22d3ee",
                  title: "Database Systems",
                  desc: "Working with MongoDB and relational databases — schema design, queries, indexing, and data modeling.",
                },
                {
                  icon: HiOutlineCube,
                  color: "#a78bfa",
                  title: "System Architecture",
                  desc: "Learning clean architecture, separation of concerns, and designing systems that scale gracefully.",
                },
                {
                  icon: FaCogs,
                  color: "#f59e0b",
                  title: "Problem Solving",
                  desc: "Breaking down complex requirements into modular, testable, and maintainable engineering solutions.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={scaleCard}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group glass rounded-2xl p-7 hover:glow-border transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}15` }}
                  >
                    <item.icon className="text-xl" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/35 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </section>

        {/* ══════════════════════════════════
            4. QUICK FACTS
           ══════════════════════════════════ */}
        <section className="py-24">
          <Section>
            <motion.div
              className="text-center mb-14"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <SectionLabel text="At a Glance" />
              <motion.h2
                variants={fadeUp}
                className="font-heading text-3xl sm:text-4xl font-bold text-white"
              >
                Quick Facts
              </motion.h2>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {[
                { icon: HiOutlineUser, label: "Name", value: "Aswanth Karuppannan", color: "#3b82f6" },
                { icon: HiOutlineAcademicCap, label: "Education", value: "CS Engineering", color: "#8b5cf6" },
                { icon: HiOutlineBriefcase, label: "Primary Focus", value: "Backend Development", color: "#22d3ee" },
                { icon: FaJava, label: "Current Stack", value: "Java + Spring Boot", color: "#ed8b00" },
                { icon: SiReact, label: "Frontend", value: "React · Tailwind", color: "#61dafb" },
                { icon: SiPython, label: "Also Skilled In", value: "Python · FastAPI · SEO", color: "#3776ab" },
                { icon: FaCamera, label: "Creative Side", value: "Film · Photo · Editing", color: "#e91e90" },
                { icon: HiOutlineTranslate, label: "Languages", value: "EN · Tamil · JP (N5)", color: "#f59e0b" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={scaleCard}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  className="glass rounded-2xl p-5 flex items-start gap-4 cursor-default hover:glow-border transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}12` }}
                  >
                    <item.icon className="text-lg" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5 font-medium">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/70 font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </section>

        {/* ══════════════════════════════════
            5. CAREER GOALS
           ══════════════════════════════════ */}
        <section className="py-24">
          <Section>
            <motion.div
              className="relative glass-strong rounded-3xl p-10 sm:p-14 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />

              <div className="relative z-10 max-w-3xl">
                <SectionLabel text="Where I'm Headed" />

                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                  Building for{" "}
                  <span className="gradient-text">Scale & Impact</span>
                </h2>

                <div className="space-y-5 text-base sm:text-lg text-white/40 leading-relaxed">
                  <p>
                    My goal is clear: become a backend engineer who can design, build, and maintain 
                    systems that real people depend on. Not just writing code — but <span className="text-white/60">
                    engineering reliable software</span> that handles complexity gracefully.
                  </p>
                  <p>
                    I'm especially drawn to:
                  </p>
                </div>

                <motion.div
                  className="grid sm:grid-cols-2 gap-3 mt-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Backend architecture & system design",
                    "Scalable distributed systems",
                    "API engineering & microservices",
                    "Real-world product development",
                  ].map((goal, i) => (
                    <motion.div
                      key={goal}
                      variants={fadeUp}
                      custom={i}
                      className="flex items-center gap-3 px-5 py-3.5 rounded-xl glass"
                    >
                      <FaRocket className="text-blue-400/60 flex-shrink-0 text-sm" />
                      <span className="text-sm text-white/55 font-medium">{goal}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </Section>
        </section>

        {/* ══════════════════════════════════
            6. CREATIVE EDGE
           ══════════════════════════════════ */}
        <section className="py-24">
          <Section>
            <motion.div
              className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Left — Text */}
              <div>
                <SectionLabel text="Beyond Code" />
                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6"
                >
                  The Creative{" "}
                  <span className="gradient-text">Advantage</span>
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="text-base sm:text-lg text-white/40 leading-relaxed mb-8"
                >
                  Most engineers write code. I also tell stories. Years behind a camera — directing 
                  short films, composing photographs, editing narratives — taught me something 
                  that no documentation ever could: <span className="text-white/60">how to think 
                  about the human on the other end</span>.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="text-base sm:text-lg text-white/40 leading-relaxed"
                >
                  Creative thinking sharpens how I approach product design, system communication, 
                  documentation, and even API architecture. It's not a side hobby — it's a 
                  competitive edge.
                </motion.p>
              </div>

              {/* Right — Creative skill cards */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
              >
                {[
                  {
                    icon: FaFilm,
                    title: "Filmmaking",
                    desc: "Direction, scripting, and visual narrative",
                    color: "#8b5cf6",
                  },
                  {
                    icon: FaCamera,
                    title: "Photography",
                    desc: "Composition, light, and mood",
                    color: "#ec4899",
                  },
                  {
                    icon: FaCut,
                    title: "Video Editing",
                    desc: "Post-production and storytelling",
                    color: "#22d3ee",
                  },
                  {
                    icon: FaLightbulb,
                    title: "Visual Thinking",
                    desc: "Design sense and user empathy",
                    color: "#f59e0b",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={scaleCard}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="glass rounded-2xl p-6 text-center cursor-default hover:glow-border transition-all duration-300"
                  >
                    <item.icon
                      className="text-2xl mx-auto mb-3"
                      style={{ color: item.color }}
                    />
                    <h4 className="font-heading text-sm font-semibold text-white/80 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/30 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Section>
        </section>

        {/* ══════════════════════════════════
            7. ACHIEVEMENTS
           ══════════════════════════════════ */}
        <section className="py-24 pb-32">
          <Section>
            <motion.div
              className="text-center mb-14"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <SectionLabel text="Recognition" />
              <motion.h2
                variants={fadeUp}
                className="font-heading text-3xl sm:text-4xl font-bold text-white"
              >
                Achievements
              </motion.h2>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {[
                {
                  icon: FaTrophy,
                  color: "#f59e0b",
                  title: "1st Prize — Kongu College of Engineering",
                  details: [
                    "Awarded first prize for technical project submission",
                    "₹10,000 cash prize",
                    "Internship opportunity",
                  ],
                },
                {
                  icon: FaLanguage,
                  color: "#22d3ee",
                  title: "JLPT N5 — Japanese Language Proficiency",
                  details: [
                    "Certified foundational Japanese proficiency",
                    "Demonstrates linguistic curiosity and discipline",
                    "Basic reading and listening competency",
                  ],
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={scaleCard}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="glass rounded-2xl p-8 hover:glow-border transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${item.color}15` }}
                  >
                    <item.icon className="text-xl" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-white/40">
                        <HiOutlineSparkles className="text-amber-400/50 mt-0.5 flex-shrink-0 text-xs" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </section>
      </div>
    </motion.div>
  );
}

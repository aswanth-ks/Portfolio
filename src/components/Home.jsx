import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaEnvelope, FaArrowRight } from "react-icons/fa";
import profileImg from "../assets/aswanth_2.jpg";

const roles = [
  "Full-Stack Developer",
  "Visual Storyteller",
  "SEO Specialist",
  "Creative Technologist",
  "Filmmaker",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen bg-navy-950 overflow-hidden flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Background Orbs ──────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px] animate-float" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] animate-float-medium" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Main Content ─────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* ── Left: Text Content ────────── */}
          <motion.div
            className="flex-1 lg:flex-[1.15] text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-5"
            >
              <span className="text-white">Hi, I'm </span>
              <br />
              <span className="gradient-text">Aswanth K.S</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div variants={itemVariants} className="mb-6 h-8 overflow-hidden">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-lg sm:text-xl font-medium text-white/50 tracking-wide font-heading"
              >
                {roles[roleIndex]}
              </motion.p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-white/40 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Crafting digital experiences at the intersection of code, design, and visual storytelling. 
              Turning ideas into products that matter.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-glow-blue hover:shadow-glow-purple transition-all duration-300 hover:scale-[1.03]"
              >
                View Projects
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-white/80 font-semibold text-sm hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-xs text-white/30 mr-2 uppercase tracking-widest">Connect</span>
              {[
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/aswanth-karuppannan/", label: "LinkedIn" },
                { icon: FaInstagram, href: "https://www.instagram.com/vision69", label: "Instagram" },
                { icon: FaEnvelope, href: "mailto:aswanthks@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Image ─────── */}
          <motion.div
            className="flex-1 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl animate-glow-pulse" />

              {/* Decorative shapes */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl border border-white/10 rotate-12 animate-float-slow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 -rotate-12 animate-float-medium" />

              {/* Image */}
              <motion.div
                className="relative w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-[22rem] lg:h-[26rem] rounded-3xl overflow-hidden shadow-premium"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImg}
                  alt="Aswanth K.S"
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

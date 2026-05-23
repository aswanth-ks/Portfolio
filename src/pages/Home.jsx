import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ProtectedImage from "../components/ui/ProtectedImage";
import { FaLinkedinIn, FaInstagram, FaEnvelope, FaArrowRight } from "react-icons/fa";
import profileImg from "../assets/images/profile/aswanth-profile.jpg";
import SEO from "../components/ui/SEO";

const roles = [
  "Full-Stack Developer",
  "Visual Storyteller",
  "Backend Developer | Java & Spring Boot Enthusiast",
  "Creative Technologist",
  "Filmmaker",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen bg-navy-950 overflow-hidden flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <SEO />
      {/* ── Background Orbs ──────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
          className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-float-slow" 
        />
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px] animate-float" 
        />
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}
          className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] animate-float-medium" 
        />
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* ── Left: Text Content ────────── */}
          <motion.div
            className="flex-1 lg:flex-[1.2] text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting badge */}
            <motion.div variants={itemVariants} className="mb-6 lg:mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 max-w-2xl mx-auto lg:mx-0"
            >
              <span className="text-white block mb-2">Hi, I'm </span>
              <span className="gradient-text break-words">Aswanth Karuppannan</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div variants={itemVariants} className="mb-8 h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-[17px] sm:text-[19px] font-medium text-white/50 tracking-wide font-heading"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-[16px] sm:text-[18px] text-white/40 leading-[1.8] max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Focused on building scalable backend systems, intelligent applications, and meaningful digital products. Passionate about Java, Spring Boot, AI-powered solutions, and solving real-world problems through engineering.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 justify-center lg:justify-start mb-12"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-500 hover:scale-[1.04]"
              >
                View Projects
                <FaArrowRight className="text-xs transition-transform duration-500 group-hover:translate-x-1.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass text-white/80 font-semibold text-sm hover:text-white hover:bg-white/10 transition-all duration-500 hover:scale-[1.04]"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-[11px] text-white/30 mr-2 uppercase tracking-widest font-semibold">Connect</span>
              {[
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/aswanth-karuppannan/", label: "LinkedIn" },
                { icon: FaInstagram, href: "https://www.instagram.com/_vision69_?igsh=enVrbnlpbnRjaHE0", label: "Instagram" },
                { icon: FaEnvelope, href: "mailto:aswanthks@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:shadow-glow-blue transition-all duration-500 hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Image ─────── */}
          <motion.div
            className="flex-1 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl animate-glow-pulse" />

              {/* Decorative shapes */}
              <motion.div 
                animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl border border-white/10" 
              />
              <motion.div 
                animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" 
              />

              {/* Image */}
              <motion.div
                className="relative w-64 h-72 sm:w-72 sm:h-[20rem] lg:w-[20rem] lg:h-[24rem] rounded-3xl overflow-hidden shadow-premium"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <ProtectedImage
                  src={profileImg}
                  alt="Aswanth Karuppannan"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

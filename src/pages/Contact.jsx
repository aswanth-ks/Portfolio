import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiDownload,
  FiMail,
  FiMapPin,
  FiArrowRight,
  FiUser,
  FiMessageSquare,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import SEO from "../components/ui/SEO";

import resumeFile from "../assets/documents/resume.pdf";

/* ─── Animation Variants ─────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 25, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ─── Contact Links Data ─────────────────────────── */
const contactLinks = [
  {
    id: "linkedin",
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "Aswanth Karuppannan",
    href: "https://www.linkedin.com/in/aswanth-karuppannan/",
    gradient: "from-blue-500 to-blue-700",
    glowColor: "hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]",
    description: "Professional network",
  },
  {
    id: "github",
    icon: FaGithub,
    label: "GitHub",
    value: "aswanth-ks",
    href: "https://github.com/aswanth-ks",
    gradient: "from-gray-500 to-gray-700",
    glowColor: "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
    description: "Open source & projects",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    label: "Instagram",
    value: "@_vision69_",
    href: "https://www.instagram.com/_vision69_?igsh=enVrbnlpbnRjaHE0",
    gradient: "from-pink-500 via-purple-500 to-orange-400",
    glowColor: "hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
    description: "Visual storytelling",
  },
  {
    id: "email",
    icon: FiMail,
    label: "Email",
    value: "aswanthks@gmail.com",
    href: "mailto:aswanthks@gmail.com",
    gradient: "from-cyan-400 to-blue-500",
    glowColor: "hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]",
    description: "Direct communication",
  },
];

/* ─── Floating Particle ──────────────────────────── */
function FloatingShape({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );
}

/* ─── Contact Card Component ─────────────────────── */
function ContactCard({ link, index }) {
  const Icon = link.icon;

  return (
    <motion.a
      href={link.href}
      target={link.id !== "email" ? "_blank" : undefined}
      rel={link.id !== "email" ? "noopener noreferrer" : undefined}
      custom={index}
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative glass rounded-2xl p-6 transition-all duration-500 cursor-pointer ${link.glowColor} block`}
    >
      {/* Subtle top accent line */}
      <div
        className={`absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-full`}
      />

      <div className="flex items-center gap-4">
        {/* Icon circle */}
        <div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="text-white text-lg" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-0.5">
            {link.label}
          </p>
          <p className="text-sm sm:text-base font-semibold text-white/80 group-hover:text-white transition-colors truncate">
            {link.value}
          </p>
          <p className="text-xs text-white/25 mt-0.5">{link.description}</p>
        </div>

        {/* Arrow */}
        <FiArrowRight className="text-white/20 group-hover:text-white/60 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
      </div>
    </motion.a>
  );
}

/* ─── Premium Form Input ─────────────────────────── */
function FormField({ icon: Icon, label, type = "text", name, value, onChange, multiline = false }) {
  const [focused, setFocused] = useState(false);
  const baseClasses =
    "w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 pl-11 text-sm text-white/90 placeholder-white/20 outline-none transition-all duration-300 font-body";
  const focusClasses = focused
    ? "border-blue-500/40 bg-white/[0.05] shadow-[0_0_20px_rgba(59,130,246,0.08)]"
    : "hover:border-white/10 hover:bg-white/[0.04]";

  return (
    <div className="relative">
      {/* Label */}
      <label className="block text-xs text-white/35 uppercase tracking-widest font-semibold mb-2">
        {label}
      </label>
      <div className="relative">
        {/* Icon */}
        <Icon className={`absolute left-3.5 top-4 text-sm transition-colors duration-300 ${focused ? "text-blue-400" : "text-white/20"}`} />

        {multiline ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            required
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            rows={5}
            className={`${baseClasses} ${focusClasses} resize-none`}
            placeholder={`Enter your ${label.toLowerCase()}...`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`${baseClasses} ${focusClasses}`}
            placeholder={`Enter your ${label.toLowerCase()}...`}
          />
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   CONTACT PAGE
   ═══════════════════════════════════════════════════ */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formPayload = new FormData();
    formPayload.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("subject", formData.subject);
    formPayload.append("message", formData.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <motion.section
      className="relative min-h-screen bg-navy-950 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title="Contact" 
        description="Get in touch for opportunities, collaborations, or technical inquiries. I'm always open to discussing new ideas."
      />
      {/* ── Background Layer ──────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[150px] animate-float-slow" />
        <div className="absolute top-[20%] right-[-15%] w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[140px] animate-float" />
        <div className="absolute bottom-[-10%] left-[20%] w-[450px] h-[450px] rounded-full bg-cyan-500/5 blur-[120px] animate-float-medium" />
        <div className="absolute bottom-[15%] right-[10%] w-[300px] h-[300px] rounded-full bg-amber-500/3 blur-[100px] animate-float-slow" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating decorative shapes */}
        <FloatingShape
          className="top-[12%] left-[8%] w-16 h-16 rounded-2xl border border-white/[0.04] rotate-12"
          delay={0}
        />
        <FloatingShape
          className="top-[25%] right-[12%] w-10 h-10 rounded-xl bg-blue-500/[0.04] -rotate-6"
          delay={1.5}
        />
        <FloatingShape
          className="bottom-[20%] left-[5%] w-12 h-12 rounded-full border border-purple-500/[0.06]"
          delay={2.5}
        />
        <FloatingShape
          className="top-[60%] right-[6%] w-8 h-8 rounded-lg bg-cyan-500/[0.03] rotate-45"
          delay={1}
        />
        <FloatingShape
          className="bottom-[35%] right-[25%] w-14 h-14 rounded-2xl border border-white/[0.03] -rotate-12"
          delay={3}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
        {/* ═══════════════════════════════════════
            SECTION 1 — HERO CTA
            ═══════════════════════════════════════ */}
        <motion.div
          className="text-center mb-20 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-white/50 uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to Opportunities
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6 max-w-4xl mx-auto"
          >
            <span className="text-white">Let's Build Something</span>
            <br />
            <span className="gradient-text">Meaningful Together.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            I'm a backend-focused full-stack engineer open to internships, software engineering roles, 
            research opportunities, and creative collaborations. Let's turn ambitious ideas into robust systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 justify-center"
          >
            {/* Primary — Email */}
            <motion.a
              href="mailto:aswanthks@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-glow-blue hover:shadow-glow-purple transition-all duration-300"
            >
              <FiMail className="text-base" />
              Email Me
              <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </motion.a>

            {/* Secondary — Resume */}
            <motion.a
              href={resumeFile}
              download="Aswanth_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl glass text-white/80 font-semibold text-sm hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <FiDownload className="text-base" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════
            SECTION 2 + 3 — CARDS + FORM GRID
            ═══════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* ── LEFT: Contact Cards ────────────── */}
          <div>
            {/* Section label */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              <span className="text-xs font-semibold text-blue-400/60 uppercase tracking-[0.2em]">
                Connect
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </motion.div>

            {/* Cards */}
            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <ContactCard key={link.id} link={link} index={i} />
              ))}

              {/* Location card — static */}
              <motion.div
                custom={contactLinks.length}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-amber-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-0.5">
                      Location
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-white/80">
                      Tamil Nadu, India
                    </p>
                    <p className="text-xs text-white/25 mt-0.5">IST (UTC +5:30)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ────────────── */}
          <div>
            {/* Section label */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
              <span className="text-xs font-semibold text-purple-400/60 uppercase tracking-[0.2em]">
                Send a Message
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass rounded-3xl p-7 sm:p-8 lg:p-10 space-y-6"
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  icon={FiUser}
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FormField
                  icon={FiMail}
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Subject */}
              <FormField
                icon={FiFileText}
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              {/* Message */}
              <FormField
                icon={FiMessageSquare}
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={status !== "submitting" ? { scale: 1.02 } : {}}
                whileTap={status !== "submitting" ? { scale: 0.97 } : {}}
                className={`relative w-full py-4 rounded-xl font-semibold text-sm transition-all duration-500 overflow-hidden ${
                  status === "success"
                    ? "bg-green-500/20 border border-green-500/30 text-green-300"
                    : status === "error"
                    ? "bg-red-500/20 border border-red-500/30 text-red-300"
                    : status === "submitting"
                    ? "bg-blue-600/50 text-white/70 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-glow-blue hover:shadow-glow-purple"
                }`}
                disabled={status === "submitting" || status === "success"}
              >
                {status === "success" ? (
                  <span className="inline-flex items-center gap-2">
                    <FiCheckCircle className="text-lg" />
                    Message Sent Successfully!
                  </span>
                ) : status === "error" ? (
                  <span className="inline-flex items-center gap-2">
                    Something went wrong. Try again.
                  </span>
                ) : status === "submitting" ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <FiSend className="text-sm" />
                    Send Message
                  </span>
                )}
              </motion.button>

              <p className="text-center text-[11px] text-white/30">
                Secured by Web3Forms. No data is stored by third parties.
              </p>
            </motion.form>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            BOTTOM — Closing Statement
            ═══════════════════════════════════════ */}
        <motion.div
          className="text-center mt-20 lg:mt-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto mb-8" />
          <p className="text-white/20 text-sm max-w-md mx-auto leading-relaxed">
            I'm always excited to discuss new projects, research collaborations,
            or career opportunities. Let's create something remarkable.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

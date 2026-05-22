import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";

const projects = [
  {
    id: 1,
    number: "01",
    name: "Trust-Based Escrow System",
    tagline: "Startup Concept",
    short:
      "A secure escrow workflow enabling QR-code verification for counterparty identity and a monitored transaction lifecycle for buyer–seller exchanges.",
    highlights: [
      "QR-code based verification between buyer and seller",
      "End-to-end secure transaction lifecycle and dispute-ready logging",
      "Unique user ID–based transaction requests",
      "Admin dashboard for monitoring and oversight",
    ],
    tech: ["HTML", "CSS", "React", "FastAPI", "MongoDB"],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    number: "02",
    name: "Admin Dashboard & Analytics",
    tagline: "Production System",
    short:
      "A production-focused dashboard for report generation, real-time monitoring, and backend-integrated operational analytics.",
    highlights: [
      "Automated report generation and export",
      "Real-time data monitoring and visualization",
      "Tight backend integration for reliable metrics and alerts",
    ],
    tech: ["React", "FastAPI", "MongoDB"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    number: "03",
    name: "NFC/RFID Attendance System",
    tagline: "IoT Project",
    short:
      "A hardware-integrated attendance solution that links smart ID readings to a backend logging service for accurate, real-time attendance records.",
    highlights: [
      "Smart ID–based attendance using NFC/RFID",
      "Real-time event logging with persistent storage",
      "Hardware and backend integration for end-to-end reliability",
    ],
    tech: ["Embedded Firmware", "NFC/RFID", "Backend Services"],
    gradient: "from-amber-400 to-orange-500",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="relative min-h-screen bg-navy-950 py-24 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[-5%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-[-5%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-white/50 uppercase tracking-widest mb-4">
            Selected Work
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold gradient-text mb-4">
            Projects
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            Real-world products and systems I've designed and built.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((p, index) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="group relative glass rounded-3xl p-8 sm:p-10 overflow-hidden transition-shadow duration-500 hover:glow-border"
            >
              {/* Large faded number */}
              <span className="absolute top-4 right-6 font-heading text-[6rem] font-extrabold text-white/[0.02] leading-none select-none pointer-events-none">
                {p.number}
              </span>

              <div className="relative z-10">
                {/* Tagline */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${p.gradient} text-white/90 mb-4`}>
                  {p.tagline}
                </span>

                {/* Title */}
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                  {p.name}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-base leading-relaxed max-w-2xl mb-6">
                  {p.short}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-7">
                  {p.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.06 }}
                      className="flex items-start gap-2.5 text-sm text-white/50"
                    >
                      <FiCheckCircle className="text-green-400/70 mt-0.5 flex-shrink-0" />
                      {h}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech tags + CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium glass text-white/50 hover:text-white/80 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-white/40 hover:text-white transition-colors group/btn">
                    View Details
                    <FiExternalLink className="text-xs transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

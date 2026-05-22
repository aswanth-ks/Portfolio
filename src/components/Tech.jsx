import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaNodeJs,
  FaPython, FaGitAlt, FaSearch, FaCamera, FaFilm, FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss, SiSpringboot, SiFastapi, SiMongodb, SiMysql,
  SiPostman, SiAdobepremierepro, SiGoogleanalytics,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const categories = [
  {
    title: "Frontend",
    gradient: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", icon: FaJsSquare, color: "#f7df1e" },
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    ],
  },
  {
    title: "Backend",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Java", icon: FaJava, color: "#ed8b00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Python", icon: FaPython, color: "#3776ab" },
    ],
  },
  {
    title: "Database",
    gradient: "from-green-500 to-emerald-400",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "Tools & DevOps",
    gradient: "from-amber-400 to-orange-500",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#f05032" },
      { name: "VS Code", icon: VscCode, color: "#007acc" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Figma", icon: FaFigma, color: "#f24e1e" },
    ],
  },
  {
    title: "SEO",
    gradient: "from-cyan-400 to-blue-500",
    skills: [
      { name: "On-Page SEO", icon: FaSearch, color: "#4285f4" },
      { name: "Google Analytics", icon: SiGoogleanalytics, color: "#e37400" },
    ],
  },
  {
    title: "Creative Tech",
    gradient: "from-pink-500 to-purple-500",
    skills: [
      { name: "Photography", icon: FaCamera, color: "#e91e90" },
      { name: "Filmmaking", icon: FaFilm, color: "#9333ea" },
      { name: "Premiere Pro", icon: SiAdobepremierepro, color: "#9999ff" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Tech() {
  return (
    <motion.section
      className="relative min-h-screen bg-navy-950 py-24 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-white/50 uppercase tracking-widest mb-4">
            Technical Expertise
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            A curated stack of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            >
              {/* Category title */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-0.5 rounded-full bg-gradient-to-r ${cat.gradient}`} />
                <h3 className="font-heading text-lg font-semibold text-white/70">
                  {cat.title}
                </h3>
              </div>

              {/* Skill cards grid */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
              >
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      transition: { duration: 0.2 },
                    }}
                    className="group glass rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default hover:glow-border transition-shadow duration-300"
                  >
                    <skill.icon
                      className="text-3xl transition-all duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

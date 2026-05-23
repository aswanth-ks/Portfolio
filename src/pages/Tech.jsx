import React from "react";
import { motion } from "framer-motion";
import { categories } from "../data/skills";
import SEO from "../components/ui/SEO";



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
      <SEO 
        title="Technical Skills" 
        description="A curated stack of tools and technologies I use to bring ideas to life. From Java and Spring Boot to React, Tailwind, and IoT embedded systems."
      />
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

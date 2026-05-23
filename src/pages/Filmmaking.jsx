import React from "react";
import { motion } from "framer-motion";
import thumb from "../assets/photo1.jpg";
import ProtectedImage from "../components/ui/ProtectedImage";
import SEO from "../components/ui/SEO";

export default function Film() {
  const videos = [
    { id: 1, title: "Short Film - 'Quiet Roads'", duration: "3:22", thumb },
    { id: 2, title: "Documentary Teaser", duration: "1:45", thumb },
    { id: 3, title: "Music Video - Sample", duration: "2:10", thumb },
  ];

  return (
    <motion.section 
      className="min-h-screen p-10 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title="Filmmaking" 
        description="A collection of short films, creative edits, and visual storytelling directed and produced by Aswanth Karuppannan."
      />
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Filmmaking</h2>
        <p className="text-gray-300 mb-8">Selected works, behind-the-scenes notes and project context showcasing storytelling & craft.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <article key={v.id} className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
              <ProtectedImage 
                src={v.thumb} 
                alt={v.title} 
                containerClassName="w-full h-44"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                watermark={true}
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{v.title}</h3>
                <p className="text-sm text-gray-400">Duration: {v.duration}</p>
                <div className="mt-3 flex gap-2">
                  <button className="bg-indigo-500 px-3 py-1 rounded text-white text-sm">Watch</button>
                  <button className="border border-white/20 px-3 py-1 rounded text-sm">Details</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

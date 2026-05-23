import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader({ onComplete }) {
  const [phase, setPhase] = useState(0);

  // Timing logic for the sequence
  useEffect(() => {
    const p1 = setTimeout(() => setPhase(1), 800); // Show "Initializing..."
    const p2 = setTimeout(() => setPhase(2), 1600); // Show "Compiling..."
    const p3 = setTimeout(() => setPhase(3), 2400); // Show Name Reveal
    const p4 = setTimeout(() => setPhase(4), 3800); // End intro
    
    return () => {
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(p4);
    };
  }, []);

  // End the sequence
  useEffect(() => {
    if (phase === 4) {
      setTimeout(() => {
        onComplete();
      }, 600); // Wait for fade out
    }
  }, [phase, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 4 ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950 overflow-hidden font-body"
    >
      {/* Abstract Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #4f4f4f 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Skip Button */}
      <button 
        onClick={() => { setPhase(4); onComplete(); }}
        className="absolute top-8 right-8 z-50 text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors duration-300 font-bold glass px-4 py-2 rounded-full border border-white/5"
      >
        Skip Intro
      </button>

      <div className="relative z-10 text-center flex flex-col items-center justify-center w-full px-6">
        <AnimatePresence mode="wait">
          
          {/* Phase 0 & 1: System Init */}
          {phase < 3 && (
            <motion.div
              key="system-init"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">System Boot</span>
              </div>
              
              <div className="h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  {phase === 0 && (
                    <motion.p
                      key="p0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-white/60 font-mono text-sm uppercase"
                    >
                      INITIALIZING...
                    </motion.p>
                  )}
                  {phase === 1 && (
                    <motion.p
                      key="p1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-white/60 font-mono text-sm"
                    >
                      Loading Systems...
                    </motion.p>
                  )}
                  {phase === 2 && (
                    <motion.p
                      key="p2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-white/60 font-mono text-sm"
                    >
                      Preparing Portfolio Interface...
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* Phase 3: Name Reveal */}
          {phase === 3 && (
            <motion.div
              key="name-reveal"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] text-center break-words">
                Aswanth Karuppannan
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xs sm:text-sm text-cyan-400 tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold"
              >
                Welcome to My Engineering Portfolio
              </motion.div>
            </motion.div>
          )}
          
        </AnimatePresence>
      </div>
      
      {/* Center ambient glow */}
      <motion.div 
        animate={{ 
          opacity: phase === 3 ? 1 : 0,
          scale: phase === 3 ? 1 : 0.8
        }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"
      />
    </motion.div>
  );
}

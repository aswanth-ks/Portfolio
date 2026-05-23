import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import ProtectedImage from "../components/ui/ProtectedImage";
import SEO from "../components/ui/SEO";

function importAll(r) {
  return r.keys().map(r);
}

const photos = importAll(
  require.context("../assets/images/photography", false, /\.(jpe?g|png|webp|svg)$/i)
);

export default function Photo() {
  const [active, setActive] = useState(null);

  const handleClose = useCallback(() => setActive(null), []);

  // Keyboard: Escape to close, arrow keys to navigate
  useEffect(() => {
    if (active === null) return;
    const handler = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") setActive((prev) => (prev + 1) % photos.length);
      if (e.key === "ArrowLeft") setActive((prev) => (prev - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, handleClose]);

  return (
    <motion.section
      className="relative min-h-screen bg-navy-950 py-24 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title="Photography" 
        description="A visual portfolio of photography showcasing composition, light, and visual storytelling."
      />
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-white/50 uppercase tracking-widest mb-4">
            Visual Portfolio
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold gradient-text mb-4">
            Photography
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            Capturing light, mood, and story — one frame at a time.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="break-inside-avoid"
            >
              <button
                onClick={() => setActive(i)}
                className="group relative w-full rounded-2xl overflow-hidden cursor-pointer block"
                aria-label={`Open photo ${i + 1}`}
              >
                <ProtectedImage
                  src={src}
                  alt={`Photography ${i + 1}`}
                  containerClassName="w-full"
                  className="w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.04]"
                  watermark={true}
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-5">
                  <span className="text-sm font-medium text-white/80 font-heading">
                    Photo {i + 1}
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ─────────────────────── */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
            onClick={handleClose}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-xl glass-strong flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <HiX size={20} />
            </button>

            {/* Image */}
            <ProtectedImage
              key={active}
              src={photos[active]}
              alt={`Photography ${active + 1}`}
              isMotion={true}
              watermark={true}
              motionProps={{
                initial: { opacity: 0, scale: 0.92 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.92 },
                transition: { duration: 0.3 }
              }}
              className="max-h-[85vh] max-w-[92vw] object-contain rounded-2xl shadow-premium"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass text-sm text-white/50 font-medium">
              {active + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

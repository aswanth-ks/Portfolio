import React, { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCamera, FiMapPin, FiCalendar, FiArrowRight, FiArrowLeft,
  FiX, FiAperture,
} from "react-icons/fi";
import ProtectedImage from "../components/ui/ProtectedImage";
import SEO from "../components/ui/SEO";
import { Helmet } from "react-helmet-async";
import { photos, categories, creativeJourney, featuredIds } from "../data/photography";

/* ─── Animation Variants ─────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

/* ═══════════════════════════════════════════════════
   PHOTOGRAPHY PAGE
   ═══════════════════════════════════════════════════ */
export default function Photo() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activePhoto, setActivePhoto] = useState(null);
  const galleryRef = useRef(null);
  const featuredRef = useRef(null);
  const journeyRef = useRef(null);

  /* ── Derived data ── */
  const filteredPhotos = useMemo(() => {
    if (activeFilter === "All") return photos;
    return photos.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const featuredPhotos = useMemo(() => {
    return featuredIds.map((id) => photos.find((p) => p.id === id)).filter(Boolean);
  }, []);

  /* ── Keyboard navigation for lightbox ── */
  useEffect(() => {
    if (activePhoto === null) return;
    const handler = (e) => {
      if (e.key === "Escape") setActivePhoto(null);
      if (e.key === "ArrowRight") {
        const currentIdx = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
        if (currentIdx < filteredPhotos.length - 1) setActivePhoto(filteredPhotos[currentIdx + 1]);
      }
      if (e.key === "ArrowLeft") {
        const currentIdx = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
        if (currentIdx > 0) setActivePhoto(filteredPhotos[currentIdx - 1]);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [activePhoto, filteredPhotos]);

  const handleClose = useCallback(() => setActivePhoto(null), []);

  const navigatePhoto = useCallback((direction) => {
    if (!activePhoto) return;
    const currentIdx = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIdx = currentIdx + direction;
    if (nextIdx >= 0 && nextIdx < filteredPhotos.length) {
      setActivePhoto(filteredPhotos[nextIdx]);
    }
  }, [activePhoto, filteredPhotos]);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
        title="Photography | Visual Storytelling & Cinematic Frames"
        description="Explore the photography portfolio of Aswanth Karuppannan — cinematic street photography, travel frames from Thailand, visual storytelling, and creative perspectives from a photographer and creative technologist in Tamil Nadu."
        keywords="Aswanth Karuppannan photography, Aswanth Karuppannan photographer, cinematic photography portfolio, visual storytelling, street photography Thailand, creative technologist portfolio, photographer Tamil Nadu, Aswanth Karuppannan visual storyteller"
      />
      {/* Photography-specific JSON-LD structured data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Photography Portfolio — Aswanth Karuppannan",
            "description": "Cinematic street photography, travel frames from Thailand, and visual storytelling by Aswanth Karuppannan — photographer and creative technologist from Tamil Nadu, India.",
            "url": "https://aswanthks-portfolio.vercel.app/photo",
            "author": {
              "@type": "Person",
              "name": "Aswanth Karuppannan",
              "jobTitle": "Photographer / Visual Storyteller / Creative Technologist",
              "url": "https://aswanthks-portfolio.vercel.app",
              "sameAs": [
                "https://github.com/aswanth-ks",
                "https://www.linkedin.com/in/aswanth-karuppannan/",
                "https://www.instagram.com/_vision69_"
              ]
            },
            "mainEntity": {
              "@type": "ImageGallery",
              "name": "Aswanth Karuppannan Photography Collection",
              "description": "A curated collection of cinematic, street, travel, and portrait photography.",
              "numberOfItems": photos.length,
              "image": photos.slice(0, 5).map((p) => ({
                "@type": "Photograph",
                "name": p.title,
                "description": p.description,
                "contentLocation": { "@type": "Place", "name": p.location },
              })),
            },
          })}
        </script>
      </Helmet>

      {/* ── Background Orbs ──────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-pink-600/5 blur-[150px] animate-float-slow" />
        <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[130px] animate-float" />
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px] animate-float-medium" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════
          1. CINEMATIC HERO SECTION
         ═══════════════════════════════════════ */}
      <div className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center px-6 pt-24 pb-16">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-white/50 uppercase tracking-widest mb-8"
          >
            <FiAperture className="text-pink-400" />
            Visual Portfolio
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6 tracking-tight"
          >
            Frames That Tell{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-amber-400">
              Stories
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-sm sm:text-base uppercase tracking-[0.3em] text-white/30 font-medium mb-8"
          >
            Photography · Visual Storytelling · Cinematic Perspectives
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-12 font-light"
          >
            Engineering taught me systems. Photography taught me perspective.
            Every frame is a conscious decision — to isolate light, capture emotion, and tell a story that words can't.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="flex flex-wrap items-center gap-5 justify-center"
          >
            <button
              onClick={() => scrollTo(featuredRef)}
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-500 hover:scale-[1.04]"
            >
              Featured Work
              <FiArrowRight className="text-xs transition-transform duration-500 group-hover:translate-x-1.5" />
            </button>
            <button
              onClick={() => scrollTo(galleryRef)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass text-white/80 font-semibold text-sm hover:text-white hover:bg-white/10 transition-all duration-500 hover:scale-[1.04]"
            >
              Explore Gallery
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════
          2. FEATURED WORK SECTION
         ═══════════════════════════════════════ */}
      <div ref={featuredRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400/80 mb-4 block">
            Featured Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Selected Frames
          </h2>
        </motion.div>

        <div className="space-y-20 lg:space-y-28">
          {featuredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <button
                  onClick={() => setActivePhoto(photo)}
                  className="group relative w-full rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer block shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
                >
                  <ProtectedImage
                    src={photo.src}
                    alt={photo.alt}
                    containerClassName="w-full"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    watermark={true}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* VIEW badge on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <span className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em]">
                      View
                    </span>
                  </div>
                </button>
              </div>

              {/* Story */}
              <div className="flex-1 w-full lg:max-w-md">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400/80 mb-4 block">
                  {photo.category}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  {photo.title}
                </h3>
                <p className="text-lg text-white/50 leading-relaxed mb-6 font-light">
                  {photo.description}
                </p>
                <p className="text-base text-white/40 leading-relaxed mb-8 italic">
                  "{photo.story}"
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-white/30 font-medium">
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="text-white/20" /> {photo.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCamera className="text-white/20" /> {photo.gear}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="text-white/20" /> {photo.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════
          3. GALLERY SECTION
         ═══════════════════════════════════════ */}
      <div ref={galleryRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400/80 mb-4 block">
            Gallery
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            The Full Collection
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Explore by category or browse freely. Click any frame to dive into its story.
          </p>
        </motion.div>

        {/* ── Category Filters ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-400 border ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-pink-600/80 to-purple-600/80 text-white border-pink-500/40 shadow-[0_0_15px_rgba(219,39,119,0.25)]"
                  : "bg-white/[0.03] text-white/40 border-white/[0.08] hover:text-white/70 hover:bg-white/[0.06] hover:border-white/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Masonry Gallery ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {filteredPhotos.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => setActivePhoto(photo)}
                  className="group relative w-full rounded-2xl overflow-hidden cursor-pointer block"
                  aria-label={`Open: ${photo.title}`}
                >
                  <ProtectedImage
                    src={photo.src}
                    alt={photo.alt}
                    containerClassName="w-full"
                    className="w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.04]"
                    watermark={true}
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl flex flex-col justify-end p-5 sm:p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400/90 mb-1.5">
                      {photo.category}
                    </span>
                    <span className="text-base sm:text-lg font-heading font-bold text-white leading-tight mb-1">
                      {photo.title}
                    </span>
                    <span className="text-xs text-white/50 font-light line-clamp-2">
                      {photo.description}
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30 text-lg">No photos in this category yet.</p>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════
          CINEMATIC STORY BRIDGE
         ═══════════════════════════════════════ */}
      <div className="relative z-10 overflow-hidden">
        {/* Atmospheric background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-600/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white/80 leading-[1.4] mb-6">
              Photography wasn't where this started.
            </p>
            <p className="text-lg sm:text-xl text-white/35 leading-relaxed font-light max-w-xl mx-auto mb-10">
              It started with cinema — with learning to see light, silence, and the stories hidden in ordinary moments.
            </p>
            <button
              onClick={() => scrollTo(journeyRef)}
              className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/60 hover:text-amber-400 transition-colors duration-500"
            >
              <span className="h-px w-8 bg-amber-400/30 group-hover:w-12 transition-all duration-500" />
              Discover the journey
              <span className="h-px w-8 bg-amber-400/30 group-hover:w-12 transition-all duration-500" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          4. CREATIVE JOURNEY / TIMELINE
         ═══════════════════════════════════════ */}
      <div ref={journeyRef} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400/80 mb-4 block">
            Creative Evolution
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            The Journey So Far
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From seeing photography as "just photos" to carrying a camera across countries — this is the real story of how I learned to see.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {creativeJourney.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-start gap-6 md:gap-12 relative ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_10px_rgba(219,39,119,0.4)] md:-translate-x-1.5 -translate-x-1.5 mt-2 z-10" />

                {/* Content Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400/70 mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/40 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey closing note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-white/25 text-sm italic mt-20 max-w-lg mx-auto leading-relaxed"
        >
          This journey is still continuing. Every frame teaches something new.
        </motion.p>
      </div>

      {/* ═══════════════════════════════════════
          5. IMMERSIVE PHOTO MODAL
         ═══════════════════════════════════════ */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-xl flex items-center justify-center"
            onClick={handleClose}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-11 h-11 rounded-xl glass-premium flex items-center justify-center text-white/60 hover:text-white transition-colors z-30 border border-white/10"
              aria-label="Close"
            >
              <FiX size={20} />
            </button>

            {/* Navigation arrows */}
            {filteredPhotos.findIndex((p) => p.id === activePhoto.id) > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigatePhoto(-1); }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl glass-premium flex items-center justify-center text-white/50 hover:text-white transition-colors z-30 border border-white/10"
                aria-label="Previous photo"
              >
                <FiArrowLeft size={18} />
              </button>
            )}
            {filteredPhotos.findIndex((p) => p.id === activePhoto.id) < filteredPhotos.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigatePhoto(1); }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl glass-premium flex items-center justify-center text-white/50 hover:text-white transition-colors z-30 border border-white/10"
                aria-label="Next photo"
              >
                <FiArrowRight size={18} />
              </button>
            )}

            {/* Split-screen content */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col lg:flex-row w-full max-w-[1400px] max-h-[92vh] mx-4 sm:mx-6 lg:mx-8 rounded-2xl lg:rounded-3xl overflow-hidden glass-premium border border-white/[0.08] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left: Image */}
              <div className="flex-[1.3] bg-navy-950 flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-[40vh] lg:min-h-0">
                <AnimatePresence mode="wait">
                  <ProtectedImage
                    key={activePhoto.id}
                    src={activePhoto.src}
                    alt={activePhoto.alt}
                    isMotion={true}
                    watermark={true}
                    motionProps={{
                      initial: { opacity: 0, scale: 0.96 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.96 },
                      transition: { duration: 0.3 },
                    }}
                    className="max-h-[45vh] lg:max-h-[80vh] max-w-full object-contain rounded-xl"
                  />
                </AnimatePresence>
              </div>

              {/* Right: Story & Details */}
              <div className="flex-1 lg:max-w-md xl:max-w-lg p-6 sm:p-8 lg:p-10 overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/[0.06] bg-navy-950/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhoto.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Category */}
                    <span className="inline-block px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400 mb-6">
                      {activePhoto.category}
                    </span>

                    {/* Title */}
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                      {activePhoto.title}
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-6 font-light">
                      {activePhoto.description}
                    </p>

                    {/* Story */}
                    <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-3">
                        The Story
                      </h4>
                      <p className="text-sm sm:text-base text-white/45 leading-[1.8] italic font-light">
                        "{activePhoto.story}"
                      </p>
                    </div>

                    {/* Separator */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                    {/* Metadata Grid */}
                    <div className="space-y-5">
                      <div className="flex items-start gap-3">
                        <FiMapPin className="text-white/20 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 block mb-1">Location</span>
                          <span className="text-sm text-white/60 font-medium">{activePhoto.location}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FiCamera className="text-white/20 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 block mb-1">Gear</span>
                          <span className="text-sm text-white/60 font-medium">{activePhoto.gear}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FiCalendar className="text-white/20 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 block mb-1">Year</span>
                          <span className="text-sm text-white/60 font-medium">{activePhoto.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Image counter */}
                    <div className="mt-10 pt-6 border-t border-white/[0.06]">
                      <span className="text-xs text-white/20 font-medium">
                        {filteredPhotos.findIndex((p) => p.id === activePhoto.id) + 1} / {filteredPhotos.length}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

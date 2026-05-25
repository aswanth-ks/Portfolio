import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Lazy loading all pages
const Home = lazy(() => import("../pages/Home"));
const Tech = lazy(() => import("../pages/Tech"));
const Photo = lazy(() => import("../pages/Photography"));
const About = lazy(() => import("../pages/About"));
const Achievements = lazy(() => import("../pages/Achievements"));
const Experience = lazy(() => import("../pages/Experience"));
const Projects = lazy(() => import("../pages/Projects"));
const Blog = lazy(() => import("../pages/Blog"));
const Contact = lazy(() => import("../pages/Contact"));

const RoverBatteryPost = lazy(() => import("../blog/RoverBatteryPost"));
const IEEEResearchPost = lazy(() => import("../blog/IEEEResearchPost"));
const DigsafePost = lazy(() => import("../blog/DigsafePost"));
const SmartAidPost = lazy(() => import("../blog/SmartAidPost"));
const TrustTradePost = lazy(() => import("../blog/TrustTradePost"));
const SEOFixPost = lazy(() => import("../blog/SEOFixPost"));

// Minimal fallback to prevent UI flashes while lazy loading chunks
const FallbackLoader = () => <div className="min-h-screen bg-navy-950" />;

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<FallbackLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/rover-battery" element={<RoverBatteryPost />} />
          <Route path="/blog/ieee-research" element={<IEEEResearchPost />} />
          <Route path="/blog/digsafe" element={<DigsafePost />} />
          <Route path="/blog/smartaid" element={<SmartAidPost />} />
          <Route path="/blog/trusttrade" element={<TrustTradePost />} />
          <Route path="/blog/seo-architecture" element={<SEOFixPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

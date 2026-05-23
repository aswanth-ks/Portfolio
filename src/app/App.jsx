import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import IntroLoader from "../components/layout/IntroLoader";
import ScrollToTop from "../components/ui/ScrollToTop";
import AppRoutes from "./routes";

function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("introPlayed");
    if (!hasPlayed) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowIntro(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-navy-950 text-white font-body relative">
        {showIntro && <IntroLoader onComplete={handleIntroComplete} />}
        
        {/* We keep the rest of the app in the DOM but maybe hidden or under the intro.
            Since IntroLoader is fixed z-100 and covers the screen, we don't strictly need to unmount the app,
            but unmounting prevents scroll weirdness. Let's conditionally render to be clean. */}
        
        {!showIntro && (
          <div className="animate-fade-in">
            <Navbar />
            <main className="pt-16">
              <AppRoutes />
            </main>
            <footer className="w-full text-center py-6 text-white/30 text-[11px] uppercase tracking-[0.2em] font-semibold border-t border-white/5 bg-navy-950/50 backdrop-blur-md relative z-50">
              Designed & Developed by Aswanth Karuppannan
            </footer>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

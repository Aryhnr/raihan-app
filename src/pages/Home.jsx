import { useState } from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TransitionPortal from "../components/common/TransitionPortal";
import Navbar from "../components/layout/Navbar";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";

const Home = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const handleNavClick = (id) => {
    setTargetId(id);
    setIsTransitioning(true);
  };

  const finalizeTransition = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }
    // Delay sebelum menutup TransitionPortal agar semua lembar buku bisa flip keluar
    setTimeout(() => {
      setIsTransitioning(false);
      setTargetId(null);
    }, 350);
  };

  return (
    <div className="relative">
      <TransitionPortal
        isActive={isTransitioning}
        onComplete={finalizeTransition}
      />

      <Navbar onNavClick={handleNavClick} />

      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TransitionPortal from "../components/common/TransitionPortal";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";

const Home = ({ isTransitioning, finalizeTransition }) => {
  const location = useLocation();

  // Handle navigation from other pages (like ProjectDetail)
  useEffect(() => {
    if (location.state?.scrollToId) {
      // Small delay to ensure page is fully rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollToId);
        if (element) {
          const offset = 80; // Navbar height offset
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);

      // Clear the state after scrolling to prevent re-triggering
      window.history.replaceState({}, document.title);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="relative">
      {/* Transition Curtain Effect - Only active when transitioning */}
      <TransitionPortal
        isActive={isTransitioning}
        onComplete={finalizeTransition}
      />

      {/* Page Sections - Each component has its own <section> with id */}
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

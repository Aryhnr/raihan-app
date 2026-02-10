import { useState } from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TransitionPortal from "../components/common/TransitionPortal";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";

const Home = ({ isTransitioning, finalizeTransition, onNavClick }) => {
  return (
    <div className="relative">
      <TransitionPortal
        isActive={isTransitioning}
        onComplete={finalizeTransition}
      />

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

import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./sections/Hero";
import TransitionPortal from "../components/common/TransitionPortal";
import { lazy, Suspense } from "react";

const Projects = lazy(() => import("./sections/Projects"));
const Experience = lazy(() => import("./sections/Experience"));
const Skills = lazy(() => import("./sections/Skills"));
const About = lazy(() => import("./sections/About"));
const Contact = lazy(() => import("./sections/Contact"));

const Home = ({ isTransitioning, finalizeTransition }) => {
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);

  // Optimized scroll handler with minimal DOM operations
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Cancel any pending scroll
    if (scrollTimeoutRef.current) {
      cancelAnimationFrame(scrollTimeoutRef.current);
    }

    // Double RAF for better performance
    scrollTimeoutRef.current = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const offset = 80;
        const top =
          element.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      });
    });
  }, []);

  // Handle navigation from other pages
  useEffect(() => {
    const scrollToId = location.state?.scrollToId;

    if (!scrollToId) return;

    // Immediate state cleanup
    if (window.history.replaceState) {
      window.history.replaceState({}, document.title);
    }

    // Defer scroll with minimal delay
    const timerId = setTimeout(() => {
      scrollToSection(scrollToId);
    }, 100);

    return () => {
      clearTimeout(timerId);
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, [location.state?.scrollToId, scrollToSection]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      <TransitionPortal
        isActive={isTransitioning}
        onComplete={finalizeTransition}
      />

      <Hero />
      <Suspense fallback={<div className="h-screen" />}>
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;

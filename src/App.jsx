import { useState, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FontLoader from "./components/FontLoader";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetId, setTargetId] = useState(null);
  const transitionTimeoutRef = useRef(null);

  const isHomePage = location.pathname === "/";

  const handleNavClick = useCallback((id) => {
    // Clear any pending transitions
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    setTargetId(id);
    setIsTransitioning(true);
  }, []);

  const finalizeTransition = useCallback(() => {
    if (targetId) {
      requestAnimationFrame(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "instant" });
        }
      });
    }

    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setTargetId(null);
    }, 350);
  }, [targetId]);

  return (
    <div className="min-h-screen relative flex flex-col bg-[#f8f8f8]">
      <FontLoader />
      <Navbar onNavClick={isHomePage ? handleNavClick : null} />

      <main className="grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                finalizeTransition={finalizeTransition}
                isTransitioning={isTransitioning}
              />
            }
          />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

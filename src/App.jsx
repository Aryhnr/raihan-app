import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

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
    setTimeout(() => {
      setIsTransitioning(false);
      setTargetId(null);
    }, 350);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f8]">
      {/* Pass onNavClick only if we're on home page, otherwise pass null */}
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

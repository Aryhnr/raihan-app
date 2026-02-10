// App.jsx
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
    setTimeout(() => {
      setIsTransitioning(false);
      setTargetId(null);
    }, 350);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8f8f8]...">
        <Navbar onNavClick={handleNavClick} />
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
    </Router>
  );
}

export default App;

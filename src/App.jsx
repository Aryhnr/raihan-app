import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8f8f8] selection:bg-black selection:text-white font-sans antialiased text-zinc-900">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

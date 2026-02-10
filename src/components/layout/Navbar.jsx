import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import IconAR from "../../assets/FIXlogoAR-nobg.png";

const Navbar = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about" },
  ];

  // Fungsi untuk menangani klik nav
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // Tutup mobile menu jika terbuka

    // Jika ada onNavClick (berarti di home page), gunakan transisi
    if (onNavClick) {
      onNavClick(id);
    } else {
      // Jika tidak (berarti di page lain), navigate ke home dengan state
      navigate("/", { state: { scrollToId: id } });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 px-6 md:px-12 lg:px-24 py-6 ${
        isScrolled ? "bg-[#f8f8f8]/80 backdrop-blur-md py-4" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full flex justify-between items-center">
        {/* LOGO */}
        <button
          onClick={(e) => handleLinkClick(e, "home")}
          className="flex flex-col group cursor-pointer text-left"
          aria-label="Raihan Portfolio - Go to home"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Samping Nama: Icon Geometris / Avatar */}
            <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden transition-colors duration-500">
              <img
                src={IconAR}
                className="w-full h-full object-cover filter grayscale"
                alt="Raihan logo"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter leading-none group-hover:italic transition-all duration-300 uppercase">
                RAIHAN
              </span>
              <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-neutral-600 group-hover:text-black transition-colors">
                Portfolio ©2026
              </span>
            </div>
          </motion.div>
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 md:gap-12">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={(e) => handleLinkClick(e, link.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative font-mono text-[10px] cursor-pointer uppercase tracking-widest text-neutral-700 hover:text-black transition-colors group text-left"
              aria-label={`Navigate to ${link.name} section`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div className="h-8 w-[1px] bg-neutral-700 md:mx-2" />
          </motion.div>

          <button
            onClick={(e) => handleLinkClick(e, "contact")}
            className="font-mono text-[10px] uppercase tracking-widest bg-black text-white px-5 py-2 rounded-full hover:bg-zinc-800 transition-all"
            aria-label="Contact - Let's talk"
          >
            Let's Talk
          </button>
        </div>

        {/* MOBILE MENU BUTTON - FIXED Z-INDEX */}
        <button
          className="md:hidden p-2 text-neutral-900 hover:text-neutral-700 transition-colors relative z-[1001]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#f8f8f8] p-8 flex flex-col gap-6 md:hidden shadow-xl"
            role="menu"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="font-black text-3xl uppercase tracking-tighter hover:italic text-left text-neutral-900 hover:text-neutral-700 transition-colors"
                role="menuitem"
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={(e) => handleLinkClick(e, "contact")}
              className="font-mono text-sm uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition-all text-center mt-4"
              role="menuitem"
              aria-label="Contact - Let's talk"
            >
              Let's Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

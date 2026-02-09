import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import "swiper/css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFooterNav = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: targetId } });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    // UBAH: bg-brand-bg, text-neutral-900, border-neutral-200
    <footer className="bg-brand-bg text-neutral-900 pt-0 pb-10 overflow-hidden relative border-t border-neutral-200">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* KOLOM KIRI: Navigation & Details */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* SITEMAP */}
              <div className="space-y-8">
                <h4 className="font-mono text-[10px] text-white uppercase tracking-[0.4em] flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Directory
                </h4>
                <ul className="space-y-4">
                  {[
                    "Home",
                    "About",
                    "Skills",
                    "Projects",
                    "Experience",
                    "Contact",
                  ].map((item) => (
                    <li key={item} className="overflow-hidden">
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => handleFooterNav(e, item.toLowerCase())}
                        // UBAH: Hover text yellow
                        className="block text-1xl md:text-2xl font-black uppercase tracking-tight hover:text-white hover:translate-x-4 transition-all duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOCIALS & LOCATION */}
              <div className="space-y-12">
                <div className="space-y-6">
                  {/* UBAH: text-neutral-400 */}
                  <h4 className="font-mono text-[10px] text-neutral-400 uppercase tracking-[0.4em]">
                    Social_Link
                  </h4>
                  <div className="flex flex-col gap-2">
                    {[
                      {
                        name: "LinkedIn",
                        url: "https://linkedin.com/in/aryhnr",
                      },
                      { name: "Github", url: "https://github.com/aryhnr" },
                      {
                        name: "Instagram",
                        url: "https://instagram.com/_aryhnr",
                      },
                      { name: "Email", url: "mailto:raihan.webml@gmail.com" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        // UBAH: text-neutral-500, hover:text-black
                        className="font-mono text-sm text-neutral-500 hover:text-black uppercase tracking-widest transition-colors flex items-center gap-2 group"
                      >
                        <span>[{social.name}]</span>
                        <span className="w-0 h-[1px] bg-white group-hover:w-8 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] text-neutral-400 uppercase tracking-[0.4em]">
                    Base_Coordinates
                  </h4>
                  <p className="text-xl font-bold uppercase tracking-tight">
                    PAMEKASAN, MADURA <br />
                    <span className="text-neutral-400 text-sm font-mono tracking-widest">
                      EAST JAVA, IDN
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* COPYRIGHT BLOCK */}
            {/* UBAH: border-neutral-200, text-neutral-400 */}
            <div className="flex flex-col md:flex-row justify-between items-end border-t border-neutral-200 pt-8 gap-4">
              <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-[0.2em]">
                &copy; {currentYear} ARYHNR_DEV_SYSTEMS. <br /> ALL RIGHTS
                RESERVED.
              </p>
              <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-[0.2em] text-right">
                <p>Version 2.5.0</p>
                <p>Last_Update: FEB 2026</p>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: THE GIANT TRIGGER */}
          {/* KOLOM KANAN: THE GIANT TRIGGER (Tetap Sama) */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 0.98, backgroundColor: "#1a1a1a" }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full h-full min-h-[300px] bg-[#0a0a0a] border border-white/10 flex flex-col justify-between p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-50">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-white rotate-45 group-hover:rotate-0 transition-transform duration-500"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative z-10 text-left">
                <span className="font-mono text-[9px] text-white uppercase tracking-[0.3em]">
                  System_Action
                </span>
                <h3 className="text-4xl md:text-5xl font-black mt-2 uppercase leading-none tracking-tighter text-white group-hover:text-white transition-colors">
                  Back <br /> To Top
                </h3>
              </div>

              <div className="relative z-10 self-end mt-12">
                <motion.div className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white group-hover:text-black transition-colors"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-white/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* FOOTER STATUS BAR */}
      {/* UBAH: bg-neutral-50 (sedikit abu2), border-neutral-200 */}
      <div className="mt-24 border-t border-neutral-200 bg-neutral-50">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex flex-wrap justify-between items-center gap-4 text-left">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              {/* UBAH: text-neutral-400 */}
              <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                Operational
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            {["REACT", "TAILWIND", "SWIPER"].map((tech) => (
              <span
                key={tech}
                // UBAH: border-neutral-200, text-neutral-400
                className="font-mono text-[8px] border border-neutral-200 px-2 py-1 text-neutral-400 rounded uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .marquee-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `,
        }}
      />
    </footer>
  );
};

export default Footer;

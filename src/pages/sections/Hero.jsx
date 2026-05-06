import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Hero = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.95] };

  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 12,
      ease: "linear",
      repeat: Infinity,
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-brand-bg text-text-primary overflow-hidden flex flex-col selection:bg-accent selection:text-brand-bg"
    >
      {/* 1. SPACER */}
      <div className="h-24 md:h-32 w-full flex-shrink-0" />

      {/* 2. BACKGROUND & SIDE TEXT */}
      <div className="absolute left-[-5vw] top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
        <span className="text-[15vw] font-black text-gray-400/15 uppercase rotate-90 block tracking-tighter">
          RAIHAN
        </span>
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 flex-grow flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col relative">
            {/* ROW 1 */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={transition}
                className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase italic"
              >
                WEB
              </motion.h1>
            </div>

            {/* ROW 2 */}
            <div className="flex flex-row items-baseline gap-2 overflow-visible">
              <div className="flex items-end gap-0 relative">
                <div className="overflow-visible">
                  <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ ...transition, delay: 0.1 }}
                    className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase italic"
                  >
                    DEVELOPER
                  </motion.h1>
                </div>

                {/* LINGKARAN — overlap di pojok kanan atas huruf R */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="flex-shrink-0 -translate-y-[70%] -translate-x-[20%]"
                >
                  <motion.div
                    animate={rotateAnimation}
                    className="relative flex items-center justify-center w-[8vw] h-[8vw] min-w-[56px] min-h-[56px] max-w-[100px] max-h-[100px]"
                  >
                    <div className="absolute inset-0 bg-[#CCFF00] rounded-full shadow-xl" />
                    <svg
                      viewBox="0 0 100 100"
                      className="absolute inset-0 w-full h-full text-black fill-current p-1"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text fontSize="9" fontWeight="900" letterSpacing="1">
                        <textPath xlinkHref="#circlePath">
                          WEB DEVELOPER • MACHINE LEARNING •
                        </textPath>
                      </text>
                    </svg>
                    <div className="absolute text-black text-xl md:text-2xl lg:text-3xl font-black">
                      ✦
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="font-serif italic text-4xl md:text-6xl text-text-muted -ml-13 md:-ml-15"
              >
                &
              </motion.span>
            </div>

            {/* ROW 3 */}
            <div className="flex items-center gap-6 mt-4">
              <div className="hidden lg:flex flex-col flex-grow">
                <div className="h-[1px] w-full bg-text-primary/10 relative overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                    className="absolute inset-0 bg-text-primary origin-left"
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="font-mono text-[10px] uppercase tracking-[0.5em] mt-3"
                >
                  AKH. RAIHAN GIMNASTIAR RAKHMAN
                </motion.span>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ ...transition, delay: 0.2 }}
                  className="text-[12vw] md:text-[8.5vw] font-serif italic font-light tracking-tight leading-none"
                >
                  Machine Learning
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. FOOTER INFO */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-12 lg:px-24 pb-12 items-end flex-shrink-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="md:col-span-4 font-mono text-[9px] uppercase tracking-[0.3em]"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="font-bold">Focus Areas:</span>
          </div>
          <p className="text-text-secondary">
            Web Developer · Machine Learning
          </p>
          <p className="text-text-secondary">
            Scalable Systems · AI-Powered Applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="md:col-span-4 border-l border-text-primary pl-6 hidden md:block"
        >
          <p className="text-sm md:text-base font-medium leading-relaxed tracking-tight text-text-secondary">
            Designing scalable systems where{" "}
            <span className="italic font-serif">robust code</span> meets{" "}
            <span className="italic font-serif">intelligent algorithms</span>.
          </p>
        </motion.div>

        <div className="md:col-span-4 flex justify-end">
          <motion.a
            href="https://linkedin.com/in/username-kamu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-5 bg-text-primary text-brand-bg rounded-full overflow-hidden transition-all duration-300 font-mono text-[10px] uppercase tracking-[0.2em] cursor-pointer inline-flex items-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-text-primary">
              <Linkedin size={14} strokeWidth={2} />
              Connect LinkedIn
            </span>

            <div className="absolute inset-0 bg-brand-bg translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out border border-text-primary rounded-full" />
          </motion.a>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Hero;

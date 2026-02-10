import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.95] };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#f8f8f8] text-black overflow-hidden flex flex-col selection:bg-black selection:text-white"
    >
      {/* 1. SPACER */}
      <div className="h-24 md:h-32 w-full flex-shrink-0" />

      {/* 2. BACKGROUND & SIDE TEXT */}
      <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] bg-gray-200/50 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute left-[-5vw] top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
        <span className="text-[15vw] font-black text-gray-400/20 uppercase rotate-90 block tracking-tighter">
          RAIHAN
        </span>
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 flex-grow flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col">
            {/* ROW 1 */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={transition}
                className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase italic"
              >
                FULL STACK
              </motion.h1>
            </div>

            {/* ROW 2 */}
            <div className="flex flex-col md:flex-row items-baseline gap-4 overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ ...transition, delay: 0.1 }}
                className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase italic"
              >
                DEVELOPER
              </motion.h1>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="font-serif italic text-4xl md:text-6xl text-gray-400"
              >
                &
              </motion.span>
            </div>

            {/* ROW 3: Nama & Garis & Machine Learning */}
            <div className="flex items-center gap-6 mt-4">
              {/* Sisi Kiri: Garis + Nama (Hanya Desktop) */}
              <div className="hidden lg:flex flex-col flex-grow">
                {/* Garis Horizontal Animasi */}
                <div className="h-[1px] w-full bg-black/10 relative overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                    className="absolute inset-0 bg-black origin-left"
                  />
                </div>
                {/* Teks Nama Animasi */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="font-mono text-[10px] uppercase tracking-[0.5em] mt-3"
                >
                  AKH. RAIHAN GIMNASTIAR RAKHMAN
                </motion.span>
              </div>

              {/* Sisi Kanan: Machine Learning */}
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

      {/* 4. FOOTER INFO (Grid System) */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-12 lg:px-24 pb-12 items-end flex-shrink-0">
        {/* Status & Focus Areas (Sejajar paling kiri) */}
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
          <p className="text-gray-700">
            Full-Stack Web Developer · Machine Learning
          </p>
          <p className="text-gray-700">
            Scalable Systems · AI-Powered Applications
          </p>
        </motion.div>

        {/* Bio Section (Berada di tengah grid) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="md:col-span-4 border-l border-black pl-6 hidden md:block"
        >
          <p className="text-sm md:text-base font-medium leading-relaxed tracking-tight text-gray-800">
            Designing scalable systems where{" "}
            <span className="italic font-serif">robust code</span> meets{" "}
            <span className="italic font-serif">intelligent algorithms</span>.
          </p>
        </motion.div>

        {/* CTA Button (Sejajar paling kanan) */}
        <div className="md:col-span-4 flex justify-end">
          <motion.a
            href="https://drive.google.com/file/d/1Qp--FYzeEKbp6-GlgE6jN0v4DJUPEozY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-black text-white rounded-full overflow-hidden transition-all duration-500 font-mono text-[10px] uppercase tracking-widest cursor-pointer inline-block"
          >
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.a>
        </div>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Hero;

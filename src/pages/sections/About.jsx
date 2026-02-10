import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FotoDiri from "../../assets/fotodiri.jpeg"; // Pastikan path sesuai

const About = () => {
  const containerRef = useRef(null);

  // Efek Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen w-full bg-brand-bg text-neutral-900 overflow-hidden py-12 md:py-20 lg:py-30"
    >
      {/* Background Gradient & Title (Hidden overflow) */}
      <div className="absolute top-0 left-0 w-full h-32 z-20 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        {/* Pembatas Header */}
        <div className="flex items-baseline gap-4 md:gap-6 mb-8 md:mb-12">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-600 whitespace-nowrap">
            (04) — Beyond Code
          </span>
          <div className="flex-1 h-[1px] bg-neutral-200"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-neutral-200 bg-brand-bg ">
          <div className="lg:col-span-5 relative group bg-neutral-50 flex flex-col border-b lg:border-b-0 lg:border-r border-neutral-200">
            {/* Window Header */}
            <div className="p-3 md:p-4 border-b border-neutral-200 flex justify-between items-center bg-brand-bg z-10 shrink-0">
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-700">
                Subject_01.jpg
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-neutral-300" />
                <div className="w-2 h-2 rounded-full bg-neutral-400" />
                <div className="w-2 h-2 rounded-full bg-neutral-500" />
              </div>
            </div>

            <div className="relative w-full overflow-hidden aspect-[4/5] lg:aspect-auto lg:flex-1">
              <motion.img
                initial={{ scale: 1.2, filter: "grayscale(1) contrast(1.1)" }}
                whileInView={{ scale: 1, filter: "grayscale(0) contrast(1)" }}
                transition={{ duration: 1.5 }}
                src={FotoDiri}
                alt="Raihan"
                className="w-full h-full object-cover object-center lg:object-bottom opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* INFO CARD (Nama) - Absolute di atas Gambar */}
              <div className="absolute bottom-0 left-0 w-full bg-brand-bg border-t border-neutral-200 p-4 md:p-6 z-20">
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <div className="flex items-center gap-2 p-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <p className="font-mono text-[8px] md:text-[10px] text-neutral-700 tracking-widest uppercase">
                      System_Active
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-600">
                    #001
                  </span>
                </div>
                <h4 className="text-lg md:text-2xl font-black uppercase leading-[0.9] text-neutral-900 tracking-tight">
                  Akh. Raihan
                  <span className="text-neutral-600"> Gimnastiar .R</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col bg-brand-bg">
            {/* Top Row: Title */}
            <div className="p-6 md:p-12 border-b border-neutral-200">
              <motion.h2
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-neutral-900"
              >
                Crafting <br />
                <span className="text-black">Code &</span> <br />
                <span className="font-serif italic font-light text-neutral-600 text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                  Neurons.
                </span>
              </motion.h2>
            </div>

            {/* Middle Row: Bio */}
            <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 border-b border-neutral-200">
              <div className="space-y-3 md:space-y-4">
                <span className="text-neutral-900 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] block font-bold">
                  // Identity
                </span>
                <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
                  I am <span className="text-black font-semibold">Raihan</span>,
                  a fresh graduate from{" "}
                  <span className="text-black font-semibold">
                    University of Trunojoyo Madura
                  </span>
                  . I focus on building scalable digital ecosystems.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <span className="text-neutral-900 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] block font-bold">
                  // Core_Focus
                </span>
                <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed italic">
                  Specializing in{" "}
                  <span className="text-black font-bold">Full-Stack Web</span>{" "}
                  and independent{" "}
                  <span className="text-black font-bold">Machine Learning</span>{" "}
                  research.
                </p>
              </div>
            </div>

            {/* Bottom Row: Specs & Skills */}
            <div className="grid grid-cols-2 md:grid-cols-3 border-b border-neutral-200 lg:flex-1">
              {[
                { label: "Specialization", val: "Fullstack / ML" },
                { label: "Exp", val: "<1 Years" },
                { label: "Location", val: "Madura, ID" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-6 border-r border-neutral-200 hover:bg-black group transition-colors duration-500
                    ${i === 1 ? "border-r-0 md:border-r" : ""} 
                    ${i === 2 ? "col-span-2 md:col-span-1 border-t md:border-t-0 border-r-0" : ""}
                  `}
                >
                  <p className="text-[9px] md:text-[10px] font-mono uppercase text-neutral-700 group-hover:text-white/60 transition-colors tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs md:text-sm font-black uppercase text-neutral-900 group-hover:text-white transition-colors">
                    {item.val}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <a
              href="https://drive.google.com/file/d/1Qp--FYzeEKbp6-GlgE6jN0v4DJUPEozY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 md:p-8 bg-neutral-900 text-white flex justify-between items-center group cursor-pointer overflow-hidden relative block decoration-none"
            >
              <span className="font-black uppercase tracking-widest text-lg md:text-2xl z-10 flex items-center gap-2 group-hover:text-black transition-colors">
                <span className="group-hover:text-black transition-colors text-sm md:text-xl">
                  {">"}
                </span>
                Download_CV
              </span>

              <motion.div
                whileHover={{ scale: 1.5 }}
                className="text-2xl md:text-4xl z-10 group-hover:text-black transition-colors"
              >
                ↓
              </motion.div>

              <div className="absolute inset-0 bg-brand-bg translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

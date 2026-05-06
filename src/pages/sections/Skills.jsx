import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../../data/skills";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skills[0]);

  return (
    <motion.section
      id="skills"
      className="py-10 bg-brand-bg selection:bg-accent selection:text-brand-bg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-100px",
        amount: 0.1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "0 600px",
      }}
    >
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="mb-10 pb-10">
          {/* 1. Label Atas */}
          <div className="flex items-baseline gap-4 md:gap-6 mb-8 md:mb-12">
            <span className="hidden md:block font-mono text-[10px] text-text-secondary tracking-widest">
              CAPACITY: 100%
            </span>
            <div className="flex-1 h-[1px] bg-border-primary"></div>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-text-secondary whitespace-nowrap">
              System Architecture — (04)
            </span>
          </div>

          {/* 2. Judul Utama & Garis */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            {/* BAGIAN JUDUL */}
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-text-primary">
              Technical <br />
              <span className="font-serif italic font-light text-text-secondary ml-4 md:ml-24 border-b-2 border-text-primary pb-1 md:pb-2 inline-block">
                Proficiency.
              </span>
            </h2>

            <div className="text-left md:text-right w-full md:w-auto border-l-2 border-border-primary pl-4 md:border-l-0 md:pl-0 md:pb-3">
              <div className="font-mono text-[10px] md:text-xs text-text-primary font-bold uppercase tracking-widest mb-1">
                WebDev Env.
              </div>
              <div className="font-mono text-[10px] text-text-secondary uppercase tracking-widest leading-relaxed">
                Laravel • React • DevOps
              </div>
            </div>
          </div>
        </div>

        {/* MAIN GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-brand-bg">
          {/* LEFT: TAB LIST */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 bg-brand-bg border-border-primary">
            {skills.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`relative group flex flex-col lg:items-start items-center lg:justify-start justify-center
          px-6 py-2 lg:py-6 border-r border-b border-border-primary lg:border-r-0
          transition-all duration-500 overflow-hidden cursor-pointer outline-none
          min-h-35 lg:min-h-auto
          ${
            activeTab.id === item.id
              ? "bg-text-primary text-brand-bg dark:bg-brand-secondary dark:text-text-primary"
              : "bg-brand-bg text-text-primary hover:bg-brand-secondary"
          }`}
              >
                <div className="relative z-10 text-center lg:text-left">
                  <span
                    className={`font-mono text-[8px] md:text-[9px] lg:text-[10px] mb-1 md:mb-2 lg:mb-4 block
              ${activeTab.id === item.id ? "text-neutral-400 dark:text-text-muted" : "text-text-muted"}`}
                  >
                    [{item.id}]
                  </span>

                  <h3
                    className="text-lg md:text-xl lg:text-4xl font-black uppercase tracking-tighter leading-tight
            transition-transform duration-500 group-active:scale-95"
                  >
                    {item.name}
                  </h3>
                </div>

                {/* Active Dot Indicator */}
                <div className="hidden lg:block">
                  {activeTab.id === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-100 dark:bg-text-primary rounded-full"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: DETAIL DISPLAY */}
          <div className="lg:col-span-7 bg-brand-tertiary p-8 md:p-16 relative flex flex-col justify-center min-h-[450px] md:min-h-[550px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="w-full"
              >
                <div className="flex items-center gap-4 mb-12 md:mb-16">
                  <div className="h-[1px] w-8 md:w-12 bg-text-primary" />
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-text-secondary">
                    {activeTab.category}
                  </span>
                </div>

                {/* TOOLS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10">
                  {activeTab.tools.map((tool) => (
                    <div key={tool.name} className="group/item">
                      <div className="flex justify-between items-baseline mb-2 md:mb-3">
                        <h4 className="text-[11px] md:text-sm font-black uppercase tracking-widest text-text-primary">
                          {tool.name}
                        </h4>
                        <span className="font-mono text-[8px] md:text-[9px] text-text-muted">
                          {tool.level}
                        </span>
                      </div>

                      <div className="h-[2px] w-full bg-border-primary relative overflow-hidden">
                        <motion.div
                          initial={{ x: "-100%" }}
                          animate={{
                            x:
                              tool.level === "Expert"
                                ? "0%"
                                : tool.level === "Advanced"
                                  ? "-20%"
                                  : tool.level === "Intermediate"
                                    ? "-40%"
                                    : "-60%",
                          }}
                          transition={{ duration: 1.2, ease: "circOut" }}
                          className="absolute inset-0 bg-text-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* DECORATIVE ID */}
                <div
                  className="absolute bottom-6 md:bottom-10 right-6 md:right-10
          opacity-[0.02] text-text-primary text-[8rem] md:text-[12rem]
          font-black pointer-events-none select-none leading-none"
                >
                  {activeTab.id}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* FOOTER INFO */}
        <div className="mt-8 flex justify-between items-center px-2">
          <p className="font-mono text-[8px] md:text-[9px] text-text-muted uppercase tracking-widest">
            * Interactive Data Terminal // Select Module
          </p>
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-1 h-1 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
            <div className="w-1 h-1 bg-neutral-600 dark:bg-neutral-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

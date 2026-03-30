import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { experiences } from "../../data/experiences";

const Experience = () => {
  // Biarkan index 0 terbuka pertama kali untuk memberi petunjuk interaksi
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-brand-bg overflow-hidden"
    >
      {/* WRAPPER SESUAI REQUEST */}
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex items-baseline gap-4 md:gap-6 mb-8 md:mb-12">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-text-secondary whitespace-nowrap">
            (03) — Professional Path
          </span>
          <div className="flex-1 h-[1px] bg-border-primary"></div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="flex flex-col gap-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.8]"
                >
                  Work <br />
                  <span className="font-serif italic font-light text-text-secondary lowercase">
                    History.
                  </span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-text-muted text-lg font-light leading-relaxed max-w-sm"
              >
                Membangun solusi digital yang presisi. Berfokus pada performa,
                estetika, dan pengalaman pengguna yang intuitif.
              </motion.p>

              {/* Garis Dekoratif Modern */}
              <div className="hidden lg:block w-12 h-[1px] bg-border-primary"></div>
            </div>
          </div>

          <div className="lg:col-span-8 order-2 lg:order-1">
            {experiences.map((exp, index) => {
              const isOpen = expandedIndex === index;

              return (
                <div
                  key={exp.id}
                  className="group border-b border-border-primary transition-all duration-700 ease-in-out"
                >
                  <button
                    onClick={() => setExpandedIndex(isOpen ? null : index)}
                    className="w-full py-10 flex items-start justify-between text-left outline-none"
                  >
                    <div className="flex flex-col gap-4">
                      {/* Meta Data: Waktu & Tipe */}
                      <div className="flex items-center gap-4 overflow-hidden">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                          {exp.period}
                        </span>
                        <span className="h-[1px] w-6 bg-border-primary"></span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                          {exp.type}
                        </span>
                      </div>

                      {/* Title Section */}
                      <div className="relative">
                        <h3
                          className={`text-3xl md:text-5xl font-bold tracking-tight transition-all duration-500 ease-out ${isOpen ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary group-hover:translate-x-2"}`}
                        >
                          {exp.company}
                        </h3>
                        <p
                          className={`text-xl md:text-2xl font-serif italic transition-all duration-500 delay-75 ${isOpen ? "text-text-secondary" : "text-text-muted group-hover:translate-x-2"}`}
                        >
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Icon Toggle: Rotates & Changes Shape */}
                    <div className="relative mt-2">
                      <motion.div
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`w-12 h-12 rounded-full border border-border-primary flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-text-primary border-text-primary text-brand-bg" : "group-hover:border-text-primary"}`}
                      >
                        <Plus size={24} strokeWidth={1.5} />
                      </motion.div>
                    </div>
                  </button>

                  {/* EXPANDABLE CONTENT */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        }} // Custom easing
                      >
                        <div className="pb-12 flex flex-col md:flex-row justify-between gap-10">
                          {/* Deskripsi dengan animasi muncul dari bawah */}
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-text-secondary font-light leading-relaxed max-w-xl"
                          >
                            {exp.description}
                          </motion.p>

                          {/* Tags & Link */}
                          <div className="flex flex-col items-start md:items-end gap-6 flex-shrink-0">
                            <div className="flex flex-wrap md:justify-end gap-2 max-w-[280px]">
                              {exp.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-text-primary/5 border border-border-primary rounded-sm text-[10px] font-bold uppercase tracking-widest text-text-muted"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

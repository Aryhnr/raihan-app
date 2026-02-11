import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Minus } from "lucide-react";
import { experiences } from "../../data/experiences"

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.section
      id="experience"
      className="text-neutral-900 py-30"
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
        containIntrinsicSize: "0 800px",
      }}
    >
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex items-baseline gap-4 md:gap-6 mb-8 md:mb-12">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-600 whitespace-nowrap">
            (03) — Professional Path
          </span>
          <div className="flex-1 h-[1px] bg-neutral-200"></div>
        </div>
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-200 pb-10 md:pb-16">
          {/* Sisi Kiri: Main Typography */}
          <div className="w-full md:max-w-[70%]">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                /* Menggunakan fluid text: text-[14vw] untuk mobile agar proporsional */
                className="text-[14vw] md:text-[8vw] lg:text-[7.5vw] font-black tracking-tighter uppercase leading-[0.85] text-neutral-900"
              >
                Selected <br />
                <span className="font-serif italic font-light text-neutral-600 lowercase">
                  Experience.
                </span>
              </motion.h2>
            </div>
          </div>

          {/* Sisi Kanan: Metadata/Context */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:items-end gap-4 md:gap-6 border-t border-zinc-100 md:border-none pt-6 md:pt-0"
          >
            {/* Penanda Tahun bergaya badge */}
            <div className="bg-zinc-100 md:bg-transparent px-3 py-1 md:p-0 w-fit">
              <p className="font-mono text-[10px] md:text-xs text-zinc-600 font-bold uppercase tracking-widest">
                EST. 2020 — PRESENT
              </p>
            </div>

            <p className="font-mono text-[10px] md:text-xs md:text-right text-zinc-400 uppercase tracking-widest leading-relaxed max-w-[180px] md:max-w-[220px]">
              Building Digital Products <br className="hidden md:block" /> with
              Precision.
            </p>
          </motion.div>
        </div>

        {/* LIST EXPERIENCE */}
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-t border-gray-200 py-10 transition-all duration-500 hover:border-black"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* KOLOM KIRI: Meta Data (Span 3) */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between lg:justify-start gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-600 group-hover:text-black transition-colors duration-300">
                    {exp.period}
                  </span>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${exp.status === "ACTIVE" ? "bg-green-500 animate-pulse" : "bg-gray-300"}`}
                    ></span>
                    <span className="font-mono text-[10px] uppercase text-gray-600">
                      {exp.status}
                    </span>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-600 group-hover:text-black transition-colors duration-300">
                    {exp.type}
                  </span>
                </div>

                {/* KOLOM TENGAH: Main Content (Span 6) */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-1 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      {exp.company}
                    </h3>
                    <p className="text-2xl font-serif italic text-gray-600 group-hover:text-gray-600 transition-colors duration-300 group-hover:translate-x-2 delay-75">
                      {exp.role}
                    </p>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>

                {/* KOLOM KANAN: Tags & Action (Span 3) */}
                <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end gap-8">
                  {/* Action Button */}
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                    <ArrowUpRight
                      size={20}
                      className="text-gray-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Skills Tags (Aligned Right on Desktop) */}
                  <div className="flex flex-wrap lg:justify-end gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-wide text-gray-500 group-hover:border-gray-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Closing Line */}
          <div className="w-full h-[1px] bg-gray-200"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;

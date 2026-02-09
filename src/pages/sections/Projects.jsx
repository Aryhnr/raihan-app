import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../components/cards/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Filter logika: Jika "all" tampilkan semua, jika tidak sesuaikan kategori
  let filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.filterCategory === filter);

  // Urutkan dari ID terbesar ke terkecil
  filteredProjects = filteredProjects.sort((a, b) => b.id - a.id);

  // Batasi ke 4 card jika showAll false
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "web", label: "Full Stack" },
    { id: "ml", label: "Machine Learning" },
  ];

  // Reset showAll ketika filter berubah
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  return (
    <section id="projects" className="py-30 bg-[#f8f8f8]">
      <div className="px-6 md:px-12 lg:px-24">
        <div className="flex items-baseline gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="flex-1 h-[1px] bg-neutral-200"></div>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-400 whitespace-nowrap">
            (02) — Core Projects
          </span>
        </div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-12 w-full">
          {/* BAGIAN KIRI: JUDUL BESAR */}
          <div className="overflow-hidden w-full md:w-auto">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pr-2 font-black uppercase leading-[0.85] tracking-tighter italic text-neutral-900"
            >
              Selected <br /> Works
            </motion.h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4 md:gap-6 w-full md:w-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full max-w-md md:max-w-[280px] text-left md:text-right font-medium text-sm leading-relaxed text-neutral-600"
            >
              Eksplorasi antara algoritma cerdas dan antarmuka yang presisi.
              Menampilkan solusi Full Stack yang ditenagai oleh data.
            </motion.p>
          </div>
        </div>

        {/* --- CATEGORY TABS --- */}
        <div className="flex gap-8 mb-24 border-b border-gray-200 pb-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className="relative font-mono text-[10px] uppercase tracking-[0.3em] pb-4 transition-colors duration-300"
              style={{ color: filter === cat.id ? "#000" : "#9ca3af" }}
            >
              {cat.label}
              {filter === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-black"
                />
              )}
            </button>
          ))}
        </div>

        {/* Asymmetric Grid */}
        <motion.div
          layout // Menghaluskan perpindahan saat filter berubah
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-10"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id || index} // Pastikan ada ID unik di data projects
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`${index % 2 !== 0 ? "md:mt-32" : ""}`}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA - Tampil hanya jika ada project lebih dari 4 */}
        {filteredProjects.length > 4 && (
          <div className="mt-32 flex justify-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              className="border-b border-black pb-2 font-mono text-[10px] uppercase tracking-[0.4em] hover:text-gray-400 transition-colors"
            >
              {showAll ? "Show Less" : "See All Archives"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

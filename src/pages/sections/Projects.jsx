import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../components/cards/ProjectCard";
import { projects } from "../../data/projects";
import { Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  let filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.filterCategory === filter);

  filteredProjects = filteredProjects.sort((a, b) => b.id - a.id);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "web", label: "Full Stack" },
    { id: "ml", label: "Machine Learning" },
  ];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowAll(false);
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-brand-bg"
      // ✅ FIX 1: Hapus motion + whileInView dari section wrapper
      // contentVisibility: "auto" menyebabkan blank putih di mobile
      // margin: "-100px" mencegah trigger di layar kecil
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="flex items-baseline gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="flex-1 h-[1px] bg-border-primary"></div>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-text-secondary whitespace-nowrap">
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pr-2 font-black uppercase leading-[0.85] tracking-tighter italic text-text-primary"
            >
              Selected <br /> Works
            </motion.h2>
          </div>

          {/* BAGIAN KANAN: DESKRIPSI & LINK GITHUB */}
          <div className="flex flex-col items-start md:items-end gap-4 md:gap-6 w-full md:w-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-md md:max-w-[280px] text-left md:text-right font-medium text-sm leading-relaxed text-text-secondary"
            >
              A collection of self-initiated projects built around intelligent
              systems and refined interfaces.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4 }}
              href="https://github.com/aryhnr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-text-primary hover:text-text-secondary transition-all"
            >
              <div className="p-2 rounded-full border border-border-primary group-hover:border-text-secondary transition-colors">
                <Github size={16} strokeWidth={1.5} />
              </div>
              <span className="border-b border-text-primary/30 pb-1">
                View GitHub Profile
              </span>
              <ArrowUpRight
                size={14}
                className="opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </motion.a>
          </div>
        </div>

        {/* --- CATEGORY TABS --- */}
        <div className="flex gap-8 mb-16 md:mb-24 border-b border-border-primary pb-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`relative font-mono text-[10px] uppercase tracking-[0.3em] pb-4 transition-colors duration-300 whitespace-nowrap ${
                filter === cat.id ? "text-text-primary" : "text-text-muted"
              }`}
            >
              {cat.label}
              {filter === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-text-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* ✅ FIX 2: Grid — gap-y mobile dikecilkan agar tidak overflow */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-10"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id || index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                // ✅ FIX 3: mt-32 hanya di desktop
                className={`${index % 2 !== 0 ? "md:mt-32" : ""}`}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        {filteredProjects.length > 4 && (
          <div className="mt-20 md:mt-32 flex justify-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              className="border-b border-text-primary pb-2 font-mono text-[10px] uppercase tracking-[0.4em] hover:text-text-muted transition-colors"
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

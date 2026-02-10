import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer w-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-6">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay on Hover */}
        <Link
          to={`/project/${project.slug}`}
          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10"
        >
          <span className="bg-white text-black px-6 py-3 rounded-full font-mono text-[10px] uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Case Study
          </span>
        </Link>
      </div>

      {/* Project Info */}
      <div className="flex justify-between items-start border-t border-black/10 pt-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
            {project.category}
          </span>
          <h3 className="text-2xl font-serif italic leading-none capitalize">
            {project.title}
          </h3>
        </div>
        <span className="font-mono text-[12px] text-black">{project.year}</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

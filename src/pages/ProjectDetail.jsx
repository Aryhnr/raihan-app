import React, { useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[currentIndex + 1] || projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const reveal = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const labelStyle =
    "font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mb-4";
  // Responsive giant text: Menggunakan clamp agar tidak terlalu kecil di HP dan tidak overflow
  const giantDataStyle =
    "text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-black leading-none break-words";

  return (
    <div
      ref={containerRef}
      className="w-full px-4 sm:px-8 md:px-12 lg:px-24 min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white overflow-x-hidden"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
        style={{ scaleX }}
      />

      <main className="w-full pt-24 sm:pt-32 lg:pt-40 pb-0">
        <nav className="flex justify-between items-center mb-12 sm:mb-20">
          <Link
            to="/"
            className="group relative flex items-center gap-4 py-2 overflow-hidden"
          >
            {/* Icon Container - Lebih clean tanpa border box */}
            <div className="relative w-5 h-5 flex items-center justify-center">
              <ArrowLeft
                size={20}
                className="absolute text-neutral-400 group-hover:-translate-x-2 group-hover:opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
              <ArrowLeft
                size={20}
                className="absolute text-black translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
            </div>

            {/* Text Label dengan animasi Underline dari tengah */}
            <div className="flex flex-col">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-neutral-500 group-hover:text-black transition-colors duration-500">
                Back to Index
              </span>

              {/* Animated Underline */}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </div>

            {/* Ghost Label (Efek dekoratif tipis di belakang saat hover) */}
            <span className="absolute -bottom-1 left-9 text-[40px] font-black text-neutral-100 -z-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-700 select-none pointer-events-none uppercase">
              Return
            </span>
          </Link>
        </nav>

        <section className="mb-16 sm:mb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-[1800px] mx-auto"
          >
            <motion.div
              variants={reveal}
              className="flex flex-row justify-between items-end border-b-2 sm:border-b-4 border-black pb-4 sm:pb-6 mb-6"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black"></span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                  {project.category}
                </span>
              </div>
              <span className="font-mono text-lg sm:text-xl font-black tracking-widest">
                {project.year}
              </span>
            </motion.div>

            {/* Title: Clamp digunakan untuk mencegah font size meledak di layar sangat lebar atau menyempit di HP */}
            <motion.h1
              variants={reveal}
              className="text-[14vw] sm:text-[11vw] leading-[0.85] sm:leading-[0.8] font-black uppercase tracking-tighter text-black mb-10 break-words"
            >
              {project.title}
            </motion.h1>

            <motion.div
              variants={reveal}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-black text-white font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] hover:bg-neutral-800 transition-colors flex items-center justify-center gap-3"
                >
                  Live View <ArrowUpRight size={16} />
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border-2 border-black text-black font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-3"
                >
                  Source <Github size={16} />
                </a>
              )}
            </motion.div>
          </motion.div>
        </section>

        <section className="w-full my-10 overflow-hidden">
          <motion.div
            style={{ y: yParallax }}
            className="w-full hfull bg-neutral-100 relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center scale-110"
            />
          </motion.div>
        </section>

        <section className="mb-24 sm:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            <div className="lg:col-span-5 space-y-12 sm:space-y-20 lg:sticky lg:top-32 h-fit">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={stagger}
                viewport={{ once: true }}
              >
                <motion.div
                  variants={reveal}
                  className="mb-10 sm:mb-16 border-l-4 border-black pl-4 sm:pl-6"
                >
                  <span className={labelStyle}>01 // Client</span>
                  <p className={giantDataStyle}>{project.client}</p>
                </motion.div>

                <motion.div
                  variants={reveal}
                  className="border-l-4 border-neutral-200 pl-4 sm:pl-6 hover:border-black transition-colors duration-500"
                >
                  <span className={labelStyle}>02 // Stack</span>
                  <ul className="flex flex-col gap-1 sm:gap-2">
                    {project.tech.map((t, i) => (
                      <li
                        key={i}
                        className={`${giantDataStyle} text-neutral-400 hover:text-black transition-colors`}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            <div className="lg:col-span-7 lg:pl-12 xl:pl-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif italic text-black mb-8 sm:mb-12 leading-tight">
                  "Redefining digital interaction through precision and
                  clarity."
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed font-light mb-10 sm:mb-16">
                  {project.description}
                </p>
                {project.challenge && (
                  <div className="bg-neutral-100 p-8 sm:p-12 md:p-16">
                    <h4 className="font-black text-2xl sm:text-3xl uppercase mb-4 sm:mb-6 tracking-tight">
                      The Challenge
                    </h4>
                    <p className="text-lg sm:text-xl text-black leading-relaxed font-medium">
                      {project.challenge}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-t-2 sm:border-t-4 border-black -mx-4 sm:mx-0">
          <Link
            to={`/project/${nextProject.slug}`}
            className="block group relative bg-white overflow-hidden"
          >
            <div className="px-6 md:px-12 py-20 sm:py-32 md:py-48 flex flex-col relative z-10">
              <div className="flex justify-between items-end mb-6 sm:mb-8">
                <span className="font-mono text-xs sm:text-sm font-bold text-black uppercase tracking-[0.2em]">
                  Next Case Study
                </span>
                <ArrowUpRight className="w-8 h-8 sm:w-12 sm:h-12 text-black group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <h2
                className="text-[12vw] sm:text-[10vw] font-black uppercase tracking-tighter text-transparent leading-[0.85] group-hover:text-white transition-colors duration-500"
                style={{ WebkitTextStroke: "1.5px black" }}
              >
                {nextProject.title}
              </h2>
            </div>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;

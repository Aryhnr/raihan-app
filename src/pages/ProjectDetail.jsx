import React, { useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
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

  const handleNavClick = (id) => {
    navigate("/", { state: { scrollToId: id } });
  };

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
    "font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted block mb-4";
  const giantDataStyle =
    "text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-text-primary leading-none break-words";

  return (
    <div
      ref={containerRef}
      className="w-full px-4 sm:px-8 md:px-12 lg:px-24 min-h-screen text-text-primary font-sans selection:bg-accent selection:text-brand-bg overflow-x-hidden bg-brand-bg"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-text-primary origin-left z-50"
        style={{ scaleX }}
      />

      <main className="w-full pt-24 sm:pt-32 lg:pt-40 pb-0">
        <nav className="flex justify-between items-center mb-12 sm:mb-20">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("projects");
            }}
            className="group relative flex items-center gap-4 py-2 overflow-hidden"
          >
            {/* Icon Container */}
            <div className="relative w-5 h-5 flex items-center justify-center">
              <ArrowLeft
                size={20}
                className="absolute text-text-muted group-hover:-translate-x-2 group-hover:opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
              <ArrowLeft
                size={20}
                className="absolute text-text-primary translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
            </div>

            {/* Text Label dengan animasi Underline */}
            <div className="flex flex-col">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-text-muted group-hover:text-text-primary transition-colors duration-500">
                Back to Index
              </span>

              {/* Animated Underline */}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-text-primary scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </div>

            {/* Ghost Label */}
            <span className="absolute -bottom-1 left-9 text-[40px] font-black text-neutral-100 dark:text-neutral-900 -z-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-700 select-none pointer-events-none uppercase">
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
              className="flex flex-row justify-between items-end border-b-2 sm:border-b-4 border-text-primary pb-4 sm:pb-6 mb-6"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-text-primary"></span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                  {project.category}
                </span>
              </div>
              <span className="font-mono text-lg sm:text-xl font-black tracking-widest">
                {project.year}
              </span>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="text-[10vw] sm:text-[8vw] leading-[0.85] sm:leading-[0.8] font-black uppercase tracking-tighter text-text-primary mb-10 break-words"
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
                  className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-text-primary text-brand-bg font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3"
                >
                  Live View <ArrowUpRight size={16} />
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border-2 border-text-primary text-text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] hover:bg-text-primary hover:text-brand-bg transition-colors flex items-center justify-center gap-3"
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
            className="w-full hfull bg-brand-tertiary relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center scale-110"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "translateZ(0) scale(1.1)",
              }}
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
                  className="mb-10 sm:mb-16 border-l-4 border-text-primary pl-4 sm:pl-6"
                >
                  <span className={labelStyle}>01 // Client</span>
                  <p className={giantDataStyle}>{project.client}</p>
                </motion.div>

                <motion.div
                  variants={reveal}
                  className="border-l-4 border-border-primary pl-4 sm:pl-6 hover:border-text-primary transition-colors duration-500"
                >
                  <span className={labelStyle}>02 // Stack</span>
                  <ul className="flex flex-col gap-1 sm:gap-2">
                    {project.tech.map((t, i) => (
                      <li
                        key={i}
                        className={`${giantDataStyle} text-text-muted hover:text-text-primary transition-colors`}
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
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif italic text-text-primary mb-8 sm:mb-12 leading-tight">
                  "Redefining digital interaction through precision and
                  clarity."
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed font-light mb-10 sm:mb-16">
                  {project.description}
                </p>
                {project.challenge && (
                  <div className="bg-brand-tertiary p-8 sm:p-12 md:p-16">
                    <h4 className="font-black text-2xl sm:text-3xl uppercase mb-4 sm:mb-6 tracking-tight">
                      The Challenge
                    </h4>
                    <p className="text-lg sm:text-xl text-text-primary leading-relaxed font-medium">
                      {project.challenge}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="-mx-4 sm:mx-0">
          <Link
            to={`/project/${nextProject.slug}`}
            aria-label={`Next case study: ${nextProject.title}`}
            className="block group relative overflow-hidden transition-colors duration-500"
          >
            {/* Content Container */}
            <div className="px-6 md:px-12 py-20 sm:py-32 md:py-40 flex flex-col relative z-10">
              {/* Label Atas */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-xs font-bold text-text-primary uppercase tracking-[0.3em] group-hover:text-brand-bg transition-colors duration-500">
                  Next Case Study
                </span>
                <div className="h-[1px] w-12 bg-text-primary group-hover:bg-brand-bg transition-colors duration-500" />
              </div>

              {/* Judul Masif & Solid */}
              <h2 className="text-[12vw] sm:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] text-text-primary group-hover:text-brand-bg transition-colors duration-500">
                {nextProject.title}
              </h2>

              {/* Detail Bawah (Tampil saat hover) */}
              <div className="mt-12 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <p className="font-mono text-[10px] sm:text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">
                  {nextProject.category} // {nextProject.year}
                </p>
                <ArrowUpRight className="w-10 h-10 text-brand-bg" />
              </div>
            </div>

            {/* Background Slide Up */}
            <div className="absolute inset-0 bg-text-primary translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.85,0,0.15,1)] z-0" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;

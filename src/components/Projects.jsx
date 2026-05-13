import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolio';

const COLORS = {
  blue: {
    border: 'rgba(37, 99, 235, 0.25)',
    glow: 'rgba(37, 99, 235, 0.08)',
    text: '#2563eb',
    bg: 'rgba(37, 99, 235, 0.06)',
  },
  purple: {
    border: 'rgba(124, 58, 237, 0.25)',
    glow: 'rgba(124, 58, 237, 0.08)',
    text: '#7c3aed',
    bg: 'rgba(124, 58, 237, 0.06)',
  },
  cyan: {
    border: 'rgba(2, 132, 199, 0.25)',
    glow: 'rgba(2, 132, 199, 0.08)',
    text: '#0284c7',
    bg: 'rgba(2, 132, 199, 0.06)',
  },
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [hovered, setHovered] = useState(false);
  const c = COLORS[project.color] ?? COLORS.blue;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden transition-[border-color,box-shadow,transform] duration-300"
      style={{
        border: `1px solid ${hovered ? c.border : 'rgba(15,23,42,0.08)'}`,
        boxShadow: hovered ? `0 0 40px ${c.glow}` : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}
    >
      <div className="glass rounded-2xl p-6 sm:p-7 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 gap-3">
          <div className="min-w-0">
            <span
              className="text-xs font-mono-custom px-3 py-1 rounded-full mb-3 inline-block font-semibold"
              style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
            >
              featured project
            </span>
            <h3 className="font-syne font-bold text-lg sm:text-xl text-slate-900 truncate">
              {project.name}
            </h3>
            <p className="text-sm font-semibold mt-0.5" style={{ color: c.text }}>
              {project.subtitle}
            </p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors shrink-0"
            style={{ border: '1px solid rgba(15,23,42,0.1)' }}
          >
            <FaGithub size={16} />
          </a>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6 flex-1">
          {project.highlights.map((h, j) => (
            <li key={j} className="flex gap-2 text-slate-600 text-sm leading-relaxed">
              <span style={{ color: c.text }} className="shrink-0 mt-0.5">✦</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono-custom px-2.5 py-1 rounded-md font-medium"
              style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeader label="featured_work" title="Projects" />
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

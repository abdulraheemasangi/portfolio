import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import { experience } from '../data/portfolio';

const CARD_STYLE = {
  border: 'rgba(99, 102, 241, 0.25)',
  glow: 'rgba(99, 102, 241, 0.08)',
};

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -36 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="relative pl-14 sm:pl-16 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="absolute left-3 sm:left-3.5 top-1.5 w-5 h-5 rounded-full border-2 border-indigo-600 bg-white flex items-center justify-center glow-blue"
      >
        <div className="w-2 h-2 rounded-full bg-indigo-600" />
      </motion.div>

      {/* Card */}
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-2xl overflow-hidden transition-[border-color,box-shadow,transform] duration-300"
        style={{
          border: `1px solid ${hovered ? CARD_STYLE.border : 'rgba(15,23,42,0.08)'}`,
          boxShadow: hovered ? `0 0 40px ${CARD_STYLE.glow}` : 'none',
          transform: hovered ? 'translateY(-4px)' : 'none',
        }}
      >
        <div className="glass rounded-2xl p-5 sm:p-7">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-emerald-600 font-mono-custom font-medium">
                  Currently working here
                </span>
              </div>
              <h3 className="font-syne font-bold text-xl sm:text-2xl text-slate-900">
                {exp.company}
              </h3>
              <p className="text-indigo-600 font-semibold mt-1 text-sm sm:text-base">{exp.role}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="font-mono-custom text-xs px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 font-medium whitespace-nowrap">
                {exp.period}
              </span>
              <p className="text-slate-500 text-xs mt-2">{exp.location}</p>
            </div>
          </div>

          {/* Bullet points */}
          <ul className="space-y-3 mb-6">
            {exp.points.map((point, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + j * 0.05 }}
                className="flex gap-3 text-slate-600 text-sm leading-relaxed"
              >
                <span className="text-indigo-500 mt-1 shrink-0">▸</span>
                {point}
              </motion.li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span key={t} className="skill-tag text-xs">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeader label="work_experience" title="Experience" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-2">
          {/* Vertical line */}
          <div className="absolute left-[1.375rem] sm:left-6 top-2 bottom-0 w-0.5 bg-indigo-200/70" />
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

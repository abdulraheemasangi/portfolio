import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiDjango, SiNodedotjs, SiReact, SiPostgresql, SiMongodb, SiDocker,
  SiHtml5, SiJavascript, SiPython, SiTailwindcss,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { skills } from '../data/portfolio';

const TECH_ICONS = [
  { Icon: SiHtml5, color: '#e34f26', label: 'HTML' },
  { Icon: FaCss3Alt, color: '#1572b6', label: 'CSS' },
  { Icon: SiTailwindcss, color: '#38bdf8', label: 'Tailwind CSS' },
  { Icon: SiJavascript, color: '#f7df1e', label: 'JavaScript' },
  { Icon: SiPython, color: '#3776ab', label: 'Python' },
  { Icon: SiDjango, color: '#092e20', label: 'Django' },
  { Icon: SiNodedotjs, color: '#339933', label: 'Node.js' },
  { Icon: SiReact, color: '#61dafb', label: 'React' },
  { Icon: SiPostgresql, color: '#336791', label: 'PostgreSQL' },
  { Icon: SiMongodb, color: '#47a248', label: 'MongoDB' },
  { Icon: SiDocker, color: '#2496ed', label: 'Docker' },
];

const CATEGORY_META = {
  Backend:        { color: '#3b82f6', icon: 'server' },
  Frontend:       { color: '#6366f1', icon: 'code' },
  Databases:      { color: '#0ea5e9', icon: 'database' },
  'DevOps & Deploy': { color: '#f43f5e', icon: 'cloud' },
  Tools:          { color: '#f59e0b', icon: 'settings' },
};

function CategoryIcon({ name, color }) {
  const shared = { className: 'w-5 h-5', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24' };
  if (name === 'Backend') return (
    <svg {...shared}>
      <rect x="2" y="3" width="20" height="8" rx="2" /><rect x="2" y="13" width="20" height="8" rx="2" />
      <line x1="6" y1="7" x2="6.01" y2="7" /><line x1="6" y1="17" x2="6.01" y2="17" />
    </svg>
  );
  if (name === 'Frontend') return (
    <svg {...shared}>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
  if (name === 'Databases') return (
    <svg {...shared}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
  if (name === 'DevOps & Deploy') return (
    <svg {...shared}>
      <path d="M18 10a5 5 0 0 0-9.54-2.29A6 6 0 0 0 2 13a6 6 0 0 0 6 6h10a5 5 0 0 0 0-10z" />
      <line x1="12" y1="12" x2="12" y2="16" /><polyline points="9 13 12 10 15 13" />
    </svg>
  );
  return (
    <svg {...shared}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9" />
    </svg>
  );
}

function SkillCategory({ category, items, color, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-2xl p-5 sm:p-6"
      style={{ border: `1px solid ${color}22` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <CategoryIcon name={category} color={color} />
        <h3 className="font-syne font-bold text-slate-800 text-sm sm:text-base flex-1 min-w-0 truncate">
          {category}
        </h3>
        <div
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: color, boxShadow: `0 0 7px ${color}` }}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.18 + i * 0.04 }}
            className="skill-tag text-xs"
            style={{ color, borderColor: `${color}30`, background: `${color}09` }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  // Triple for seamless loop
  const marqueeItems = [...TECH_ICONS, ...TECH_ICONS, ...TECH_ICONS];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeader label="technical_skills" title="Skills" />
        </motion.div>

        {/* Marquee */}
        <div className="relative mb-12 overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10"
            style={{ background: 'linear-gradient(90deg, var(--bg-primary), transparent)' }}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10"
            style={{ background: 'linear-gradient(-90deg, var(--bg-primary), transparent)' }}
            aria-hidden="true"
          />
          <div className="marquee-track flex items-center gap-4 sm:gap-6">
            {marqueeItems.map(({ Icon, color, label }, i) => (
              <motion.div
                key={`${label}-${i}`}
                whileHover={{ scale: 1.08, rotate: 4, y: -4 }}
                className="flex items-center gap-2 sm:gap-3 px-4 py-2.5 rounded-xl glass border border-slate-200/60 hover:border-indigo-200 transition-all cursor-default whitespace-nowrap shrink-0"
              >
                <Icon size={19} style={{ color }} />
                <span className="text-slate-700 font-medium text-xs sm:text-sm">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCategory
              key={category}
              category={category}
              items={items}
              color={CATEGORY_META[category]?.color ?? 'var(--neon-blue)'}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

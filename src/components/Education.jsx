import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import { education, certifications } from '../data/portfolio';

const BLUE = { border: 'rgba(37, 99, 235, 0.25)', glow: 'rgba(37, 99, 235, 0.08)' };
const AMBER = { border: 'rgba(245, 158, 11, 0.25)', glow: 'rgba(245, 158, 11, 0.08)' };

function GradIcon() {
  return (
    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

function EngineeringIcon() {
  return (
    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polygon points="12 2 22 20 2 20" />
      <line x1="12" y1="8" x2="12" y2="14" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function EducationCard({ edu, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden transition-[border-color,box-shadow,transform] duration-300 h-full"
      style={{
        border: `1px solid ${hovered ? BLUE.border : 'rgba(15,23,42,0.08)'}`,
        boxShadow: hovered ? `0 0 40px ${BLUE.glow}` : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}
    >
      <div className="glass rounded-2xl p-6 sm:p-7 h-full flex flex-col">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
            {edu.icon === '🎓' ? <GradIcon /> : <EngineeringIcon />}
          </div>
          <div>
            <h3 className="font-syne font-bold text-slate-900 text-base sm:text-lg leading-tight">
              {edu.degree}
            </h3>
            <p className="text-indigo-600 text-sm font-semibold mt-1">{edu.institution}</p>
            <p className="text-slate-500 text-xs mt-0.5">{edu.school}</p>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <span className="font-mono-custom text-xs px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-600 font-medium">
                {edu.period}
              </span>
              <span className="text-slate-500 text-xs">{edu.location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CertCard({ cert, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden transition-[border-color,box-shadow,transform] duration-300 h-full"
      style={{
        border: `1px solid ${hovered ? AMBER.border : 'rgba(15,23,42,0.08)'}`,
        boxShadow: hovered ? `0 0 40px ${AMBER.glow}` : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}
    >
      <div className="glass rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col h-full">
        {/* Spinning badge */}
        <div className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center" aria-hidden="true">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/30 spin-slow" />
          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        </div>

        <div className="pr-14 flex-1">
          <span className="text-xs font-mono-custom text-amber-700 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 inline-block font-medium">
            certification
          </span>
          <h3 className="font-syne font-bold text-slate-900 text-lg sm:text-xl mt-3">
            {cert.title}
          </h3>
          <p className="text-amber-600 text-sm font-semibold mt-1">{cert.issuer}</p>
          <p className="text-slate-500 text-xs mt-0.5">{cert.duration}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {cert.topics.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md bg-amber-500/5 border border-amber-500/15 text-amber-800 font-mono-custom font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 mt-5 text-sm text-indigo-600 hover:text-indigo-800 transition-colors font-medium self-start"
        >
          View Certificate ↗
        </a>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeader label="education_and_certs" title="Education" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="mt-10"
        >
          <h3 className="font-syne font-bold text-xl sm:text-2xl text-slate-900 mb-5">
            Certifications
          </h3>
          <div className="grid gap-5">
            {certifications.map((cert, i) => (
              <CertCard key={i} cert={cert} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

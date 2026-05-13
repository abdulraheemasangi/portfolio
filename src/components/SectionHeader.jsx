import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Reusable section heading used by every section.
 * @param {string} label  - mono comment, e.g. "about_me"
 * @param {string} title  - main heading text
 * @param {string} [highlight] - optional highlighted word appended after title
 * @param {string} [subtitle]  - optional subtitle paragraph
 */
export default function SectionHeader({ label, title, highlight, subtitle }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      className="mb-14"
    >
      <div className="text-indigo-600 font-mono-custom text-sm mb-3">
        {'// '}{label}
      </div>
      <h2 className="font-syne font-black text-4xl md:text-5xl text-slate-900 mb-3 section-line">
        {title}
        {highlight && <> <span className="gradient-text">{highlight}</span></>}
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-base sm:text-lg max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}

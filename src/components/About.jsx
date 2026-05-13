import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { personalInfo } from '../data/portfolio';

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -36 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.55, delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 36 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.55, delay },
});

function CodeBlock() {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden shadow-xl"
      style={{ background: '#0A1F44', border: '1px solid rgba(99,102,241,0.2)' }}
    >
      {/* Terminal chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: 'rgba(10,31,68,0.6)', borderBottom: '1px solid rgba(99,102,241,0.15)' }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-slate-400 font-mono-custom ml-2">developer.py</span>
      </div>

      <div className="p-5 font-mono-custom text-xs sm:text-sm leading-loose overflow-x-auto">
        <div>
          <span className="text-purple-400">class</span>{' '}
          <span className="text-blue-300">Developer</span>:
        </div>
        <div className="ml-4 text-slate-500"># Abdul Raheem</div>
        <div className="ml-4 mt-2">
          <span className="text-purple-400">def</span>{' '}
          <span className="text-yellow-300">__init__</span>
          <span className="text-slate-300">(self):</span>
        </div>
        {[
          ['role', '"Software Engineering Consultant"'],
          ['stack', '["Django", "Node", "React"]'],
          ['db', '["PostgreSQL", "MongoDB"]'],
          ['devops', '["Docker", "Linux", "VPS"]'],
        ].map(([key, val]) => (
          <div className="ml-8" key={key}>
            <span className="text-slate-300">self.</span>
            <span className="text-green-300">{key}</span>
            <span className="text-slate-400"> = </span>
            <span className="text-orange-300">{val}</span>
          </div>
        ))}
        <div className="ml-8 mt-2">
          <span className="text-slate-300">self.</span>
          <span className="text-green-300">status</span>
          <span className="text-slate-400"> = </span>
          <span className="text-emerald-300">"Available 🟢"</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-40px' });

  return (
    <section id="about" className="section-padding relative">
      {/* Ambient accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          filter: 'blur(70px)',
          opacity: 0.05,
          transform: 'translateY(-50%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader label="about_me" title="Who I" highlight="Am" />

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-start">
          {/* Left — text */}
          <div className="space-y-5">
            <motion.div
              {...fadeLeft(0)}
              animate={inView ? fadeLeft(0).animate : {}}
            >
              <div
                className="p-6 rounded-2xl glass"
                style={{
                  border: '1px solid rgba(15,23,42,0.08)',
                  borderLeft: '3px solid #6366f1',
                }}
              >
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {personalInfo.about}
                </p>
              </div>
            </motion.div>

            {/* Info pills */}
            <motion.div
              {...fadeLeft(0.18)}
              animate={inView ? fadeLeft(0.18).animate : {}}
              className="flex flex-wrap gap-2.5"
            >
              {[
                { Icon: FiMapPin, text: 'India' },
                { Icon: FiPhone, text: personalInfo.phone },
                { Icon: FiMail, text: 'Open to Opportunities' },
              ].map(({ Icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-600 glass"
                  style={{ border: '1px solid rgba(15,23,42,0.08)' }}
                >
                  <Icon className="text-indigo-600 shrink-0" size={13} />
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — code block */}
          <motion.div
            {...fadeRight(0.1)}
            animate={inView ? fadeRight(0.1).animate : {}}
          >
            <CodeBlock />
          </motion.div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mt-14 w-full"
        >
          {personalInfo.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.12, duration: 0.5 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="p-5 sm:p-6 rounded-2xl glass text-center group relative overflow-hidden"
              style={{ border: '1px solid rgba(15,23,42,0.08)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-syne gradient-text mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-slate-500 text-[11px] uppercase tracking-wider font-mono-custom font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

const QUICK_LINKS = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];

const SOCIALS = [
  { href: personalInfo.github, Icon: FaGithub, label: 'GitHub', external: true },
  { href: personalInfo.linkedin, Icon: FaLinkedinIn, label: 'LinkedIn', external: true },
  { href: `mailto:${personalInfo.email}`, Icon: FaEnvelope, label: 'Email', external: false },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <footer
      ref={ref}
      className="relative border-t border-slate-200/60 pt-16 pb-8 px-6 sm:px-8 overflow-hidden bg-slate-50/50"
    >
      {/* Decorative ambient background blur */}
      <div 
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full pointer-events-none opacity-[0.03] select-none"
        style={{
          background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full pointer-events-none opacity-[0.03] select-none"
        style={{
          background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Abdul Raheem"
              className="h-8 w-fit object-contain select-none"
            />
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Full-Stack &amp; Backend Developer specializing in scalable server architectures, robust APIs, and modern deployment workflows.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="md:col-span-4 flex flex-col gap-4"
          >
            <h4 className="text-slate-900 font-syne font-bold text-xs uppercase tracking-widest">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="group flex items-center gap-1 text-slate-500 hover:text-indigo-600 transition-all duration-200 capitalize font-medium"
                >
                  <span className="text-[10px] text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0">▸</span>
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="md:col-span-3 flex flex-col gap-4"
          >
            <h4 className="text-slate-900 font-syne font-bold text-xs uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex gap-3">
              {SOCIALS.map(({ href, Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-slate-200/70 glass flex items-center justify-center text-slate-500 hover:border-indigo-500/30 hover:bg-indigo-50/50 hover:text-indigo-600 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-mono-custom font-medium">
          <p>© {new Date().getFullYear()} ABDUL RAHEEM. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2 text-[10px]">
            <span>DESIGNED &amp; ENGINEERED</span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span>2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

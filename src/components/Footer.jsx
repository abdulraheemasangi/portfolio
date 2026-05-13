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
      className="border-t border-slate-200 pt-14 pb-8 px-5 sm:px-6"
      style={{ background: 'rgba(248,250,252,0.4)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Abdul Raheem"
              className="h-8 w-fit object-contain"
            />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Crafting scalable backend logic &amp; modern digital systems.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-slate-900 font-syne font-bold text-xs uppercase tracking-widest">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="text-slate-500 hover:text-indigo-600 transition-colors capitalize"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-slate-900 font-syne font-bold text-xs uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex gap-2.5">
              {SOCIALS.map(({ href, Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-indigo-50 hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-slate-200/70 pt-7 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Abdul Raheem. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

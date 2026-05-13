import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const RESUME_URL = 'https://drive.google.com/file/d/1s3HgDtLrcxnKfqdCYsKXXpAJNTC1n1D9/view';

function TypeWriter({ words }) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const delay = deleting ? 55 : 95;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = word.substring(0, charIdx + 1);
        setDisplay(next);
        if (charIdx + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        const next = word.substring(0, charIdx - 1);
        setDisplay(next);
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span className="gradient-text font-syne font-bold">
      {display}
      <span className="typing-cursor" aria-hidden="true">|</span>
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const socials = (email, github, linkedin) => [
  { Icon: FaGithub, href: github, label: 'GitHub', external: true },
  { Icon: FaLinkedinIn, href: linkedin, label: 'LinkedIn', external: true },
  { Icon: FiMail, href: `mailto:${email}`, label: 'Email', external: false },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-24 pb-16"
      style={{ position: 'relative' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-7">
            <span className="font-mono-custom text-xs px-4 py-2 rounded-full border border-indigo-500/20 text-indigo-600 bg-indigo-500/5">
              &gt; available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-syne font-black text-[2.6rem] leading-none sm:text-6xl md:text-7xl lg:text-[5.5rem] text-slate-900 mb-4 tracking-tight"
          >
            Abdul Raheem
          </motion.h1>

          {/* Typing role */}
          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-3xl md:text-4xl mb-7 flex items-center min-h-[2.5rem]"
          >
            <TypeWriter words={personalInfo.typingRoles} />
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-slate-500 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl leading-relaxed mb-10 px-2"
          >
            {personalInfo.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-glow px-6 sm:px-7 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))' }}
            >
              View Projects →
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-glow px-6 sm:px-7 py-3 rounded-xl font-semibold text-sm border border-indigo-500/30 text-indigo-600 hover:bg-indigo-500/8 transition-all duration-300"
            >
              Contact Me
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-glow px-6 sm:px-7 py-3 rounded-xl font-semibold text-sm border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-all duration-300"
            >
              Resume ↗
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={itemVariants} className="flex gap-3">
            {socials(personalInfo.email, personalInfo.github, personalInfo.linkedin).map(
              ({ Icon, href, label, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass glow-blue flex items-center justify-center text-slate-600 hover:text-indigo-600 transition-colors duration-200"
                  style={{ border: '1px solid rgba(37, 99, 235, 0.15)' }}
                >
                  <Icon size={18} />
                </motion.a>
              )
            )}
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-col items-center gap-2 text-slate-400"
            aria-hidden="true"
          >
            <span className="text-xs font-mono-custom">scroll</span>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-0.5 h-7 bg-gradient-to-b from-indigo-500/50 to-transparent rounded"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

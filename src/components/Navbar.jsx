import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];
const RESUME_URL = 'https://drive.google.com/file/d/1s3HgDtLrcxnKfqdCYsKXXpAJNTC1n1D9/view';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = NAV_LINKS.map((n) => n.toLowerCase());
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 130 && bottom >= 130;
      });
      if (current) setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={`navbar fixed top-0 left-0 right-0 z-50 transition-[padding] duration-300 ${scrolled ? 'py-2.5' : 'py-4'}`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="h-8 flex items-center"
            aria-label="Scroll to top"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Abdul Raheem"
              className="h-full max-w-[150px] object-contain hover:opacity-75 transition-opacity"
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  active === link.toLowerCase()
                    ? 'text-indigo-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {active === link.toLowerCase() && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </button>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="ml-3 px-4 py-2 rounded-lg border border-indigo-500/30 text-indigo-600 text-sm font-semibold hover:bg-indigo-500/10 transition-colors duration-200 btn-glow"
            >
              Resume ↗
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 -mr-1 flex flex-col gap-1.5"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-indigo-600 origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-0.5 bg-indigo-600"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-indigo-600 origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[57px] left-0 right-0 z-40 md:hidden"
            style={{ background: 'rgba(255,255,255,0.97)', borderBottom: '1px solid rgba(99,102,241,0.12)' }}
          >
            <div className="flex flex-col py-3 px-5 gap-0.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className={`text-left py-3 text-sm font-medium border-b border-slate-100 transition-colors ${
                    active === link.toLowerCase() ? 'text-indigo-600' : 'text-slate-700 hover:text-indigo-600'
                  }`}
                >
                  {link}
                </button>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 py-3 text-center rounded-xl border border-indigo-500/30 text-indigo-600 text-sm font-semibold hover:bg-indigo-50 transition-colors"
              >
                Download Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

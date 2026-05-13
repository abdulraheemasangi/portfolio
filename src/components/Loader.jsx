import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 550);
          }, 150);
          return 100;
        }
        return prev + 2;
      });
    }, 18);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
              filter: 'blur(60px)',
              opacity: 0.15,
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, type: 'spring', stiffness: 220 }}
            className="relative z-10 flex flex-col items-center gap-7"
          >
            {/* Logo with spinning ring */}
            <div className="relative w-24 h-24">
              <div
                className="w-full h-full rounded-2xl flex items-center justify-center bg-white p-5"
                style={{
                  boxShadow: '0 0 50px rgba(99,102,241,0.35)',
                  border: '1px solid rgba(99,102,241,0.18)',
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}favicon.png`}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain select-none pointer-events-none"
                />
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  border: '2px solid transparent',
                  borderTopColor: '#8b5cf6',
                  borderRightColor: '#6366f1',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Name + role */}
            <div className="text-center">
              <motion.h1
                className="text-2xl font-bold gradient-text mb-1 font-syne"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                Abdul Raheem
              </motion.h1>
              <motion.p
                className="text-slate-500 text-sm font-mono-custom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Backend &amp; Full Stack Developer
              </motion.p>
            </div>

            {/* Progress bar */}
            <motion.div
              className="w-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <div className="flex justify-between text-xs text-slate-400 mb-2 font-mono-custom">
                <span>Loading portfolio…</span>
                <span>{count}%</span>
              </div>
              <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-75"
                  style={{
                    background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)',
                    width: `${count}%`,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

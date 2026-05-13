import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { personalInfo } from '../data/portfolio';

function FormField({ label, error, children }) {
  return (
    <div>
      <label className="text-slate-600 text-xs font-medium mb-2 block">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

const validate = (form) => {
  const e = {};
  if (!form.name.trim()) e.name = 'Name is required';
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
  if (!form.message.trim()) e.message = 'Message is required';
  return e;
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [formHovered, setFormHovered] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const subj = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subj}&body=${body}`);
    setToast('Opening your email client! ✉️');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeader label="get_in_touch" title="Contact" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-syne font-bold text-xl sm:text-2xl text-slate-900 mb-3">
                Let's build something great.
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a chat about backend engineering.
              </p>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {[
                { Icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { Icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:border-indigo-500/30 transition-all duration-200 group"
                  style={{ border: '1px solid rgba(15,23,42,0.08)' }}
                >
                  <Icon className="text-slate-400 group-hover:text-indigo-600 transition-colors shrink-0" size={18} />
                  <div className="min-w-0">
                    <div className="text-slate-500 text-xs">{label}</div>
                    <div className="text-slate-800 text-sm group-hover:text-indigo-600 font-medium transition-colors truncate">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: 'GitHub', href: personalInfo.github, Icon: FaGithub, color: '#1e293b' },
                { label: 'LinkedIn', href: personalInfo.linkedin, Icon: FaLinkedinIn, color: '#0077b5' },
              ].map(({ label, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl text-center text-sm font-semibold transition-all duration-200 border flex items-center justify-center gap-2"
                  style={{ borderColor: `${color}25`, color, background: `${color}08` }}
                >
                  <Icon size={14} /> {label} ↗
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            onMouseEnter={() => setFormHovered(true)}
            onMouseLeave={() => setFormHovered(false)}
            className="md:col-span-3 rounded-2xl overflow-hidden transition-[border-color,box-shadow,transform] duration-300"
            style={{
              border: `1px solid ${formHovered ? 'rgba(99,102,241,0.25)' : 'rgba(15,23,42,0.08)'}`,
              boxShadow: formHovered ? '0 0 40px rgba(99,102,241,0.07)' : 'none',
              transform: formHovered ? 'translateY(-4px)' : 'none',
            }}
          >
            <div className="glass rounded-2xl p-5 sm:p-7 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Name" error={errors.name}>
                  <input
                    className="contact-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set('name')}
                    autoComplete="name"
                  />
                </FormField>
                <FormField label="Email" error={errors.email}>
                  <input
                    className="contact-input"
                    placeholder="you@example.com"
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    autoComplete="email"
                  />
                </FormField>
              </div>

              <FormField label="Subject">
                <input
                  className="contact-input"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={set('subject')}
                />
              </FormField>

              <FormField label="Message" error={errors.message}>
                <textarea
                  className="contact-input resize-none"
                  rows={5}
                  placeholder="Tell me about your project or opportunity…"
                  value={form.message}
                  onChange={set('message')}
                />
              </FormField>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-semibold text-white btn-glow transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))' }}
              >
                Send Message →
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>

      {toast && (
        <div className="toast" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </section>
  );
}

'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { personalInfo } from '@/data/portfolioData'

// ── shared input style ──────────────────────────────────────────────────────
const inputBase =
  'w-full bg-surface/60 backdrop-blur-sm border border-border-subtle rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-dim ' +
  'focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 ' +
  'hover:border-border-subtle/80 transition-all duration-200'

// ── contact info items ──────────────────────────────────────────────────────
const contactItems = (info: typeof personalInfo) => [
  {
    href: `mailto:${info.email}`,
    label: 'Email',
    value: info.email,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: `https://wa.me/${info.phone}`,
    label: 'Phone',
    value: info.phone,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    href: undefined,
    label: 'Location',
    value: info.location,
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const socialLinks = (info: typeof personalInfo) => [
  { href: info.linkedin, label: 'LinkedIn' },
  { href: info.github, label: 'GitHub' },
  { href: info.tableau, label: 'Tableau' },
]

// ── stagger variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

// ── component ───────────────────────────────────────────────────────────────
export default function ContactSection() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors((prev) => { const n = { ...prev }; delete n[e.target.name]; return n })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    if (!fields.name.trim()) newErrors.name = 'Name is required'
    if (!fields.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!fields.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  return (
    <div className="relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      {/* Background glows */}
      <div className="absolute inset-x-0 top-0 h-[500px] pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-electric-blue blur-[130px]"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="w-full h-full rounded-full bg-cyan-accent blur-[120px]"
        />
      </div>

      <SectionWrapper id="contact">

        {/* ── HERO CTA BLOCK ── */}
        <AnimatedSection variant="fadeSlideUp">
          <div className="relative text-center mb-16 px-4">
            {/* Glassmorphism card behind the heading */}
            <div className="relative inline-block w-full max-w-3xl mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-surface/40 backdrop-blur-md border border-border-subtle/60 shadow-card pointer-events-none" />
              {/* Gradient border glow */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,102,255,0.15), rgba(0,212,255,0.08), transparent)',
                  padding: '1px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  borderRadius: '1.5rem',
                }}
              />

              <div className="relative z-10 py-12 px-8 sm:px-12">
                {/* Label */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                    border border-electric-blue/30 bg-electric-blue/5 text-electric-blue text-xs font-semibold tracking-wider mb-6 uppercase"
                >
                  <motion.span
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-electric-blue"
                  />
                  Available for work
                </motion.div> */}

                {/* Main heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5"
                >
                  <span className="text-text-primary">Let&apos;s </span>
                  <span className="text-gradient">Connect</span>
                </motion.h2>

                {/* Supporting text */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.22 }}
                  className="text-text-muted text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
                >
                  Have a project in mind or want to collaborate?{' '}
                  <span className="text-text-primary font-medium">I&apos;d love to hear from you.</span>
                </motion.p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── CONTENT GRID ── */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* ── LEFT: Contact info + socials ── */}
          <AnimatedSection delay={0.1} variant="slideInLeft">
            <div className="space-y-5 h-full">

              {/* Info card */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface/70 backdrop-blur-sm border border-border-subtle rounded-2xl p-6 space-y-1"
              >
                {contactItems(personalInfo).map((item, i) => {
                  const inner = (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      whileHover={item.href ? { x: 5 } : {}}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className={`flex items-center gap-4 py-3 group ${i < contactItems(personalInfo).length - 1 ? 'border-b border-border-subtle/60' : ''}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue shrink-0
                        group-hover:bg-electric-blue/20 group-hover:shadow-glow-sm transition-all duration-200">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-text-dim text-xs mb-0.5 uppercase tracking-wider">{item.label}</p>
                        <p className="text-text-primary text-sm font-medium group-hover:text-electric-blue transition-colors duration-200 truncate">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  )
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">{inner}</a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  )
                })}
              </motion.div>

              {/* Social links */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {socialLinks(personalInfo).map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.06, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                      bg-surface/70 backdrop-blur-sm border border-border-subtle text-text-muted text-sm font-medium
                      hover:border-electric-blue hover:text-electric-blue hover:bg-electric-blue/5 hover:shadow-glow-sm
                      transition-all duration-200"
                  >
                    {s.label}
                  </motion.a>
                ))}
              </motion.div>

              {/* Availability note */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-3 bg-electric-blue/5 border border-electric-blue/20 rounded-2xl p-4"
              >
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="mt-0.5 w-2.5 h-2.5 rounded-full bg-electric-blue shrink-0"
                />
                <p className="text-text-muted text-sm leading-relaxed">
                  Currently{' '}
                  <span className="text-electric-blue font-semibold">open to full-time, freelance, and collaborative opportunities</span>
                  {' '}in data analytics and business intelligence.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* ── RIGHT: Form ── */}
          <AnimatedSection delay={0.18} variant="slideInRight">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-surface/70 backdrop-blur-sm border border-electric-blue/30 rounded-2xl p-10
                    flex flex-col items-center justify-center text-center h-full min-h-[360px]"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.15 }}
                    className="w-16 h-16 rounded-full bg-electric-blue/10 border border-electric-blue/30
                      flex items-center justify-center text-electric-blue mb-5 shadow-glow-sm"
                  >
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-text-primary font-bold text-xl mb-2">Message sent!</h3>
                  <p className="text-text-muted text-sm max-w-xs">Thanks for reaching out. I will get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-surface/70 backdrop-blur-sm border border-border-subtle rounded-2xl p-6 space-y-5
                    hover:border-border-subtle/80 transition-colors duration-300"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-text-muted text-xs font-semibold mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      id="name" type="text" name="name"
                      placeholder="Your name"
                      value={fields.name} onChange={handleChange}
                      className={inputBase}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          key="err-name"
                          initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          data-testid="error-name"
                          className="mt-1.5 text-red-400 text-xs"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-text-muted text-xs font-semibold mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="email" type="email" name="email"
                      placeholder="you@example.com"
                      value={fields.email} onChange={handleChange}
                      className={inputBase}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          key="err-email"
                          initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          data-testid="error-email"
                          className="mt-1.5 text-red-400 text-xs"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-text-muted text-xs font-semibold mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message" name="message" rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={fields.message} onChange={handleChange}
                      className={`${inputBase} resize-none`}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          key="err-message"
                          initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          data-testid="error-message"
                          className="mt-1.5 text-red-400 text-xs"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    className="w-full py-3.5 rounded-xl bg-electric-blue text-white font-bold text-sm
                      hover:bg-blue-glow hover:shadow-glow-md transition-all duration-200 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    <span className="relative z-10">Send Message</span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </div>
  )
}

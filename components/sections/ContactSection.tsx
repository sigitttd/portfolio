'use client'

import React, { useState } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { personalInfo } from '@/data/portfolioData'

const inputClass =
  'w-full bg-surface border border-border-subtle rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-dim focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 transition-all duration-200'

export default function ContactSection() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[e.target.name]
        return next
      })
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
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-electric-blue/4 blur-[100px] pointer-events-none" />

      <SectionWrapper id="contact">
        <AnimatedSection>
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <div className="bg-surface border border-border-subtle rounded-2xl p-6 space-y-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue shrink-0 group-hover:bg-electric-blue/20 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-dim text-xs mb-0.5">Email</p>
                    <p className="text-text-primary text-sm font-medium group-hover:text-electric-blue transition-colors duration-200">{personalInfo.email}</p>
                  </div>
                </a>

                <div className="h-px bg-border-subtle" />

                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue shrink-0 group-hover:bg-electric-blue/20 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-dim text-xs mb-0.5">Phone</p>
                    <p className="text-text-primary text-sm font-medium group-hover:text-electric-blue transition-colors duration-200">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="h-px bg-border-subtle" />

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center text-electric-blue shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-dim text-xs mb-0.5">Location</p>
                    <p className="text-text-primary text-sm font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-3">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border-subtle text-text-muted hover:border-electric-blue hover:text-electric-blue transition-all duration-200 text-sm font-medium">
                  LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border-subtle text-text-muted hover:border-electric-blue hover:text-electric-blue transition-all duration-200 text-sm font-medium">
                  GitHub
                </a>
                <a href={personalInfo.tableau} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border-subtle text-text-muted hover:border-electric-blue hover:text-electric-blue transition-all duration-200 text-sm font-medium">
                  Tableau
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.2}>
            {submitted ? (
              <div className="bg-surface border border-electric-blue/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                <div className="w-14 h-14 rounded-full bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center text-electric-blue mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-text-primary font-semibold text-lg mb-2">Message sent!</h3>
                <p className="text-text-muted text-sm">Thanks for reaching out. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="bg-surface border border-border-subtle rounded-2xl p-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-text-muted text-xs font-medium mb-1.5">Your Name</label>
                  <input id="name" type="text" name="name" placeholder="Your name" value={fields.name} onChange={handleChange} className={inputClass} />
                  {errors.name && <p data-testid="error-name" className="mt-1.5 text-red-400 text-xs">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-muted text-xs font-medium mb-1.5">Email Address</label>
                  <input id="email" type="email" name="email" placeholder="you@example.com" value={fields.email} onChange={handleChange} className={inputClass} />
                  {errors.email && <p data-testid="error-email" className="mt-1.5 text-red-400 text-xs">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-muted text-xs font-medium mb-1.5">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your project or opportunity..." value={fields.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                  {errors.message && <p data-testid="error-message" className="mt-1.5 text-red-400 text-xs">{errors.message}</p>}
                </div>

                <button type="submit" className="w-full py-3 rounded-xl bg-electric-blue text-white font-semibold text-sm hover:bg-blue-glow hover:shadow-glow-md transition-all duration-200">
                  Send Message
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </div>
  )
}

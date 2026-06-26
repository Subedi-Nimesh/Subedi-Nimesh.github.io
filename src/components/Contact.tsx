import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { Section } from './Section'
import { profile } from '../data/profile'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Open to backend engineering roles and API-focused projects."
      className="bg-slate-50 dark:bg-slate-900/30"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Whether you&apos;re hiring for a backend role or want to discuss an API project, I&apos;d
            love to hear from you. I typically respond within 24 hours.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-slate-700 transition hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
            >
              <HiOutlineMail size={22} className="text-teal-500" />
              {profile.email}
            </a>
            <p className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <HiOutlineLocationMarker size={22} className="text-teal-500" />
              {profile.location}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-teal-600 dark:hover:text-teal-400"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-teal-600 dark:hover:text-teal-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none ring-teal-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none ring-teal-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none ring-teal-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-teal-500 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-center text-sm text-teal-600 dark:text-teal-400">
                Opening your email client…
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  )
}

import { motion } from 'framer-motion'
import { HiOutlineDocumentDownload, HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile'

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-sm text-teal-600 dark:text-teal-400">
            {'// backend engineer'}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-700 dark:text-slate-300 sm:text-2xl">
            {profile.title}
            <span className="ml-2 font-mono text-teal-500">{'{ }'}</span>
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-600"
            >
              <HiOutlineDocumentDownload size={18} />
              View Resume
            </a>
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
            >
              See My APIs
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
            >
              <HiOutlineMail size={18} />
              Contact
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 shadow-2xl dark:border-slate-700">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 font-mono text-xs text-slate-500">api.ts</span>
            </div>
            <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-slate-300">
              <code>{`// REST API — backend focus
export const profile = {
  role: "Backend Engineer",
  stack: [
    "Laravel", "Express",
    "PostgreSQL", "MySQL"
  ],
  focus: [
    "REST API design",
    "SQL optimization",
    "Token auth (JWT/Sanctum)"
  ]
};

GET /api/tasks     → 200 OK
POST /api/tasks    → 201 Created
GET /api/health    → { status: "up" }`}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { Section } from './Section'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <Section
      id="projects"
      title="Backend Projects"
      subtitle="Live API demos with authentication, database persistence, and Swagger documentation."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="border-b border-slate-200 p-6 dark:border-slate-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{project.description}</p>
              <p className="mt-3 font-mono text-xs text-slate-500 dark:text-slate-500">
                {project.architecture}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-teal-500/10 px-2.5 py-1 text-xs font-medium text-teal-700 dark:text-teal-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Key Endpoints
              </p>
              <ul className="space-y-1.5">
                {project.endpoints.map((endpoint) => (
                  <li key={endpoint} className="font-mono text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-teal-600 dark:text-teal-400">
                      {endpoint.split(' ')[0]}
                    </span>{' '}
                    {endpoint.split(' ').slice(1).join(' ')}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-slate-200 p-6 dark:border-slate-800">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600"
              >
                <FaGithub size={16} />
                Source
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-600"
              >
                <FaExternalLinkAlt size={14} />
                Live API
              </a>
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-teal-500/40 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-500/10 dark:text-teal-400"
              >
                <HiOutlineBookOpen size={16} />
                Swagger Docs
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

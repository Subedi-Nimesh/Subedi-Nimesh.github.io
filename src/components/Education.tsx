import { motion } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Section } from './Section'
import { LogoFallback } from './LogoFallback'
import { education } from '../data/education'

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Formal training in software engineering and information systems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, i) => (
          <motion.a
            key={edu.id}
            href={edu.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <LogoFallback
              initials={edu.initials}
              accentColor={edu.accentColor}
              logo={edu.logo}
              alt={edu.school}
              className="mb-4 h-16 w-16 text-lg"
            />
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400">
              {edu.school}
              <HiOutlineExternalLink className="opacity-0 transition-opacity group-hover:opacity-100" size={16} />
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{edu.degree}</p>
            <p className="mt-1 font-mono text-sm text-teal-600 dark:text-teal-400">{edu.period}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}

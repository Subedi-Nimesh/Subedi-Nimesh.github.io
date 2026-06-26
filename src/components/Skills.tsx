import { motion } from 'framer-motion'
import { Section } from './Section'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Technologies I use to build and maintain backend systems."
      className="bg-slate-50 dark:bg-slate-900/30"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

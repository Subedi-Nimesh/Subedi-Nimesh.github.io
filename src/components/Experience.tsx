import { motion } from 'framer-motion'
import { Section } from './Section'
import { LogoFallback } from './LogoFallback'
import { experiences } from '../data/experience'

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Professional roles where I built APIs, optimized databases, and shipped production code."
      className="bg-slate-50 dark:bg-slate-900/30"
    >
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.article
            key={exp.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div
              className="flex items-center gap-4 px-6 py-4"
              style={{ backgroundColor: `${exp.accentColor}15` }}
            >
              <LogoFallback
                initials={exp.initials}
                accentColor={exp.accentColor}
                logo={exp.logo}
                alt={exp.company}
                className="h-12 w-12 shrink-0 text-sm"
              />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{exp.company}</h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{exp.role}</p>
              </div>
              <p className="ml-auto hidden font-mono text-sm text-slate-500 dark:text-slate-400 sm:block">
                {exp.period}
              </p>
            </div>
            <div className="px-6 py-5">
              <p className="mb-4 font-mono text-sm text-slate-500 dark:text-slate-400 sm:hidden">
                {exp.period}
              </p>
              <ul className="space-y-3">
                {exp.highlights.map((item) => (
                  <li
                    key={item.slice(0, 40)}
                    className="flex gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

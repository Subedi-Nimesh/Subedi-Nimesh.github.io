import { motion } from 'framer-motion'
import { Section } from './Section'
import { profile } from '../data/profile'

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Building the server-side systems that power great products."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
      >
        <p>{profile.bio}</p>
        <p>
          While I&apos;m comfortable across the stack, my passion lies in backend engineering — designing
          clean API contracts, writing performant database queries, and ensuring systems are secure and
          maintainable. I bring calm under pressure, strong documentation habits, and a focus on
          shipping reliable code.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {['REST APIs', 'Database Design', 'Authentication', 'Code Reviews', 'Documentation'].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-teal-500/30 bg-teal-500/5 px-4 py-1.5 text-sm font-medium text-teal-700 dark:text-teal-400"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </motion.div>
    </Section>
  )
}

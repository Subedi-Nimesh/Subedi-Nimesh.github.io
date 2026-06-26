import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>
          )}
          <div className="mt-4 h-1 w-16 rounded-full bg-teal-500" />
        </motion.div>
        {children}
      </div>
    </section>
  )
}

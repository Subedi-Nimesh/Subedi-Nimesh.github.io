import { useState } from 'react'
import { HiOutlineMenuAlt3, HiX, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { navLinks, profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const scrollTo = (href: string) => {
    setOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg dark:border-slate-800/60 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <button
          onClick={() => scrollTo('#hero')}
          className="flex items-center gap-2 font-mono text-sm font-semibold text-teal-600 dark:text-teal-400"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 ring-1 ring-teal-500/30 dark:text-teal-400">
            NS
          </span>
          <span className="hidden sm:inline">{profile.name.split(' ')[0]}</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            )
          })}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-slate-600 dark:text-slate-400"
          >
            {theme === 'dark' ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-slate-600 dark:text-slate-400"
          >
            {open ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

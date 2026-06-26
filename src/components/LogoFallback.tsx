import { useState } from 'react'

interface LogoFallbackProps {
  initials: string
  accentColor: string
  logo?: string
  alt: string
  className?: string
}

export function LogoFallback({ initials, accentColor, logo, alt, className = '' }: LogoFallbackProps) {
  const [failed, setFailed] = useState(false)

  if (logo && !failed) {
    return (
      <img
        src={logo}
        alt={alt}
        className={`object-contain ${className}`}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <div
      className={`flex items-center justify-center rounded-xl font-bold text-white ${className}`}
      style={{ backgroundColor: accentColor }}
      aria-label={alt}
    >
      {initials}
    </div>
  )
}

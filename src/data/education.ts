export interface Education {
  id: string
  school: string
  degree: string
  period: string
  url: string
  initials: string
  accentColor: string
  logo?: string
}

export const education: Education[] = [
  {
    id: 'byui',
    school: 'Brigham Young University – Idaho',
    degree: 'Bachelor of Science in Software Engineering',
    period: 'January 2018 – December 2020',
    url: 'https://www.byui.edu',
    initials: 'BYUI',
    accentColor: '#006EB6',
    logo: '/assets/BYU-Idaho.png',
  },
  {
    id: 'wilmu',
    school: 'Wilmington University',
    degree: 'Master of Science in Information Systems Technology',
    period: 'August 2023 – December 2024',
    url: 'https://www.wilmu.edu',
    initials: 'WU',
    accentColor: '#003366',
    logo: '/assets/Wilmu.png',
  },
]

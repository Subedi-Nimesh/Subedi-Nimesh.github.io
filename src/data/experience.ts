export interface Experience {
  id: string
  company: string
  role: string
  period: string
  accentColor: string
  initials: string
  logo?: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    id: 'udn',
    company: 'UDN Consultants LLC',
    role: 'Software Engineer Intern',
    period: 'May 2024 – Aug 2024',
    accentColor: '#3C3CB4',
    initials: 'UDN',
    logo: '/assets/UDN.png',
    highlights: [
      'Designed and implemented RESTful APIs to integrate third-party services, enabling seamless data flow between frontend and backend systems.',
      'Refined SQL queries and optimized database structures, improving query execution time by 10%.',
      'Conducted rigorous code reviews, identifying and resolving critical bugs and reducing post-release issues by 15%.',
      'Developed comprehensive documentation in Confluence for developers and stakeholders.',
      'Created interactive prototypes in Figma to visualize and test design concepts.',
    ],
  },
  {
    id: 'thrivelife',
    company: 'ThriveLife',
    role: 'Web Developer',
    period: 'Nov 2021 – May 2023',
    accentColor: '#CB944C',
    initials: 'TL',
    logo: '/assets/ThriveLife.png',
    highlights: [
      'Built high-traffic websites and custom modules on Magento and Laravel, contributing to a 20% increase in sales revenue.',
      'Integrated token-based authentication with REST APIs, improving data accessibility and security across multiple projects.',
      'Designed and built interactive, mobile-responsive reports using Vuetify and PHP.',
      'Handled extension installations and maintenance using Composer for seamless feature additions.',
      'Leveraged analytics integrations to track and optimize client promotion campaigns.',
    ],
  },
  {
    id: 'familysearch',
    company: 'FamilySearch',
    role: 'Front-End Web Developer Intern',
    period: 'Jan 2020 – Jul 2020',
    accentColor: '#05326A',
    initials: 'FS',
    logo: '/assets/FamilySearch.jpg',
    highlights: [
      'Developed and integrated feature flags to enable controlled testing, reducing deployment risks by 25%.',
      'Collaborated on feature development using ReactJS and AngularJS, migrating legacy projects to ReactJS.',
      'Developed unit tests for JavaScript web components, achieving 80% code coverage.',
      'Created interactive prototypes in Figma for potential AI/ML tooling projects.',
    ],
  },
]

export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['PHP', 'JavaScript', 'TypeScript', 'SQL', 'Python'],
  },
  {
    category: 'Backend',
    skills: ['Laravel', 'REST APIs', 'Express.js', 'JWT / Sanctum', 'Node.js'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Query Optimization', 'Migrations', 'Eloquent ORM'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Composer', 'Postman', 'Swagger / OpenAPI', 'CI/CD'],
  },
]

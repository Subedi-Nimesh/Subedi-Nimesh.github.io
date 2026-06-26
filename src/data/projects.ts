export interface Project {
  id: string
  name: string
  description: string
  architecture: string
  stack: string[]
  endpoints: string[]
  githubUrl: string
  liveUrl: string
  docsUrl: string
}

export const projects: Project[] = [
  {
    id: 'task-api',
    name: 'Task Manager REST API',
    description:
      'Production-style Laravel API with token authentication, category management, and paginated task CRUD — built to mirror real-world backend patterns from my professional experience.',
    architecture:
      'Laravel 11 · Sanctum auth · MySQL · Eloquent relationships · Request validation · OpenAPI docs',
    stack: ['Laravel', 'PHP', 'MySQL', 'Sanctum', 'Swagger'],
    endpoints: [
      'POST /api/register',
      'POST /api/login',
      'GET /api/tasks',
      'POST /api/tasks',
      'GET /api/categories',
    ],
    githubUrl: 'https://github.com/Subedi-Nimesh/task-api-laravel',
    liveUrl: 'https://task-api-laravel.onrender.com',
    docsUrl: 'https://task-api-laravel.onrender.com/api/documentation',
  },
  {
    id: 'url-shortener',
    name: 'URL Shortener API',
    description:
      'Node.js microservice for URL shortening with JWT authentication, PostgreSQL persistence, rate limiting, and interactive Swagger documentation.',
    architecture:
      'Express · Prisma ORM · PostgreSQL · JWT · Rate limiting · OpenAPI 3.0',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Swagger'],
    endpoints: [
      'POST /api/auth/register',
      'POST /api/auth/login',
      'POST /api/urls',
      'GET /api/urls',
      'GET /:code',
    ],
    githubUrl: 'https://github.com/Subedi-Nimesh/url-shortener-api',
    liveUrl: 'https://url-shortener-api-ns.onrender.com',
    docsUrl: 'https://url-shortener-api-ns.onrender.com/api-docs',
  },
]

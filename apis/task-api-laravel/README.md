# Task Manager REST API

Laravel 11 REST API with Sanctum token authentication, task/category CRUD, pagination, and Swagger documentation.

## Stack

- Laravel 11
- Laravel Sanctum (API tokens)
- PostgreSQL
- L5 Swagger (OpenAPI docs)

## Endpoints

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/health` | No | Health check |
| POST | `/api/register` | No | Register user |
| POST | `/api/login` | No | Login, get token |
| POST | `/api/logout` | Yes | Revoke token |
| GET | `/api/tasks` | Yes | List tasks (paginated) |
| POST | `/api/tasks` | Yes | Create task |
| GET | `/api/tasks/{id}` | Yes | Get task |
| PUT | `/api/tasks/{id}` | Yes | Update task |
| DELETE | `/api/tasks/{id}` | Yes | Delete task |
| GET | `/api/categories` | Yes | List categories |
| POST | `/api/categories` | Yes | Create category |
| GET | `/api/documentation` | No | Swagger UI |

## Local Development (Docker)

```bash
docker build -t task-api-laravel .
docker run -p 8000:8000 -e DB_CONNECTION=sqlite -e DB_DATABASE=/var/www/database/database.sqlite task-api-laravel
```

Visit http://localhost:8000/api/documentation

## Deploy to Render

1. Push this repo to GitHub as `task-api-laravel`
2. Create a **Blueprint** on Render using `render.yaml`
3. Set `APP_URL` to your Render service URL

## Author

[Nimesh Subedi](https://subedi-nimesh.github.io)

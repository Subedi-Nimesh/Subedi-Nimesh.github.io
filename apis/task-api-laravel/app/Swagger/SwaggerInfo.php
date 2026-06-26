<?php

/**
 * @OA\Info(
 *     title="Task Manager API",
 *     version="1.0.0",
 *     description="REST API for task management with Laravel Sanctum authentication",
 *     @OA\Contact(name="Nimesh Subedi", url="https://subedi-nimesh.github.io")
 * )
 * @OA\Server(url="http://localhost:8000", description="Local")
 * @OA\Server(url="https://task-api-laravel.onrender.com", description="Production")
 * @OA\SecurityScheme(
 *     securityScheme="sanctum",
 *     type="http",
 *     scheme="bearer",
 *     bearerFormat="Token",
 *     description="Enter Sanctum token from /api/login"
 * )
 */

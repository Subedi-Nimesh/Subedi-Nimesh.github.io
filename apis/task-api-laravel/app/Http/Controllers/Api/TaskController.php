<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Task;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * @OA\Tag(name="Tasks", description="Task CRUD operations")
 */
class TaskController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/tasks",
     *     tags={"Tasks"},
     *     summary="List tasks for authenticated user",
     *     security={{"sanctum":{}}},
     *     @OA\Parameter(name="page", in="query", @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Paginated tasks")
     * )
     */
    public function index(Request $request): JsonResponse
    {
        $tasks = Task::with('category')
            ->where('user_id', $request->user()->id)
            ->orderByDesc('created_at')
            ->paginate(15);

        return response()->json($tasks);
    }

    /**
     * @OA\Post(
     *     path="/api/tasks",
     *     tags={"Tasks"},
     *     summary="Create a task",
     *     security={{"sanctum":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"title"},
     *             @OA\Property(property="title", type="string"),
     *             @OA\Property(property="description", type="string"),
     *             @OA\Property(property="category_id", type="integer"),
     *             @OA\Property(property="status", type="string", enum={"pending","in_progress","done"})
     *         )
     *     ),
     *     @OA\Response(response=201, description="Task created")
     * )
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'nullable|exists:categories,id',
            'status' => 'nullable|in:pending,in_progress,done',
        ]);

        $task = Task::create([
            ...$validated,
            'user_id' => $request->user()->id,
            'status' => $validated['status'] ?? 'pending',
        ]);

        return response()->json($task->load('category'), 201);
    }

    /**
     * @OA\Get(path="/api/tasks/{id}", tags={"Tasks"}, summary="Get a task", security={{"sanctum":{}}}, @OA\Response(response=200, description="Task"))
     */
    public function show(Request $request, Task $task): JsonResponse
    {
        $this->authorizeTask($request, $task);
        return response()->json($task->load('category'));
    }

    /**
     * @OA\Put(path="/api/tasks/{id}", tags={"Tasks"}, summary="Update a task", security={{"sanctum":{}}}, @OA\Response(response=200, description="Updated"))
     */
    public function update(Request $request, Task $task): JsonResponse
    {
        $this->authorizeTask($request, $task);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'nullable|exists:categories,id',
            'status' => 'nullable|in:pending,in_progress,done',
        ]);

        $task->update($validated);
        return response()->json($task->load('category'));
    }

    /**
     * @OA\Delete(path="/api/tasks/{id}", tags={"Tasks"}, summary="Delete a task", security={{"sanctum":{}}}, @OA\Response(response=204, description="Deleted"))
     */
    public function destroy(Request $request, Task $task): JsonResponse
    {
        $this->authorizeTask($request, $task);
        $task->delete();
        return response()->json(null, 204);
    }

    private function authorizeTask(Request $request, Task $task): void
    {
        if ($task->user_id !== $request->user()->id) {
            abort(403, 'Unauthorized');
        }
    }
}

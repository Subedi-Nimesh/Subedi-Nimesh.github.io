<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * @OA\Tag(name="Categories", description="Category management")
 */
class CategoryController extends Controller
{
    /**
     * @OA\Get(path="/api/categories", tags={"Categories"}, summary="List categories", security={{"sanctum":{}}}, @OA\Response(response=200, description="Categories"))
     */
    public function index(Request $request): JsonResponse
    {
        $categories = Category::where('user_id', $request->user()->id)
            ->orderBy('name')
            ->get();

        return response()->json(['categories' => $categories]);
    }

    /**
     * @OA\Post(
     *     path="/api/categories",
     *     tags={"Categories"},
     *     summary="Create a category",
     *     security={{"sanctum":{}}},
     *     @OA\RequestBody(required=true, @OA\JsonContent(required={"name"}, @OA\Property(property="name", type="string"), @OA\Property(property="color", type="string"))),
     *     @OA\Response(response=201, description="Created")
     * )
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'color' => 'nullable|string|max:7',
        ]);

        $category = Category::create([
            ...$validated,
            'user_id' => $request->user()->id,
            'color' => $validated['color'] ?? '#14b8a6',
        ]);

        return response()->json($category, 201);
    }
}

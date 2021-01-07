<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Services\PostService;
use Illuminate\Http\Request;

class PostController extends Controller
{
    protected $postService;

    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }

    public function create(PostRequest $request)
    {
        $request->validated();
        $post = $this->postService->create($request);
        return [
            'message' => __('Successfully created the record!'),
            'post' => new PostResource($post),
        ];
    }

    public function getAll(Request $request)
    {
        $result = $this->postService->getAll($request->date);
        return [
            'current_page' => $result->currentPage(),
            'posts' => PostResource::collection($result->items()),
            'page_total' => $result->lastPage(),
        ];
    }
}

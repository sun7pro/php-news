<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Services\PostService;

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
}

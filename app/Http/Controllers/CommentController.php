<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PostService;
use App\Http\Resources\CommentResource;

class CommentController extends Controller
{
    protected $postService;

    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }

    public function create(Request $request)
    {
        $this->postService->createComment($request);
        // $commentCount = $this->postService->getCommentCount($request);
        // $this->postService->updateCommentCount($request->input('postId'), $commentCount);
    }

    public function getAll(Request $request)
    {
        $result = $this->postService->getAllComments($request->input('postId'));
        return [
            'current_page' => $result->currentPage(),
            'comments' => CommentResource::collection($result->items()),
            'page_total' => $result->lastPage(),
        ];
    }
}

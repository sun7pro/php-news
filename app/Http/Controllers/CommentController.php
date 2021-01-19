<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CommentService;
use App\Services\PostService;
use App\Http\Resources\CommentResource;

class CommentController extends Controller
{
    protected $commentService;
    protected $postService;

    public function __construct(CommentService $commentService, PostService $postService)
    {
        $this->commentService = $commentService;
        $this->postService = $postService;
    }

    public function create(Request $request)
    {
        $this->commentService->create($request);
        $commentQuantity = $this->commentService->getCommentQuantity($request);
        $this->postService->updateCommentQuantity($request->input('postId'), $commentQuantity);
    }

    public function getAll(Request $request)
    {
        $result = $this->commentService->getAll($request->input('postId'));
        return [
            'current_page' => $result->currentPage(),
            'comments' => CommentResource::collection($result->items()),
            'page_total' => $result->lastPage(),
        ];
    }
}

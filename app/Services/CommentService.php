<?php

namespace App\Services;

use App\Models\Comment;

class CommentService
{
    public function create($request)
    {
        return Comment::create([
            'user_id' => $request->user()->id,
            'post_id' => $request->input('postId'),
            'content' => $request->input('content'),
        ]);
    }

    public function getAll($postId)
    {
        return Comment::with('user')->where([
            ['post_id', '=', $postId],
        ])->orderBy('created_at', 'desc')->paginate(8);
    }

    public function getCommentQuantity($request)
    {
        return Comment::with('user')->where([
            ['post_id', '=', $request->input('postId')],
        ])->orderBy('created_at', 'desc')->count();
    }
}

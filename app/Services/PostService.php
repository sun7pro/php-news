<?php

namespace App\Services;

use App\Models\Post;
use App\Models\Comment;
use Carbon\Carbon;
use DB;

class PostService
{
    public function create($request)
    {
        return Post::create([
            'link' => $request->input('link', ''),
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'user_id' => $request->user()->id,
        ]);
    }

    public function getAll($dateParams)
    {
        if ($dateParams == 'today') {
            return Post::with('user')
                ->whereDate('created_at', Carbon::today())
                ->orderBy('created_at', 'desc')
                ->paginate(8);
        }
        return Post::with('user')->orderBy('created_at', 'desc')->withSum('votes', 'value')->paginate(8);
    }

    public function retrieve($id)
    {
        return Post::with('user')->where('id', '=', $id)->withSum('votes', 'value')->first();
    }

    public function createComment($request)
    {
        DB::transaction(function () use ($request) {
            Comment::create([
                'user_id' => $request->user()->id,
                'post_id' => $request->input('postId'),
                'content' => $request->input('content'),
            ]);
    
            $commentCount = Comment::where([
                ['post_id', '=', $request->input('postId')],
            ])->count();
    
            Post::where('id', $request->input('postId'))->update([ 'comment_count' => $commentCount ]);
        });
    }

    public function getAllComments($postId)
    {
        return Comment::with('user')->where([
            ['post_id', '=', $postId],
        ])->orderBy('created_at', 'desc')->paginate(8);
    }
}

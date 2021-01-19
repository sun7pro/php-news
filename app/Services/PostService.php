<?php

namespace App\Services;

use App\Models\Post;
use Carbon\Carbon;

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

    public function updateCommentQuantity($id, $number)
    {
        Post::where('id', $id)->update([ 'comment_quantity' => $number ]);
    }
}

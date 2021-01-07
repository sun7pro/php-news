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
            return Post::whereDate('created_at', Carbon::today())->orderBy('created_at', 'desc')->paginate(8);
        }
        return Post::orderBy('created_at', 'desc')->paginate(8);
    }
}

<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use App\Models\Post;

class PostService
{
    public function create($request)
    {
        return Post::create([
            'link' => $request->input('link') ? $request->input('link') : '',
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'user_id' => $request->user() ? $request->user()->id : null,
        ]);
    }
}

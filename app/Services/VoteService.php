<?php

namespace App\Services;

use App\Models\Vote;

class VoteService
{
    public function create($request)
    {
        return Vote::create([
            'user_id' => $request->user()->id,
            'post_id' => $request->input('postId'),
            'value' => $request->input('upvote') ? 1 : -1,
        ]);
    }

    public function retrieve($request)
    {
        $postId = $request->input('postId');
        $userId = $request->user()->id;
        return Vote::where([
            ['user_id', '=', $userId],
            ['post_id', '=', $postId],
        ])->first();
    }

    public function update($request, $vote)
    {
        $vote->update(['value' => $request->input('upvote') ? 1 : -1]);
    }
}

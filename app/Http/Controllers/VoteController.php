<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\VoteService;

class VoteController extends Controller
{
    protected $voteService;

    public function __construct(VoteService $voteService)
    {
        $this->voteService = $voteService;
    }

    public function vote(Request $request)
    {
        $vote = $this->voteService->retrieve($request);
        $vote ? (
            $this->voteService->update($request, $vote)
        ) : (
            $this->voteService->create($request)
        );
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;
use App\Models\Vote;

class PostResource extends JsonResource
{
    public static $wrap = null;

    public function toArray($request)
    {
        $vote = Vote::where([
            ['post_id', '=', $this->id],
        ])->sum('value');

        return [
            'id' => (string)$this->id,
            'title' => (string)$this->title,
            'content' => (string)$this->content,
            'link' => $this->link ? (string)$this->link : '',
            'author' => new UserResource($this->whenLoaded('user')),
            'created_at' => $this->created_at,
            'votes' => $vote,
        ];
    }
}

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
        return [
            'id' => (string)$this->id,
            'title' => (string)$this->title,
            'content' => (string)$this->content,
            'link' => $this->link ? (string)$this->link : '',
            'author' => new UserResource($this->whenLoaded('user')),
            'created_at' => $this->created_at,
            'votes' => $this->votes_sum_value,
        ];
    }
}

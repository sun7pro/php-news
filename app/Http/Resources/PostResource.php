<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\User;
use App\Http\Resources\UserResource;

class PostResource extends JsonResource
{
    public static $wrap = null;

    public function toArray($request)
    {
        $user = User::find($this->user_id);
        return [
            'id' => (string)$this->id,
            'title' => (string)$this->title,
            'content' => (string)$this->content,
            'link' => $this->link ? (string)$this->link : '',
            'author' => new UserResource($user),
            'created_at' => $this->created_at,
        ];
    }
}

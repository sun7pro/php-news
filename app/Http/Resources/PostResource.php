<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
            'user_id' => (string)$this->user_id,
        ];
    }
}

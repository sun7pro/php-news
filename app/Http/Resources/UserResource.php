<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public static $wrap = null;

    public function toArray($request)
    {
        return [
            'message' => 'Successfully created the record!',
            'user' => [
                'id' => (string)$this->id,
                'name' => (string)$this->name,
                'username' => (string)$this->username,
                'email' => (string)$this->email,
                'avatar' => $this->avatar ? (string)$this->avatar : null,
            ],
        ];
    }
}

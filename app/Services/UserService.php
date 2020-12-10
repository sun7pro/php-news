<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

use App\Models\User;

class UserService
{
    public function create($request)
    {
        if ($request->file('avatar')) {
            $uploadAvatarFolder = 'users';
            $avatar = $request->file('avatar');
            $avatarUploadedPath = $avatar->store($uploadAvatarFolder, 'public');
            $uploadedImageResponse = [
            'image_name' => basename($avatarUploadedPath),
            'image_url' => Storage::disk('public')->url($avatarUploadedPath),
            ];
        }

        return User::create([
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'avatar' => $request->file('avatar') ? basename($avatarUploadedPath) : null,
        ]);
    }
};

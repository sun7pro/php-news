<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserService
{
    public function create($request)
    {
        $avatarUploadedPath = null;
        if ($request->file('avatar')) {
            $avatarUploadedPath = $request->file('avatar')->store('users', 'public');
        }

        return User::create([
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'avatar' => $avatarUploadedPath ? 'users/' . basename($avatarUploadedPath) : null,
        ]);
    }
}

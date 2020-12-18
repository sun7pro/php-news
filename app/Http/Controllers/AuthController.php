<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $validator = $request->validated();

        $field = filter_var($request->input('usernameOrEmail'), FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        $request->merge([$field => $request->input('usernameOrEmail')]);
        $credentials = $request->only($field, 'password');

        if (Auth::attempt($credentials)) {
            return response([
                'message' => __('Successfully logged in.'),
                'isLoginSuccess' => Auth::attempt($credentials),
            ], 200);
        } else {
            return response([
                'message' => __('Incorrectly logged in.'),
                'isLoginSuccess' => Auth::attempt($credentials),
            ], 403);
        }
    }
}

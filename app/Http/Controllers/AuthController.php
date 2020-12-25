<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $validator = $request->validated();

        $usernameOrEmail = $request->input('usernameOrEmail');
        $field = filter_var($usernameOrEmail, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        $credentials = [$field => $usernameOrEmail, 'password' => $request->input('password')];

        if (Auth::attempt($credentials)) {
            return response([
                'message' => __('Successfully logged in.'),
                'isSignedIn' => true,
            ], 200);
        }
        return response([
            'message' => __('Incorrectly logged in.'),
            'isSignedIn' => false,
        ], 403);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
    }
}

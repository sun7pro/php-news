<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\UserResource;
use Validator;
use App\Models\User;
use App\Services\UserService;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function register(RegisterRequest $request)
    {
        $validator = $request->validated();
        $user = $this->userService->create($request);
        return [
            'message' => __('Successfully created the record!'),
            'user' => new UserResource($user),
        ];
    }

    public function profile(Request $request)
    {
        return [
            'message' => __('Successfully got the profile.'),
            'user' => new UserResource($request->user()),
        ];
    }
}

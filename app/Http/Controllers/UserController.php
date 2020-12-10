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

    /**
     * Register
     *
     * @param  [string] name
     * @param  [string] username
     * @param  [string] email
     * @param  [string] password
     * @param  [file] avatar
     * @param  [string] password_confirmation
     * @return [json] message ft record
     */

    public function register(RegisterRequest $request)
    {
        $validator = $request->validated();
        $user = $this->userService->create($request);

        UserResource::withoutWrapping();
        return new UserResource($user);
    }
}

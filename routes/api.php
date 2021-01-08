<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;

Route::group([
    'prefix' => 'v1',
], function () {
    Route::post('register', [UserController::class, 'register']);
    Route::middleware('auth:sanctum')->get('profile', [UserController::class, 'profile']);

    Route::middleware('auth:sanctum')->post('posts', [PostController::class, 'create']);
    Route::get('posts', [PostController::class, 'getAll']);
});

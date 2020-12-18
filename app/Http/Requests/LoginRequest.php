<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'usernameOrEmail' => ['required', 'string', 'min:1', 'max:50' ],
            'password' => ['required', 'string', 'min:0', 'max:100'],
        ];
    }
}

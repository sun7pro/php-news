<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => ['required', 'string', 'min:1', 'max:100'],
            'username' => [
                'required',
                'string',
                Rule::unique('users'),
                'min:1',
                'max:50',
                'regex:/([A-Za-z0-9\-\_]+)/',
            ],
            'email' => ['required', 'string', 'email', Rule::unique('users')],
            'password' => ['required', 'string', 'confirmed', 'min:8', 'max:100'],
            'avatar' => ['nullable', 'image:jpeg,png,jpg,gif,svg', 'max:1024'],
        ];
    }
}

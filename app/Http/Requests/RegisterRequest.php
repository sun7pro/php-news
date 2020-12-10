<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:1|max:100',
            'username' => 'required|string|unique:users|min:1|max:50|regex:/([A-Za-z0-9\-\_]+)/',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed|min:8|max:128',
            'avatar' => 'nullable|image:jpeg,png,jpg,gif,svg|max:1024',
        ];
    }
}

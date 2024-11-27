<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function sign_up(SignupRequest $request)
    {
        $data = $request->validated();
        /** @var User $user */
        $user = User::create([
            'last_name' => $data['last_name'],
            'first_name' => $data['first_name'],
            'middle_name' => $data['middle_name'],
            'login' => $data['login'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }

    // public function login(LoginRequest $request)
    // {
    //     $credentials = $request->validated();
    //     if(!Auth::attempt($credentials)){
    //         return response([
    //             'message' => 'Login or password are incorrect, try again'
    //         ]);
    //     }

    //     $user = Auth::user();
    // }
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
    
        // Проверка учетных данных и получение токена
        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid login or password'], 401);
        }
    
        // Получение текущего пользователя
        $user = JWTAuth::user();
    
        return response()->json([
            'user' => $user,
            'token' => $token,
        ]);
    }
    
    public function logout()
    {
        // Удаление токена
        JWTAuth::invalidate(JWTAuth::getToken());

        return response()->json(['message' => 'Logged out successfully']);
    }
}

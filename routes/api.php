<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::post('/signup', [AuthController::class, 'sign_up']);

// Логин
Route::post('/login', [AuthController::class, 'login']);

// Логаут
Route::post('/logout', [AuthController::class, 'logout']);
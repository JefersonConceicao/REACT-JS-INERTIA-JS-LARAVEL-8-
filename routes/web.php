<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\UsersController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'users'], function(){
    Route::GET('/', [HomeController::class, 'getHomeView']);
    Route::GET('/create', [UsersController::class, 'create']);
    Route::POST('/store', [UsersController::class, 'store']);
});

Route::group(['prefix' => 'roles'], function(){
    Route::GET('/', [RolesController::class, 'index']);
});


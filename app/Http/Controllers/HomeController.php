<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class HomeController extends Controller
{
    public function getHomeView(){
        $user = new User;

        return Inertia::render('Users/Init', [
            'data' => $user->getUsers()
        ]);
    }
}

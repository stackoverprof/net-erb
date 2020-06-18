<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function home()
    {
      $projects = Project::all();
      return view('index', compact(['projects']));
    }
}

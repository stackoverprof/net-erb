<?php

namespace App\Http\Controllers;

use App\Project;
use App\Rankscore;
use DB;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function home()
    {      
      $rankscores = Rankscore::orderBy('food', 'DESC')
                        ->orderBy('rainfall', 'ASC')
                        ->take(10)
                        ->get();
      return view('index', compact(['rankscores']));
    }
    public function save(Request $req )
    {
      $scored = new Rankscore;
      $scored->nickname = $req['nickname'];
      $scored->rainfall = $req['rainfall'];
      $scored->food = $req['food'];
      $scored->save();
      
      $rankscores = Rankscore::orderBy('food', 'DESC')
                        ->orderBy('rainfall', 'ASC')
                        ->take(10)
                        ->get();


      return view('index', compact(['rankscores']));
    }
}
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Rankscores extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rankscores', function (Blueprint $table) {
        $table->id();
        $table->char('nickname', 15);
        $table->integer('rainfall');
        $table->integer('food');
        $table->timestamps(0);


        });

    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

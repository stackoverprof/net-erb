@extends('layout/main')

@section('maincontent')
    <div class="supertitle">
        <div>
            <h1><strong>ERRBINT</strong></h1>
            <h3 class="shadowertitle"><strong>ERRBINT</strong></h3>
        </div>
        <div class="subs">
            <div class="balancer" id="balancer"></div>
            <h2 class="subtitle" id="subtitle">FULLSTACK DEVELOPER</h2>
            <button onclick="newGame()" id="buttonnewgame" class="buttonnewgame"> PLAY AGAIN</button>
        </div>
    </div>
    <canvas id="canvas"></canvas>
    <div class="chatbox" id="chatbox">
        <img src="{{asset('img/chatbox.svg')}}"  class="chatboximg" alt="Avoid The Rain Bro!">
        <p class="textchat"> <strong>AVOID THE RAIN BRO!</strong> </p>
    </div>
    <div class="ohnobox" id="ohnobox">
        <img src="{{asset('img/ohnobox.svg')}}"  class="ohnoboximg" alt="Avoid The Rain Bro!">
        <p class="textnochat"> <strong>OH NO!</strong> </p>
    </div>
    <div class="instruction" id="instruction">
        <p class="instructp">Use arrow key to move the object</p>
    </div>
    <div class="navbot" id="navbot"></div>

@endsection

@push('scripts')
    <script src="{{asset('js/gamescript.js')}}"></script>
@endpush
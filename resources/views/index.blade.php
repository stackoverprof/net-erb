@extends('layout/main')

@section('maincontent')
    <div class="supertitle">
        <div>
            <h1><strong>ERRBINT</strong></h1>
            <h3 class="shadowertitle"><strong>ERRBINT</strong></h3>
        </div>
        <div class="subs">
            <div class="balancer" id="balancer"></div>
            <h2 class="subtitle" id="subtitle">A FULLSTACK DEVELOPER</h2>
            <button onclick="newGame()" id="buttonnewgame" class="buttonnewgame"> PLAY AGAIN</button>
        </div>
    </div>
    

    <div class="rainboxgame">
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
        <div class="scoring" id="scoring">
            <p class="scorp" id="scorp">Score : 0</p>
            <p class="endfoodplive" id="endfoodp">Food : 0</p>
        </div>
        <div class="scorlive" id="scorlive">
            <p class="scorplive" id="scorp"></p>
            <p class="foodplive" id="foodp"></p>
        </div>
    </div>


    <div class="navbot" id="navbot">
        <div class="dropdown">
            <div>
                <div class="burger"></div>
                <div class="burger"></div>
                <div class="burger"></div>
            </div>
            <div>
                <h2 class="h2navigation">NAVIGATION</h2>
            </div>
        </div>
        <div class="">
            <a class="linktoscroll" href="">Profile</a>
            <a class="linktoscroll" href="">Abilities</a>
            <a class="linktoscroll" href="">Projects</a>
            <a class="linktoscroll" href="">Experiences</a>
        </div>
        
    </div>

    <div class="in-body">
        <div class="jumbo">
            <div>
                <h4 class="h4good">GOOD MORNING</h4>
                <p class="pintro">Hi, there. Let me introduce my self. I am<span class="weight400 pintro">R Bintang Bagus Putra Angkasa.</span> Shortly, I am someone coming from the design world, since i was just a kid. <br>
But then I know programming, I love it much from the backend to the design. I learned PHP at first but now JavaScript is my main weapon in the warfare.</p>
            </div>
            <img src="{{asset('img/profpict.png')}}" class="profpict" alt="profile picture">

        </div>









    </div>

@endsection

@push('scripts')
    <script src="{{asset('js/gamescript.js')}}"></script>
@endpush
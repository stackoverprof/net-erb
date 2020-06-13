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
        <!-- <div class="vantadiv" id="vantadiv"></div> -->
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
        <div class="jumbo sideclear">
            <div>
                <h4 class="h4good">GOOD MORNING</h4>
                <p class="pintro">Hi, there. Let me introduce my self. I am<span class="weight400 pintro">R Bintang Bagus Putra Angkasa.</span> Shortly, I am someone coming from the design world, since i was just a kid.<br>But then I know programming and love it much from the backend to the design. I learned PHP at first but now JavaScript is my main weapon in the warfare.</p>
            </div>
            <div>
                <img src="{{asset('img/profpict.png')}}" class="profpict" alt="profile picture">
                <div class="nospace">
                    <div class="orangebox">
                        <h2 class="nickname">ERRBINT</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        <div class="noheight">
            <div class="noheight"><div class="blackout" id="blackout"></div></div>
            <div class="putmiddle">
                <h4 class="h4abilities">A&emsp;B&emsp;I&emsp;L&emsp;I&emsp;T&emsp;I&emsp;E&emsp;S</h4>
            </div>
            <div class="noheight"><div class="gray bc55" id="gray1"></div></div>
            <div class="noheight"><div class="gray bc99" id="gray2"></div></div>
            <div class="noheight"><div class="gray bcC7" id="gray3"></div></div>
            <div class="noheight"><div class="gray bcEB" id="gray4"></div></div>
            <div class="noheight"><div class="gray bcFF" id="gray5"></div></div>
        </div>

        <div class="abilities sideclear">
            <div class="container row">
                <div class="col-8">
                    <div class="cardright">
                        <div class="skillcard">
                            
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <p class="pnutshell mb-4">In A Nutshell. <span class="fontblack">I am A</span></p>
                    <div class="middlepart">
                        <img src="{{asset('img/jslogo.svg')}}" alt="" class="jslogo">
                        <p class="pnutshell jsfull"><span class="fontblack">JavaScript <br>FullStack </span><br>Developer </p>
                    </div>
                    <div class="storyskill">
                        <p class="para">When I was younger I used to be a graphic designer wanna-be and also learned a little bit kind of animation. But then, since in high school I changed my mind to learn to build web applications.</p>
                        <p class="para">And here I am today, a Full Stack Web Developer with a specialty in <strong>MERN Stack</strong> and <strong>LaraVue.</strong> Also, keep in mind, <br>UI design is what I do too as a kind of <br>hobby and I love it.</p>
                    </div>
                </div>

            </div>
        </div>















@endsection

@push('scripts')
    <script src="{{asset('js/gamescript.js')}}"></script>
    <script src="{{asset('js/interactive.js')}}"></script>
    <!-- <script src="{{asset('js/vanta/three.r95.min.js')}}"></script>
    <script src="{{asset('js/vanta/vanta.waves.min.js')}}"></script>
    <script>
    VANTA.WAVES({
    el: ".vantadiv",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xc0c0c0,
    shininess: 66.00,
    waveHeight: 6.00
    })
    </script> -->
@endpush
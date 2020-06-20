@extends('layout/main')

@section('maincontent')
    <div class="loading" id="loading">
        <div class="spinner" id="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>


    <div class="noheight deepbehind">
        <h1><strong>ERRBINT</strong></h1>
        <h2 class="shadowertitle"><strong>ERRBINT</strong></h3>
        <h3 class="shadowertitle"><strong>ERRBINT</strong></h3>
    </div>


    
    <div class="rainboxgame">
        <div class="supertitle" id="supertitle">
            <div class="divtitle">
                <div class="noheight">
                    <img src="{{asset('img/errbintdimm.svg')}}" class="errbintdimm" id="errbintdimm" alt="errbint">
                </div>
                <div class="noheight">
                    <img src="{{asset('img/errbint.svg')}}" class="errbintorg" id="errbintorg" alt="errbint">
                </div>
            </div>
            <div class="subs">
                <div class="balancer" id="balancer"></div>
                <h2 class="subtitle" id="subtitle">A FULLSTACK DEVELOPER</h2>
                <button onclick="newGame()" id="buttonnewgame" class="buttonnewgame"> PLAY AGAIN</button>
            </div>
        </div>
        
        <!-- <div class="vantadiv" id="vantadiv"></div> -->
        <canvas id="canvas" class="canvasrainbox"></canvas>
        <div class="chatbox" id="chatbox">
            <img src="{{asset('img/chatbox.svg')}}"  class="chatboximg" alt="Avoid The Rain Bro!">
            <p class="textchat"> <strong>AVOID THE RAINBOX!</strong> </p>
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
            <p class="foodplive" id="foodp"></p>
            <p class="scorplive" id="scorp"></p>
        </div>
        <div class="backgroundgame">
            <img src="{{asset('img/light/et.svg')}}" alt="" class="lights" id="et">
            <img src="{{asset('img/light/nr.svg')}}" alt="" class="lights" id="nr">
            <img src="{{asset('img/light/bri.svg')}}" alt="" class="lights" id="bri">
            <img src="{{asset('img/bg3d.png')}}" alt="" class="lightsbg" id="lightsbg">
        </div>
    </div>

    <div class="scrollcontent" id="scrollcontent">
        <div class="navbot" id="navbot">
            <div class="dropdown">
                <div id="hamburgerid">
                    <div class="burger"></div>
                    <div class="burger"></div>
                    <div class="burger"></div>
                </div>
                <div>
                    <h2 class="h2navigation" id="h2navigation">NAVIGATION</h2>
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
            <div class="interactivebg">
            <img src="{{asset('img/particle/3.svg')}}" alt="" class="particle">
            <img src="{{asset('img/particle/2.svg')}}" alt="" class="particle">
            <img src="{{asset('img/particle/1.svg')}}" alt="" class="particle">
            <!-- <div>
                <img src="{{asset('img/profpict.svg')}}" class="profpict" alt="profile picture">
                div class="nospace">
                    <div class="orangebox">
                        <h2 class="nickname">ERRBINT</h2>
                    </div>
            </div> -->
            </div>
            <div class="jumbo sideclear">
                <div>
                    <h4 class="h4good">GOOD</h4>
                    <h4 class="h4good" id="h4good">DAY</h4>
                    <div class="closo"></div>
                    <!-- <p class="pintro">Hi, there. Little intro to my self. It's me<span class="weight400 pintro">R Bintang Bagus Putra Angkasa.</span> You can call me erbin or bintang <br> for short. Currently living in Semarang, ID.<br>I do web development n' love it much from the backend <br>to the design. Learned PHP at first but now JavaScript <br>is my main weapon in the warfare.</p> -->
                </div>
            </div>
        </div>
        
        
        
        <div class="noheight">
            <div class="noheight"><div class="blackout" id="blackout"></div></div>
            <div class="noheight"><div class="gray bc55" id="gray1"></div></div>
            <div class="noheight"><div class="gray bc99" id="gray2"></div></div>
            <div class="noheight"><div class="gray bcC7" id="gray3"></div></div>
            <div class="noheight"><div class="gray bcEB" id="gray4"></div></div>
        </div>
        
    </div>
        
        


@endsection

@push('scripts')
<script src="{{asset('js/gamescript.js')}}"></script>
<!-- <script src="{{asset('js/pacmanscript.js')}}"></script> -->
<script src="{{asset('js/interactive.js')}}"></script>
<script src="{{asset('js/effect11.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js">PROJECTS</script>
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
    <script>  
        var manyfep = <?= count($projects) ?>;
        var titles = [];
        var subtitles = [];
        // function async gettitles(){
        <?php for ($i=0; $i < count($projects); $i++) : ?>
        titles[<?=$i?>] = "<?= $projects[$i]['title']?>&ensp;|" ;
        subtitles[<?=$i?>] = "<?= $projects[$i]['subtitle']?>" ;
        <?php endfor;?>
        //    setTimeout(() => {
               
        xdoc('projecttitle').innerHTML = titles[0];
        xdoc('projectsubtitle').innerHTML = subtitles[0];
            // }, 2000);
        // }
        // gettitles();
        // alert(projects);
    </script>
@endpush
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
        <div class="blurred" id="blurred"></div>
        <div class="rankcontainer" id="rankcontainer">
            <div class="ranklist">
            <?php foreach($rankscores as $rsc): ?>
                <div class="eachrank">
                    <p class="name"><?= $rsc['nickname'] ?></p>
                    <div class="disend">
                        <p class="rankscore"><?= $rsc['rainfall'] ?></p>
                        <p class="rankfood"><?= $rsc['food'] ?></p>
                    </div>
                </div>
                <div class="newrank">
                    <p class="name">YOU</p>
                    <div class="disend">
                        <p class="rankscore newrain"></p>
                        <p class="rankfood newfood"></p>
                    </div>
                </div>                     
            <?php endforeach; ?>
                <div class="saveyour">
                <!-- <p class="savep">Enter a Nickname</p> -->
                <div class="eachrank columned">
                    <div class="eachrank">
                        <p class="name awesome">Awesome!</p>
                        <div class="disend">
                            <p class="rankscore" id="gotrain"></p>
                            <p class="rankfood" id="gotfood"></p>
                        </div>
                    </div>
                    <p class="rankedas">#42</p>
                </div>        
                <form class="formsave" action="/" method="post">
                    @csrf
                    <input class="playername" type="text" name="nickname" id="nickname" placeholder="Enter a Nickname">
                    <input type="hidden" readonly id="sendrain" name="rainfall">
                    <input type="hidden" readonly id="sendfood" name="food">
                    <button type="submit" id="btnsend" class="btnsend" onclick="savescore(this, event)">SAVE SCORE</button>
                </form>
                </div>
            </div>
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
                <a class="linktoscroll" id="gotoprofile" href="">Profile</a>
                <a class="linktoscroll" href="">Abilities</a>
                <a class="linktoscroll" href="">Projects</a>
                <a class="linktoscroll" href="">Experiences</a>
            </div>
            
        </div>
        
        <div class="in-body">
            <div class="interactivebg">
                <!-- <div class="orgstrip"></div> -->
            <img src="{{asset('img/particle/3.svg')}}" alt="" class="particle" id="par3">
            <img src="{{asset('img/particle/2.svg')}}" alt="" class="particle" id="par2">
            <img src="{{asset('img/particle/1.svg')}}" alt="" class="particle" id="par1">
            </div>
            <div class="jumbo sideclear">
                <div class="divgood">
                    <h4 class="h4good">GOOD</h4>
                    <h4 class="h4good" id="h4good">DAY</h4>
                    <div class="closo"></div>
                </div>
                <div>
                    <div class="avaline" id="avaline">
                    <div id="linemove">
                        <img src="{{asset('img/bgline.svg')}}" alt="" class="profpictline avaline" id="runline">
                    </div>
                    <img src="{{asset('img/ava.svg')}}" alt="" class="profpictline" id="avamove">
                    </div>
                    <!-- <div class="nospace"> -->
                        <div class="orangebox">
                            <h2 class="nickname">ERRBINT</h2>
                        </div>
                    <!-- </div> -->
                </div>
            </div>
            <img src="{{asset('img/circledtext.svg')}}" alt="" class="circledtext" id="circledtext">
        </div>
        
        
        
        <div class="gradient">
            <div class="movegrad"><div class="blackout" id="blackout"></div></div>
            <div class="movegrad"><div class="gray bc55" id="gray1"></div></div>
            <div class="movegrad"><div class="gray bc99" id="gray2"></div></div>
            <div class="movegrad"><div class="gray bcC7" id="gray3"></div></div>
            <div class="movegrad"><div class="gray bcEB" id="gray4"></div></div>
        </div>

        <div class="bottomer">
            <div class="paraintro">
                <p class="pparaintro">
                    Hi, Lil’ intro to me, i am R.Bintang Bagus Putra Angkasa. Just a young ordinary Semarang-Yogyakarta Citizen that do web development and design.
                </p>
            </div>
            <div class="gotoability">
                <p class="goabilityp">ability</p>
                <img src="{{asset('img/gotoarrow.svg')}}" alt="" class="gotoarrow">
            </div>
        </div>

        <div class="noheight">
            <div class="sideintro">
                <div class="introline"></div>
                <p class="sideintrop">Intro</p>
            </div>
        </div>

        <div class="noheight">
            <img src="{{asset('img/particle/3.svg')}}" alt="" class="particle2" style="filter: opacity(0.2); transform: rotate(290deg)" id="apar3">
            <img src="{{asset('img/particle/2.svg')}}" alt="" class="particle2" style="filter: opacity(0.2); transform: rotate(290deg)" id="apar2">
            <img src="{{asset('img/particle/1.svg')}}" alt="" class="particle2" style="filter: opacity(0.2); transform: rotate(290deg)" id="apar1">
            
        </div>
        
    </div>
        
        


@endsection

@push('scripts')
<script>
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
</script>
<script src="{{asset('js/gamescript.js')}}"></script>
<script src="{{asset('js/save.js')}}"></script>
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
    var ranked = <?= $rankscores ?>;
    var rankz = [];
    for (let i = 0; i < 10; i++) {        
        rankz[i] =  [ranked[i]['food'],ranked[i]['rainfall']];
    }
        // setTimeout(() => {
            
        // alert(rankscores);
        // }, 2000);
        // var manyfep =  count($projects) ?>;
        // var titles = [];
        // var subtitles = [];
        // // function async gettitles(){
        //  for ($i=0; $i < count($projects); $i++) : ?>
        // titles[$i?>] = " $projects[$i]['title']?>&ensp;|" ;
        // subtitles[$i?>] = " $projects[$i]['subtitle']?>" ;
        //  endfor;?>
        //    setTimeout(() => {
            //    alert(titles[0]);
               
        // xdoc('projecttitle').innerHTML = titles[0];
        // xdoc('projectsubtitle').innerHTML = subtitles[0];
            // }, 2000);
        // }
        // gettitles();
        // alert(projects);
    </script>
@endpush
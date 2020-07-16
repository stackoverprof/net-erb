@extends('layout/main')

@section('maincontent')
    <div class="loading" id="loading">
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>
    
    <div class="supertitle">
        <div class="divtitle">
            <!-- <h1><strong>ERRBINT</strong></h1> -->
            <!-- <h3 class="shadowertitle"><strong>ERRBINT</strong></h3> -->
            <img src="{{asset('img/errbint.svg')}}" alt="">
        </div>
        <div class="subs">
            <div class="balancer" id="balancer"></div>
            <h2 class="subtitle" id="subtitle">A FULLSTACK DEVELOPER</h2>
            <button onclick="newGame()" id="buttonnewgame" class="buttonnewgame"> PLAY AGAIN</button>
        </div>
    </div>
    

    <div class="rainboxgame">
        <!-- <div class="vantadiv" id="vantadiv"></div> -->
        <canvas id="canvas" class="canvasrainbox"></canvas>
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
            <p class="foodplive" id="foodp"></p>
            <p class="scorplive" id="scorp"></p>
        </div>
    </div>


    <div class="navbot" id="navbotbehind">
        <div class="dropdown">
            <div id="hamburgerid">
                <div class="burger"></div>
                <div class="burger"></div>
                <div class="burger"></div>
            </div>
            <div>
                <h2 class="h2navigation" id="h2navigationbehind">NAVIGATION</h2>
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
                <h4 class="h4good" id="h4good"></h4>
                <p class="pintro">Hi, there. Little intro to my self. It's me<span class="weight400 pintro">R Bintang Bagus Putra Angkasa.</span> You can call me erbin or bintang <br> for short. Currently living in Semarang, ID.<br>I do web development n' love it much from the backend <br>to the design. I learned PHP at first but now JavaScript <br>is my main weapon in the warfare.</p>
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
        <div class="noheight"><div class="gray bc55" id="gray1"></div></div>
        <div class="noheight"><div class="gray bc99" id="gray2"></div></div>
        <div class="noheight"><div class="gray bcC7" id="gray3"></div></div>
        <div class="noheight"><div class="gray bcEB" id="gray4"></div></div>
    </div>

    <div class="abilities sideclear">
        <div class="container row">
            <div class="col-8">
                <div class="cardright" id="cardmove" onmouseover="flippedOnce()">
                    <div class="card">
                        <div class="contentcard">
                            <div class="front">
                                <div class="stack">
                                    <p class="stackname mernup">MERN</p>
                                    <p class="stackname laravueup">LARAVUE</p>
                                </div>
                                <div class="iconic">
                                    <div class="subgroup">
                                        <div class="withname">
                                            <div class="centerflex">
                                                <img src="{{asset('img/tech/icon1.svg')}}" alt="" class="iconeach">
                                            </div>
                                            <p class="techname">MongoDB</p>    
                                        </div>
                                        <div class="withname">
                                            <div class="centerflex">
                                                <img src="{{asset('img/tech/icon2.svg')}}" alt="" class="iconeach">                                      
                                            </div>
                                            <p class="techname">Express</p>    
                                        </div>
                                        <div class="withname">
                                            <div class="centerflex">
                                                <img src="{{asset('img/tech/icon3.svg')}}" alt="" class="iconeach">                                      
                                            </div>
                                            <p class="techname">React</p>    
                                        </div>
                                        <div class="withname">
                                            <div class="centerflex">
                                                <img src="{{asset('img/tech/icon4.svg')}}" alt="" class="iconeach">                                      
                                            </div>
                                            <p class="techname">Node</p>    
                                        </div>
                                    </div>
                                    <div class="subgroup">
                                        <div class="withname">
                                            <div class="centerflex">
                                                <img src="{{asset('img/tech/icon5.svg')}}" alt="" class="iconeach">
                                            </div>
                                            <p class="techname">Laravel</p>    
                                        </div>
                                        <div class="withname">
                                            <div class="centerflex">
                                                <img src="{{asset('img/tech/icon6.svg')}}" alt="" class="iconeach">                                      
                                            </div>
                                            <p class="techname">LaraMix</p>    
                                        </div>
                                        <div class="withname">
                                            <div class="centerflex">
                                                <img src="{{asset('img/tech/icon7.svg')}}" alt="" class="iconeach">                                      
                                            </div>
                                            <p class="techname">Vue</p>    
                                        </div>
                                        <div class="withname">
                                            <div class="centerflex">
                                                <img src="{{asset('img/tech/icon8.svg')}}" alt="" class="iconeach">                                      
                                            </div>
                                            <p class="techname">MySQL</p>    
                                        </div>
                                    </div>
                                    <div class="other">
                                        <div class="subother">
                                            <p class="othereach">Figma</p>
                                            <p class="othereach">TypeScript</p>
                                            <p class="othereach">Deno</p>
                                            <p class="othereach">Docker</p>
                                        </div>
                                        <div class="subother">
                                            <p class="othereach">Firebase</p>
                                            <p class="othereach">GitHub</p>
                                            <p class="othereach noborder">Many more...</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="back">
                                <div class="letmetell">
                                    <p class="pletmetell"><span class="makeorange">Little</span> Story</p>
                                </div>
                                <div class="storyskill">
                                    <p class="para">When I was younger I used to be a graphic designer wanna-be kid and also learned a little bit kind of interactive animation. But then, since in high school I changed my mind to learn to build web applications.</p>
                                    <p class="para">And here I am today, a Full Stack Web Developer with a specialty in <strong>MERN Stack</strong> and <strong>LaraVue.</strong> Also, keep in mind, <br>UI design is what I do too as a kind of <br>hobby and I love it.</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div class="col-4 flexbetween2">
                <div>
                    <p class="pnutshell mb-4">In A Nutshell. <span class="fontblack">I am A</span></p>
                    <div class="middlepart">
                        <img src="{{asset('img/jslogo.svg')}}" alt="" class="jslogo">
                        <p class="pjsfull jsfull"><span class="fontblack">JavaScript <br>FullStack </span><br>Developer </p>
                    </div>
                </div>
                <p class="heytry" id="heytry"><i class="fa fa-arrow-left"aria-hidden="true"></i>&ensp; Hey, try flip this card</p>
                <div class="tellmediv">
                    <div class="imgplane">
                        <img class="imgtellme" id="imgtellme" src="{{asset('img/planebtn.svg')}}" alt="button">
                    </div>
                    <p class="ptellmewhat">TELL ME WHAT <br> YOU NEED</p>
                </div>
            </div>

        </div>
    </div>
    <div class="noheight">
        <canvas id="canvaspacman" class="canvaspacman"></canvas>
    </div>

<p class="ml11">
  <span class="text-wrapper">
    <span class="line line1"></span>
    <span class="letters">PROJECTS</span>
  </span>
</p>


<!-- Photo Grid -->
<!-- <div class="rowp"> 
    <div class="columnp">
        <img class="imgp" src="https://cdn.dribbble.com/users/4861048/screenshots/11370422/media/e7f08d137c72a2debeb582b172015c62.png">
        <img class="imgp" src="http://www.tooplate.com/templates/2094_mason/img/gallery-img-11-03.jpg">
        <img class="imgp" src="https://instagram.fsrg3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/100951085_1147486578955803_2182850810246446319_n.jpg?_nc_ht=instagram.fsrg3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=lbLyT_AEvRwAX_LAasK&oh=38ca3b235f0afe87562a26d973f2a638&oe=5F0FC350">
        <img class="imgp" src="http://www.tooplate.com/templates/2094_mason/img/gallery-img-11-06.jpg">
        <img class="imgp" src="http://www.tooplate.com/templates/2094_mason/img/gallery-img-11-07.jpg">
    </div>
    <div class="columnp">
        <img class="imgp" src="https://cdn.dribbble.com/users/4861048/screenshots/11205467/media/b28466d7aabddc889166689911ef8e60.png">
        <img class="imgp" src="http://www.tooplate.com/templates/2094_mason/img/gallery-img-12-02.jpg">
        <img class="imgp" src="http://www.tooplate.com/templates/2094_mason/img/gallery-img-12-03.jpg">
        <img class="imgp" src="http://www.tooplate.com/templates/2094_mason/img/gallery-img-23-05.jpg">
    </div>  
    <div class="columnp">
        <img class="imgp" src="https://i.imgur.com/zQVcmde.png">
        <img class="imgp" src="http://www.tooplate.com/templates/2094_mason/img/gallery-img-23-03.jpg">
        <img class="imgp" src="http://www.tooplate.com/templates/2094_mason/img/gallery-img-12-04.jpg">
    </div>
    <div class="columnp">
        <img class="imgp" src="https://cdn.dribbble.com/users/4861048/screenshots/11390588/media/f21b7a9c3fa8dfb1dd080008046dee96.png">
        <img class="imgp" src="http://www.tooplate.com/templates/2094_mason/img/gallery-img-23-02.jpg">
        <img class="imgp" src="http://www.tooplate.com/templates/2094_mason/img/gallery-img-11-05.jpg">
        <img class="imgp" src="http://www.tooplate.com/templates/2094_mason/img/gallery-img-23-04.jpg">
    </div>
</div> -->










@endsection

@push('scripts')
<script src="{{asset('js/gamescript.js')}}"></script>
<script src="{{asset('js/pacmanscript.js')}}"></script>
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
@endpush
window.addEventListener('load', function () {
  xdoc("loading").style.display = "none";
})

setInterval(() => {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  
  var greeting = "GOOD";
  if (0 <= hours && hours < 12)  greeting += " MORNING";
  else if (12 <= hours && hours < 17) greeting += " AFTERNOON";  
  else if (17 <= hours && hours < 22) greeting += " EVENING";  
  else if (22 <= hours && hours < 24)  greeting += " NIGHT";
  
  xdoc("h4good").innerHTML = greeting; 
}, 1000);


var pureScreenWidth = $(window).width();
var pureScreenHeight = $(window).height();
var height = $(window).height()-400;
xdoc("blackout").style.height = height + "px";
xdoc("gray1").style.height = height + "px";
xdoc("gray2").style.height = height + "px";
xdoc("gray3").style.height = height + "px";
xdoc("gray4").style.height = height + "px";

setInterval(()=>{
  var scrolled = window.pageYOffset;

  if (scrolled >= 300 + height) {
    xdoc('blackout').style.transform = `translateY(${0*28-height}px)`;
    xdoc('gray1').style.transform = `translateY(${1*28-height}px)`;
    xdoc('gray2').style.transform = `translateY(${2*28-height}px)`;
    xdoc('gray3').style.transform = `translateY(${3*28-height}px)`;
    xdoc('gray4').style.transform = `translateY(${4*28-height}px)`;
  }else if(scrolled < 400) {
    xdoc('blackout').style.transform = `unset`;
    xdoc('gray1').style.transform = `unset`;
    xdoc('gray2').style.transform = `unset`;
    xdoc('gray3').style.transform = `unset`;
    xdoc('gray4').style.transform = `unset`;
    
  }
},100);



//STICKY NAVBAR
var dontChangeFirst = true;
var toggleERRBINT = false;
setInterval(()=>{
    
  var scrolled = window.pageYOffset;
  // console.log(scrolled);
  
  if (scrolled >= pureScreenHeight - 60 ) {
    dontChangeFirst = false;
    xdoc('navbotmain').style.display = "unset";
    xdoc('h2navigationbehind').innerHTML = "&ensp;&nbsp;ERRBINT";
    toggleERRBINT = true;
    if(xdoc('h2navigation').innerHTML == "NAVIGATION"){
      setTimeout(() => {
        xdoc('h2navigation').style.transform = "translateX(200px)";
        setTimeout(() => {
          xdoc('h2navigation').innerHTML = "&ensp;&nbsp;ERRBINT";
          xdoc('h2navigation').style.transform = "unset";
        }, 1000);
      }, 10);
    }
  } else if(scrolled < pureScreenHeight - 60){
    xdoc('navbotmain').style.display = "none";
    if(xdoc('h2navigation').innerHTML == "&ensp;&nbsp;ERRBINT"){
      setTimeout(() => {
        xdoc('h2navigation').style.transform = "translateX(200px)";
        setTimeout(() => {
          xdoc('h2navigation').innerHTML = "NAVIGATION";
          xdoc('h2navigation').style.transform = "unset";
        }, 1000);  
      }, 10);
    }
  }


  if (scrolled < pureScreenHeight - 60 && !dontChangeFirst) {
    if(toggleERRBINT){
      xdoc('h2navigation').innerHTML = "NAVIGATION";
      toggleERRBINT = false;
      function changeTextBehind(){
        xdoc('h2navigationbehind').style.transform = "translateX(200px)";
        function changeTextBehindE(){
          xdoc('h2navigationbehind').innerHTML = "NAVIGATION";
          xdoc('h2navigationbehind').style.transform = "unset";
        }setTimeout(changeTextBehindE, 1000);
      }setTimeout(changeTextBehind, 10);
    }
  }
},10)

//CARD MOVEMENT
xdoc('cardmove').style.transform = `translateX(-${screenWidth}px)`;
xdoc('cardmove').style.transition = "1s";
var flipped = false;

setInterval(()=>{
  var scrolled = window.pageYOffset;
  
  if (scrolled > pureScreenHeight + 100 ) {
    xdoc('cardmove').style.transform = `translateX(0px)`;
    
    if (!flipped && xdoc("heytry").style.display != "flex") {
      setTimeout(() => {
        xdoc('heytry').style.display = `flex`;
        setTimeout(() => {
          xdoc('heytry').style.transform = `unset`;
        }, 1000);
      }, 1000); 
    }
  } else if(scrolled < 400){
    xdoc('cardmove').style.transform = `translateX(-${screenWidth}px)`;
    xdoc('heytry').style.display = `none`;
    xdoc('heytry').style.transform = `translateX(-400px)`;
  }
},10)
function flippedOnce() {
  flipped = true;
  if (xdoc("heytry").style.display != "none") {
    xdoc('heytry').style.transform = `translateX(-400px)`;
    xdoc('heytry').style.color = `rgba(0,0,0,0)`;
    setTimeout(() => {
      xdoc('heytry').style.display = `none`;
    }, 1000);
  }
}


//EMPHASIZE BTN PLANE
var btnplane = xdoc("imgtellme");
setInterval(() => {
  if (btnplane.style.opacity == "1") {
    // console.log("yawes");
    btnplane.style.opacity = "0.2";
  } else {
    btnplane.style.opacity = "1";
  }
}, 1000);


//THE PROJECT 
xdoc('projectarea').style.width = pureScreenWidth - 400 + "px";
var fep = document.getElementsByClassName("foreachproject");
var a = 0;
var manyfep = 4;
function slidenaik() {
  fep[a].style.backgroundColor = "rgba(0,0,0,0)";
  setTimeout(() => {
    for (let i = a+1; i < manyfep; i++) {
      fep[i].style.transform = `translateY(${-322*(a+1)}px)`;
    }
    a++;
  }, 400);
}
window.addEventListener('load', function () {
  document.getElementById("loading").style.display = "none";
})

setInterval(() => {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  
  var greeting = "GOOD";
  if (0 <= hours && hours < 12)  greeting += " MORNING";
  else if (12 <= hours && hours < 17) greeting += " AFTERNOON";  
  else if (17 <= hours && hours < 22) greeting += " EVENING";  
  else if (22 <= hours && hours < 24)  greeting += " NIGHT";
  
  document.getElementById("h4good").innerHTML = greeting; 
}, 1000);


var pureScreenWidth = $(window).width();
var pureScreenHeight = $(window).height();
var height = $(window).height()-400;
document.getElementById("blackout").style.height = height + "px";
document.getElementById("gray1").style.height = height + "px";
document.getElementById("gray2").style.height = height + "px";
document.getElementById("gray3").style.height = height + "px";
document.getElementById("gray4").style.height = height + "px";

setInterval(()=>{
  var scrolled = window.pageYOffset;

  if (scrolled >= 300 + height) {
    document.getElementById('blackout').style.transform = `translateY(${0*28-height}px)`;
    document.getElementById('gray1').style.transform = `translateY(${1*28-height}px)`;
    document.getElementById('gray2').style.transform = `translateY(${2*28-height}px)`;
    document.getElementById('gray3').style.transform = `translateY(${3*28-height}px)`;
    document.getElementById('gray4').style.transform = `translateY(${4*28-height}px)`;
  }else if(scrolled < 400) {
    document.getElementById('blackout').style.transform = `unset`;
    document.getElementById('gray1').style.transform = `unset`;
    document.getElementById('gray2').style.transform = `unset`;
    document.getElementById('gray3').style.transform = `unset`;
    document.getElementById('gray4').style.transform = `unset`;
    
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
    document.getElementById('navbotmain').style.display = "unset";
    document.getElementById('h2navigationbehind').innerHTML = "&ensp;&nbsp;ERRBINT";
    toggleERRBINT = true;
    if(document.getElementById('h2navigation').innerHTML == "NAVIGATION"){
      setTimeout(() => {
        document.getElementById('h2navigation').style.transform = "translateX(200px)";
        setTimeout(() => {
          document.getElementById('h2navigation').innerHTML = "&ensp;&nbsp;ERRBINT";
          document.getElementById('h2navigation').style.transform = "unset";
        }, 1000);
      }, 10);
    }
  } else if(scrolled < pureScreenHeight - 60){
    document.getElementById('navbotmain').style.display = "none";
    if(document.getElementById('h2navigation').innerHTML == "&ensp;&nbsp;ERRBINT"){
      setTimeout(() => {
        document.getElementById('h2navigation').style.transform = "translateX(200px)";
        setTimeout(() => {
          document.getElementById('h2navigation').innerHTML = "NAVIGATION";
          document.getElementById('h2navigation').style.transform = "unset";
        }, 1000);  
      }, 10);
    }
  }


  if (scrolled < pureScreenHeight - 60 && !dontChangeFirst) {
    if(toggleERRBINT){
      document.getElementById('h2navigation').innerHTML = "NAVIGATION";
      toggleERRBINT = false;
      function changeTextBehind(){
        document.getElementById('h2navigationbehind').style.transform = "translateX(200px)";
        function changeTextBehindE(){
          document.getElementById('h2navigationbehind').innerHTML = "NAVIGATION";
          document.getElementById('h2navigationbehind').style.transform = "unset";
        }setTimeout(changeTextBehindE, 1000);
      }setTimeout(changeTextBehind, 10);
    }
  }
},10)

//CARD MOVEMENT
document.getElementById('cardmove').style.transform = `translateX(-${screenWidth}px)`;
document.getElementById('cardmove').style.transition = "1s";

setInterval(()=>{
  var scrolled = window.pageYOffset;
  
  if (scrolled > pureScreenHeight + 100 ) {
    document.getElementById('cardmove').style.transform = `translateX(0px)`
  } else if(scrolled < 400){
    document.getElementById('cardmove').style.transform = `translateX(-${screenWidth}px)`;
  }
},100)

//EMPHASIZE BTN PLANE
var btnplane = document.getElementById("imgtellme");
setInterval(() => {
  if (btnplane.style.opacity == "1") {
    console.log("yawes");
    btnplane.style.opacity = "0.2";
  } else {
    btnplane.style.opacity = "1";
  }
}, 1000);
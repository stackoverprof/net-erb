window.addEventListener('load', function () {
  xdoc("loading").style.transition = "2s";
  xdoc("loading").style.backgroundColor = "rgba(0,0,0,0)";
  xdoc("spinner").style.display = "none";
  setTimeout(() => {
    xdoc("loading").style.display = "none";
  }, 2000);
})


setInterval(() => {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  
  var greeting;
  if (0 <= hours && hours < 12)  greeting = "MORNING";
  else if (12 <= hours && hours < 17) greeting = "AFTERNOON";  
  else if (17 <= hours && hours < 22) greeting = "EVENING";  
  else if (22 <= hours && hours < 24)  greeting = "NIGHT";
  
  xdoc("h4good").innerHTML = greeting; 
}, 1000);


var pureScreenWidth = $(window).width();
var pureScreenHeight = $(window).height();
var height = $(window).height()-400;
xdoc('scrollcontent').style.height = pureScreenHeight + "px";
xdoc("blackout").style.height = height + "px";
xdoc("gray1").style.height = height + "px";
xdoc("gray2").style.height = height + "px";
xdoc("gray3").style.height = height + "px";
xdoc("gray4").style.height = height + "px";

xdoc('scrollcontent').style.transform = `translateY(${pureScreenHeight-60}px)`;

// window.addEventListener('wheel', zoom);

// var navchangeDone = true;
//trigger croll up or down
function goUp(){
  xdoc('scrollcontent').style.transform = `translateY(0px)`;
          
  setTimeout(() => {
    setTimeout(() => {
      xdoc("runline").style.transform = "unset";
    }, 1000);
    
    xdoc('blackout').style.transform = `translateY(${0*28-height}px)`;
    setTimeout(() => {
      xdoc('gray1').style.transform = `translateY(${1*28-height}px)`;
      setTimeout(() => {
        xdoc('gray2').style.transform = `translateY(${2*28-height}px)`;
        setTimeout(() => {
          xdoc('gray3').style.transform = `translateY(${3*28-height}px)`;
          setTimeout(() => {
            xdoc('gray4').style.transform = `translateY(${4*28-height}px)`;
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }, 600);
}

function goDown(){
  // navchangeDone = false;
  xdoc('scrollcontent').style.transform = `translateY(${pureScreenHeight-60}px)`;
          
  xdoc("runline").style.transform = "translateX(678px)";
  setTimeout(() => {
    // setTimeout(() => {
    // }, 1000);
    
    
    xdoc('blackout').style.transform = `unset`;
    // setTimeout(() => {
      xdoc('gray1').style.transform = `unset`;
      xdoc('gray2').style.transform = `unset`;
      xdoc('gray3').style.transform = `unset`;
      xdoc('gray4').style.transform = `unset`;
    // }, 200);
  }, 600);  
}

function detectMouseWheelDirection( e )
{
  // alert("detect");
    var delta = null,
        direction = false
        ;
    if ( !e ) { // if the event is not provided, we get it from the window object
        e = window.event;
    }
    if ( e.wheelDelta ) { // will work in most cases
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) { // fallback for Firefox
        delta = -e.detail / 2;
      }
    if ( delta !== null ) {
        direction = delta > 0 ? 'up' : 'down';
      }

      return direction;
    }
    function handleMouseWheelDirection( direction )
    {  
      if (this.before != direction) {
        xdoc('scrollcontent').style.transition = `0.6s`;

        if ( direction == 'down') {
          goUp();
          // xdoc('divlink').style.filter = "opacity(0)";
          
        } else if ( direction == 'up') {
          goDown();
          // xdoc('divlink').style.filter = "opacity(1)";

        } else {
            //nothing
        }
        this.before = direction;
      }
}
document.onmousewheel = function( e ) {
    handleMouseWheelDirection( detectMouseWheelDirection( e ) );
};
if ( window.addEventListener ) {
  document.addEventListener( 'DOMMouseScroll', function( e ) {
        handleMouseWheelDirection( detectMouseWheelDirection( e ) );
    });
}
var navchangeDone = true;
var isErrbint = false;
setInterval(() => {
  if (xdoc('scrollcontent').style.transform == `translateY(0px)`) {
    if (!isErrbint) {
      if (navchangeDone) {  
        setTimeout(() => {
          navchangeDone = false;
          xdoc('h2navigation').style.transform = "translateX(200px)";
          setTimeout(() => {
            xdoc('h2navigation').innerHTML = "&ensp;&nbsp;ERRBINT";
            xdoc('h2navigation').style.transform = "unset";
            isErrbint = true;
            setTimeout(() => {
              navchangeDone = true;
            }, 1000);
          }, 1000);
        }, 0);      
      }
    }
  } else if ( xdoc('scrollcontent').style.transform == `translateY(${pureScreenHeight-60}px)`) {
    if (isErrbint) {
      if (navchangeDone) {
        setTimeout(() => {
          navchangeDone = false;        
          xdoc('h2navigation').style.transform = "translateX(200px)";
          setTimeout(() => {
            xdoc('h2navigation').innerHTML = "NAVIGATION";
            xdoc('h2navigation').style.transform = "unset";
            // navchangeDone = true;
            isErrbint = false;
            setTimeout(() => {
              navchangeDone = true;
            }, 1000);
          }, 1000);
        }, 800);
      }
    }
  }else{
    //do nothing
  }  
}, 100);


//PARALAX EFFECTS
var originalX, originalY, goX, goY, justOnce=true;
onmousemove = function(e){
  if (justOnce) {
    originalX = e.clientX;
    originalY = e.clientY;
    justOnce = false;
  }
  goX = e.clientX - originalX;
  goY = e.clientY - originalY;
  // console.log(goX+ " "+goY);
  
  xdoc('par1').style.transform = `translate(${goX/50}px,${goY/50}px)`;
  xdoc('par2').style.transform = `translate(${goX/120}px,${goY/120}px)`;
  xdoc('par3').style.transform = `translate(${goX/170}px,${goY/170}px)`;
  xdoc('apar1').style.transform = `rotate(290deg) translate(${goX/50}px,${goY/50}px)`;
  xdoc('apar2').style.transform = `rotate(290deg) translate(${goX/120}px,${goY/120}px)`;
  xdoc('apar3').style.transform = `rotate(290deg) translate(${goX/170}px,${goY/170}px)`;
  xdoc('linemove').style.transform = `translateX(${Math.abs(goX)/100}px)`;
  xdoc('avamove').style.transform = `translateX(${goX/300}px)`;
  xdoc('circledtext').style.transform = `translateX(${goX/150}px) rotateZ(${-goX/150}deg)`;
}






//runline
xdoc("runline").style.transform = "translateX(678px)"
xdoc("runline").style.transition = "1s"


//anchoring profile
xdoc('gotoprofile').addEventListener("click",function(){
  window.event.preventDefault();
  goUp();
});



























// $(window).scroll(function(event){
//   var scrolled = window.pageYOffset;
//   console.log(scrolled);
  
//   if (scrolled>0) {
//     xdoc('scrollcontent').style.transform = `translateY(0px)`;
    
//   } else if(scrolled=0) {
//     xdoc('scrollcontent').style.transform = `translateY(${pureScreenHeight-60}px)`;
    
//   }
  
// });









// setInterval(()=>{
  //   var scrolled = window.pageYOffset;
  
  // if (scrolled >= 1) {
    // window.addEventListener('load', function () {
      
    // })
  // }else if(scrolled < 1) {
  //   xdoc('blackout').style.transform = `unset`;
  //   xdoc('gray1').style.transform = `unset`;
  //   xdoc('gray2').style.transform = `unset`;
  //   xdoc('gray3').style.transform = `unset`;
  //   xdoc('gray4').style.transform = `unset`;
    
  // }
// },100);



//STICKY NAVBAR
// var dontChangeFirst = true;
// var toggleERRBINT = false;
// setInterval(()=>{
    
//   var scrolled = window.pageYOffset;
//   // console.log(scrolled);
  
//   if (scrolled >= pureScreenHeight - 60 ) {
//     dontChangeFirst = false;
//     xdoc('navbotmain').style.display = "unset";
//     xdoc('h2navigationbehind').innerHTML = "&ensp;&nbsp;ERRBINT";
//     toggleERRBINT = true;
//     if(xdoc('h2navigation').innerHTML == "NAVIGATION"){
//       setTimeout(() => {
//         xdoc('h2navigation').style.transform = "translateX(200px)";
//         setTimeout(() => {
//           xdoc('h2navigation').innerHTML = "&ensp;&nbsp;ERRBINT";
//           xdoc('h2navigation').style.transform = "unset";
//         }, 1000);
//       }, 10);
//     }
//   } else if(scrolled < pureScreenHeight - 60){
//     xdoc('navbotmain').style.display = "none";
//     if(xdoc('h2navigation').innerHTML == "&ensp;&nbsp;ERRBINT"){
//       setTimeout(() => {
//         xdoc('h2navigation').style.transform = "translateX(200px)";
//         setTimeout(() => {
//           xdoc('h2navigation').innerHTML = "NAVIGATION";
//           xdoc('h2navigation').style.transform = "unset";
//         }, 1000);  
//       }, 10);
//     }
//   }


//   if (scrolled < pureScreenHeight - 60 && !dontChangeFirst) {
//     if(toggleERRBINT){
//       xdoc('h2navigation').innerHTML = "NAVIGATION";
//       toggleERRBINT = false;
//       function changeTextBehind(){
//         xdoc('h2navigationbehind').style.transform = "translateX(200px)";
//         function changeTextBehindE(){
//           xdoc('h2navigationbehind').innerHTML = "NAVIGATION";
//           xdoc('h2navigationbehind').style.transform = "unset";
//         }setTimeout(changeTextBehindE, 1000);
//       }setTimeout(changeTextBehind, 10);
//     }
//   }
// },10)

//CARD MOVEMENT
// xdoc('cardmove').style.transform = `translateX(-${screenWidth}px)`;
// xdoc('cardmove').style.transition = "1s";
// var flipped = false;

// setInterval(()=>{
//   var scrolled = window.pageYOffset;
  
//   if (scrolled > pureScreenHeight + 100 ) {
//     xdoc('cardmove').style.transform = `translateX(0px)`;
    
//     if (!flipped && xdoc("heytry").style.display != "flex") {
//       setTimeout(() => {
//         xdoc('heytry').style.display = `flex`;
//         setTimeout(() => {
//           xdoc('heytry').style.transform = `unset`;
//         }, 1000);
//       }, 1000); 
//     }
//   } else if(scrolled < 400){
//     xdoc('cardmove').style.transform = `translateX(-${screenWidth}px)`;
//     xdoc('heytry').style.display = `none`;
//     xdoc('heytry').style.transform = `translateX(-400px)`;
//   }
// },10)
// function flippedOnce() {
//   flipped = true;
//   if (xdoc("heytry").style.display != "none") {
//     xdoc('heytry').style.transform = `translateX(-400px)`;
//     xdoc('heytry').style.color = `rgba(0,0,0,0)`;
//     setTimeout(() => {
//       xdoc('heytry').style.display = `none`;
//     }, 1000);
//   }
// }


// //EMPHASIZE BTN PLANE
// var btnplane = xdoc("imgtellme");
// setInterval(() => {
//   if (btnplane.style.opacity == "1") {
//     // console.log("yawes");
//     btnplane.style.opacity = "0.2";
//   } else {
//     btnplane.style.opacity = "1";
//   }
// }, 1000);


// //THE PROJECT 
// xdoc('projectarea').style.width = pureScreenWidth - 400 + "px";
// var fep = document.getElementsByClassName("foreachproject");
// var fade = document.getElementsByClassName("faderout");
// fade[0].style.backgroundColor = "rgba(0,0,0,0)";
// var a = 0;
// var current = 0;
// var t = 0;
// function slidenaik() {
//   if (a != manyfep-1) {
//     fade[a].style.backgroundColor = "rgba(0,0,0,1)";
//     setTimeout(() => {
//       for (var i = a+1; i < manyfep; i++) {
//         fep[i].style.transform = `translateY(${-322*(a+1)}px)`;
//         fade[a+1].style.backgroundColor = "rgba(0,0,0,0)";
//       }
//       xdoc('projecttitle').innerHTML = titles[++t];
//       xdoc('projectsubtitle').innerHTML = subtitles[t];
//       a++;
//     }, 400);
//     current++;
//   }
// }
// function slideturun() {
//   if (a != 0) {
//     muncul = current-1;
//     for (var i = a; i < manyfep; i++) {
//       fep[i].style.transform = `translateY(${322-322*(current)}px)`;
//     }
//     xdoc('projecttitle').innerHTML = titles[--t];
//     xdoc('projectsubtitle').innerHTML = subtitles[t];
//     a--;
//     fade[a+1].style.backgroundColor = "rgba(0,0,0,0.8)";
//     setTimeout(() => {
//       fade[muncul].style.backgroundColor = "rgba(0,0,0,0)";
//     }, 800);
//     current--;

//   }
// }


//floatcontrol
// setInterval(() => {
//   var scrolled = window.pageYOffset;
//  console.log(scrolled);
//   if (scrolled < 1285) {
//     xdoc('floatcontrol').style.display = "none";
//   } else if (scrolled >= 1285) {
//     xdoc('floatcontrol').style.display = "unset"; 
//   } else if (scrolled >= 2046) {
//     xdoc('floatcontrol').style.display = "none";
//   }

  
// }, 100);
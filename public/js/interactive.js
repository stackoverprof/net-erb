var height = $(window).height()-400;
var pureheight = $(window).height();
window.addEventListener('scroll', scrollFunc);

document.getElementById("blackout").style.height = 2*height + "px";
document.getElementById("gray1").style.height = height + "px";
document.getElementById("gray2").style.height = height + "px";
document.getElementById("gray3").style.height = height + "px";
document.getElementById("gray4").style.height = height + "px";
document.getElementById("gray5").style.height = height + "px";

document.getElementById("blackout").style.top = 0 + "px";
document.getElementById("gray1").style.top = height + "px";
document.getElementById("gray2").style.top = height + "px";
document.getElementById("gray3").style.top = height + "px";
document.getElementById("gray4").style.top = height + "px";
document.getElementById("gray5").style.top = height + "px";

  function scrollFunc() {
    
    var scrolled = window.pageYOffset;
    console.log(scrolled);
    
    if (scrolled >= 500) {
      //   document.getElementById('blackout').style.transform = `translateY(${0*28-height}px)`;
      document.getElementById('blackout').style.transform = `translateY(${0*28-height-100}px)`;
      document.getElementById('gray1').style.transform = `translateY(${1*28-height-100}px)`;
      document.getElementById('gray2').style.transform = `translateY(${2*28-height-100}px)`;
      document.getElementById('gray3').style.transform = `translateY(${3*28-height-100}px)`;
      document.getElementById('gray4').style.transform = `translateY(${4*28-height-100}px)`;
      document.getElementById('gray5').style.transform = `translateY(${5*28-height-100}px)`;
    } else if(scrolled < 500) {
      document.getElementById('blackout').style.transform = `unset`;
      document.getElementById('gray1').style.transform = `unset`;
      document.getElementById('gray2').style.transform = `unset`;
      document.getElementById('gray3').style.transform = `unset`;
      document.getElementById('gray4').style.transform = `unset`;
      document.getElementById('gray5').style.transform = `unset`;
      
     }
  }


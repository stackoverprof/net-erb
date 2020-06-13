var height = $(window).height()-400;
window.addEventListener('scroll', scrollFunc);
document.getElementById("blackout").style.height = height + "px";
document.getElementById("gray1").style.height = height + "px";
document.getElementById("gray2").style.height = height + "px";
document.getElementById("gray3").style.height = height + "px";
document.getElementById("gray4").style.height = height + "px";
document.getElementById("gray5").style.height = height + "px";

document.getElementById("gray1").style.top = height + "px";
document.getElementById("gray2").style.top = height + "px";
document.getElementById("gray3").style.top = height + "px";
document.getElementById("gray4").style.top = height + "px";
document.getElementById("gray5").style.top = height + "px";

  function scrollFunc() {
    
    var scrolled = window.pageYOffset;
    console.log(scrolled);
    
    if (scrolled >= 400 + height) {
    //   document.getElementById('blackout').style.transform = `translateY(${0*28-height}px)`;
      document.getElementById('gray1').style.transform = `translateY(${1*28-height-56}px)`;
      document.getElementById('gray2').style.transform = `translateY(${2*28-height-56}px)`;
      document.getElementById('gray3').style.transform = `translateY(${3*28-height-56}px)`;
      document.getElementById('gray4').style.transform = `translateY(${4*28-height-56}px)`;
      document.getElementById('gray5').style.transform = `translateY(${5*28-height-56}px)`;
    }// else {
      
    // }
  }


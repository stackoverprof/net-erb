
// Global Variables
var canvas2 = document.getElementById('canvaspacman');
var ctx2 = canvas2.getContext('2d');
var screenHeight2 = 80;
var screenWidth2 = $(window).width();
var candy = {};
// var xpac = {};




$(document).keydown(function(e){
    if (e.which == 37 || e.which == 65){
            xpac.Velocity.X = -5;
    } else if (e.which == 39 || e.which == 68){
            xpac.Velocity.X = 5;
    } else if (e.which == 13 && isGameOver) {
             newGame();
    }
});

$(document).keyup(function(){
    xpac.Velocity.X = 0;
    xpac.Velocity.Y = 0;
});






// Setting Canvas2 Dimensions
$(window).resize(function(){
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    canvas2.width = screenWidth;
    canvas2.height = screenHeight;
});
canvas2.width = screenWidth2;
canvas2.height = screenHeight2;



var xpac = new Pacman();

function Pacman(){
    this.Position = {X: 106, Y: screenHeight2-50};
    this.Velocity = {X: 0, Y: 0,};
    
    this.Draw = function(){
        ctx2.shadowColor = "rgba(80,80,0,0.8)";
        ctx2.shadowBlur = 40;
        ctx2.beginPath();
        ctx2.rect(this.Position.X, this.Position.Y, 50, 50);
        ctx2.fillStyle = '#FF5B14';
        ctx2.fill();
    }

    this.updatePosition = function(){
        if (this.Position.X > 2 && this.Position.X <= screenWidth2-55) {   
            this.Position.X += this.Velocity.X;
        }else if(this.Position.X < 5){
            this.Position.X += 2;
        }else if(this.Position.X > screenWidth2-55){
            this.Position.X -= 1;        
        }
        
        // this.Position.Y += this.Velocity.Y;this.Position.X+76 + "px";
    }

    this.update = function(){
        this.updatePosition();
        this.Draw();
    }
}

// var xcandy = [];
// for(var i = 0; i < 15; i++){
//     xcandy[i] = new Candy(i*20);
// }

    xcandy0  = new Candy(0*50);
    xcandy1  = new Candy(1*50);
    xcandy2  = new Candy(2*50);
    xcandy3  = new Candy(3*50);
    xcandy4  = new Candy(4*50);
    xcandy5  = new Candy(5*50);
    xcandy6  = new Candy(6*50);
    xcandy7  = new Candy(7*50);
    xcandy8  = new Candy(8*50);
    xcandy9  = new Candy(9*50);
    xcandy10 = new Candy(10*50);
    xcandy11 = new Candy(11*50);
    xcandy12 = new Candy(12*50);
    xcandy13 = new Candy(13*50);
    xcandy14 = new Candy(14*50);
    xcandy15 = new Candy(15*50);
    xcandy16 = new Candy(16*50);
    xcandy17 = new Candy(17*50);
    xcandy18 = new Candy(18*50);
    xcandy19 = new Candy(19*50);
    xcandy20 = new Candy(20*50);
    xcandy21 = new Candy(21*50);
    xcandy22 = new Candy(22*50);
    xcandy23 = new Candy(23*50);
    xcandy24 = new Candy(24*50);
    xcandy25 = new Candy(25*50);
    xcandy26 = new Candy(26*50);
    xcandy27 = new Candy(27*50);
    xcandy28 = new Candy(28*50);
    xcandy29 = new Candy(29*50);
    xcandy30 = new Candy(30*50);
    
    
    function Candy(posX){
    this.Width = 20;
    this.Height = 20;
    this.Color = "#FF5B14";
    this.PosX = posX;
    
    this.Draw = function(){
        ctx2.shadowColor = "rgba(120,120,0,0.8)";
        ctx2.shadowBlur = 20;
        ctx2.beginPath();
        ctx2.rect(this.PosX, screenHeight2-38, 20, 20);
        ctx2.fillStyle = this.Color;
        ctx2.fill();
    }

    this.update = function(){
        this.Draw();
    }
    
}

function Updater2() {
    ctx2.clearRect(0, 0, screenWidth2, screenHeight2);
    xcandy0.update();
    xcandy1.update();
    xcandy2.update();
    xcandy3.update();
    xcandy4.update();
    xcandy5.update();
    xcandy6.update();
    xcandy7.update();
    xcandy8.update();
    xcandy9.update();
    xcandy10.update();
    xcandy11.update();
    xcandy12.update();
    xcandy13.update();
    xcandy14.update();
    xcandy15.update();
    xcandy16.update();
    xcandy17.update();
    xcandy18.update();
    xcandy19.update();
    xcandy20.update();
    xcandy21.update();
    xcandy22.update();
    xcandy23.update();
    xcandy24.update();
    xcandy25.update();
    xcandy26.update();
    xcandy27.update();
    xcandy28.update();
    xcandy29.update();
    xcandy30.update();
    xpac.update();
}
setInterval(Updater2, 10);

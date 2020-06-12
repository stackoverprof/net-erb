<div id="container">
    <p>Use WASD to move grey square</p>
    <h1>Score: <span class="score"></span></h1></div>


    // Global Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var screenHeight = $(window).height();
var screenWidth = $(window).width();
var shapes = {};
var shapeIndex = 0;
var score = 0; 
var fallSpeed = 8;
var shapeGenerateSpeed = 100;

// Setting Canvas Dimensions
$(window).resize(function(){
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    canvas.width = screenWidth;
    canvas.height = screenHeight;
});
canvas.width = screenWidth;
canvas.height = screenHeight;

// $(document).mousemove(function(e){
//   dude.Position.X = e.pageX;
//   dude.Position.Y = e.pageY;
// })

$(document).keydown(function(e){
    // console.log(e.which);
    if (e.which == 65){
    dude.Velocity.X = -5;
    } else if (e.which == 87){
    dude.Velocity.Y = -5;
    } else if (e.which == 68){
    dude.Velocity.X = 5;
    } else if (e.which == 83){
    dude.Velocity.Y = 5;
    }
});
$(document).keyup(function(){
dude.Velocity.X = 0;
dude.Velocity.Y = 0;
})

//Generates Snake Head
function Shape(posX, width, height) {
    this.Width = width;
    this.Height = height;
    
    this.Position = {
        X: posX,
        Y: -this.Height
    };
    this.Velocity = Math.random() * fallSpeed + 5;
    this.Index = shapeIndex;

    shapes[shapeIndex] = this;
    shapeIndex++

    this.checkCollisions = function() {
    if(this.Position.Y >= screenHeight+150){
        delete shapes[this.Index];
    }
    }
    this.updatePosition = function() {
        this.Position.Y += this.Velocity;
    }
    this.Draw = function(shadow) {
        ctx.beginPath();
        ctx.rect(this.Position.X, this.Position.Y-35*shadow, this.Width, this.Height);
        switch(shadow) {
            case 0:
              color = '#000000'
              break;
            case 1:
              color = '#999999'
              break;
            case 2:
              color = '#C7C7C7'
              break;
            case 3:
              color = '#E5E5E5'
              break;
            case 4:
              color = '#F2F2F2'
              break;
            default:
              color = '#000000'
          }
        ctx.fillStyle = color;
        ctx.fill();
    }
    this.update = function(){
        this.checkCollisions();
        this.updatePosition();
        this.Draw(0);
        this.Draw(1);
        this.Draw(2);
        this.Draw(3);
        this.Draw(4);
    }
}

function Dude(posX, width, height){
this.Width = width;
this.Height = height;
this.Color = "#575757"
this.Position = {X: posX, Y: screenHeight-this.Height}
this.Velocity = {X: 0, Y: 0,}

this.checkCollisions = function(){
    function collision(a,b){
    if (
        a.Position.X <= b.Position.X + b.Width &&
        a.Position.X + a.Width >= b.Position.X &&
        a.Position.Y + a.Height >= b.Position.Y &&
        a.Position.Y <= b.Position.Y + b.Height ){
        return true
    }
    }
    for (i in shapes){
    if(collision(this, shapes[i])){
        newGame();
    }
    }
}
this.updatePosition = function(){
    this.Position.X += this.Velocity.X;
    this.Position.Y += this.Velocity.Y;
}
this.Draw = function(){
    ctx.beginPath();
    ctx.rect(this.Position.X, this.Position.Y, this.Width, this.Height);
    ctx.fillStyle = this.Color;
    ctx.fill();
}
this.update = function(){
    this.checkCollisions();
    this.updatePosition();
    this.Draw();
}
}

var dude = new Dude(screenWidth/2, 30, 30);

function newGame(){
dude = new Dude(screenWidth/2, 30, 30);
shapes = {};
$("#container").append("<h2>"+score+"</h2>");
score = 0;
}
function shapeGenerate(){
new Shape(Math.random()*screenWidth,30,40);
score++
$(".score").html(score);
}

function Updater() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    for(i in shapes){
    shapes[i].update();
    }
    dude.update();
    // requestAnimationFrame(Updater);
}
setInterval(Updater, 10);
setInterval(shapeGenerate, shapeGenerateSpeed);

// Global Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var screenHeight = $(window).height()-60;
var screenWidth = $(window).width();
var shapes = {};
var shapeIndex = 0;
var score = 0; 
var fallSpeed = 4;
var shapeGenerateSpeed = 100;
var accel = 5;
var raincounter = 0;


// Setting Canvas Dimensions
$(window).resize(function(){
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    canvas.width = screenWidth;
    canvas.height = screenHeight;
});
canvas.width = screenWidth;
canvas.height = screenHeight;

document.getElementById("instruction").style.top = screenHeight-38 + "px";
document.getElementById("scoring").style.top = screenHeight-38 + "px";
document.getElementById("scorlive").style.top = screenHeight-38 + "px";
document.getElementById("navbot").style.top = screenHeight + "px";
document.getElementById("navbot").style.height = 60 + "px";
document.getElementById("buttonnewgame").style.transform = `translateX(${screenWidth/2}px)`;
document.getElementById("ohnobox").style.visibility="hidden";
document.getElementById("ohnobox").style.opacity="0";

function appear(){
    document.getElementById("buttonnewgame").style.backgroundColor = "#FE8D13";
    document.getElementById("buttonnewgame").style.color = "white";
}setTimeout(appear,800);
// $(document).mousemove(function(e){
    //   dude.Position.X = e.pageX;
    //   dude.Position.Y = e.pageY;
    // })
    
    $(document).keydown(function(e){
        // console.log(e.which);
        if (e.which == 37 || e.which == 65){
            dude.Velocity.X = -5;
            document.getElementById("instruction").style.display = "none";
            document.getElementById("chatbox").style.visibility="hidden";
            document.getElementById("chatbox").style.opacity="0";
            document.getElementById("chatbox").style.transition="visibility 0s 3s, opacity 3s linear";
            // } else if (e.which == 87){
                // dude.Velocity.Y = -5;
            } else if (e.which == 39 || e.which == 68){
                dude.Velocity.X = 5;
                document.getElementById("instruction").style.display = "none";
                document.getElementById("chatbox").style.visibility="hidden";
                document.getElementById("chatbox").style.opacity="0";
                document.getElementById("chatbox").style.transition="visibility 0s 3s, opacity 3s linear";
            } //else if (e.which == 83){
                // dude.Velocity.Y = 5;
                // }
        });
        $(document).keyup(function(){
            dude.Velocity.X = 0;
            dude.Velocity.Y = 0;
        });

//Generates Snake Head
function Shape(posX, width, height) {
    this.Width = width;
    this.Height = height;
    this.Color = "#000000"
    this.gradient = ctx.createLinearGradient(0,400, 0,200);
    this.shadow = 'rgba(0,0,0,0)';
    this.blur = 0;

    // Add three color stops
    this.gradient.addColorStop(0, '#000000');
    this.gradient.addColorStop(.2, '#000000');
    this.gradient.addColorStop(.2, '#555555');
    this.gradient.addColorStop(.4, '#555555');
    this.gradient.addColorStop(.4, '#999999');
    this.gradient.addColorStop(.6, '#999999');
    this.gradient.addColorStop(.6, '#C7C7C7');
    this.gradient.addColorStop(.8, '#C7C7C7');
    this.gradient.addColorStop(.8, '#EBEBEB');
    this.gradient.addColorStop(1, '#EBEBEB');

    this.Position = {
        X: posX,
        Y: -this.Height
    };
    this.Velocity = Math.random() * fallSpeed + accel;
    this.Index = shapeIndex;
    
    shapes[shapeIndex] = this;
    shapeIndex++
    
    
    this.checkCollisions = function() {
        if(this.Position.Y >= screenHeight+175){
            delete shapes[this.Index];
            raincounter++;
            
            $(".scorplive").html(raincounter);
            
            $(".scorp").html("Score : " + raincounter);
    }
    }
    this.updatePosition = function() {
        this.Position.Y += this.Velocity;
    }
    this.Draw = function(num) {
        ctx.shadowColor = this.shadow;
        ctx.shadowBlur = this.blur;
        ctx.beginPath();
        ctx.rect(this.Position.X, this.Position.Y-30*num, this.Width, this.Height);
        ctx.fillStyle = this.gradient;
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
    this.Color = "#FF5B14"
    this.Position = {X: posX, Y: screenHeight-this.Height}
    this.Velocity = {X: 0, Y: 0,}
    this.shadow = 'orange';
    this.blur = 25;
    
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
        endscore = score
        gameOver(raincounter);
        this.Color = "#000000";
        this.shadow = "#000000";
    }
    }
}

document.getElementById("chatbox").style.top = screenHeight-135 + "px";
document.getElementById("ohnobox").style.top = screenHeight-135 + "px";

this.updatePosition = function(){
    if (this.Position.X > 0 && this.Position.X <= screenWidth-40) {   
        this.Position.X += this.Velocity.X;
        console.log(this.Position.X);
    }else if(this.Position.X < 5){
        this.Position.X += 1;
    }else if(this.Position.X > screenWidth-45){
        this.Position.X -= 16;
    }
    
    this.Position.Y += this.Velocity.Y;
    document.getElementById("chatbox").style.left = this.Position.X+76 + "px";
    document.getElementById("ohnobox").style.left = this.Position.X+76 + "px";
}
this.Draw = function(){
    ctx.shadowColor = this.shadow;
    ctx.shadowBlur = this.blur;
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











var dude = new Dude(screenWidth/2-296, 50, 50);

function newGame(){
    $(".scorplive").html("0");
    raincounter = 0;
    setTimeout(awaiter,2000)
    function awaiter(){
        document.getElementById("subtitle").innerHTML = "FULLSTACK DEVELOPER";
        document.getElementById("subtitle").style.color = "gray";
        document.getElementById("balancer").style.display = "unset";
        dude = new Dude(screenWidth/2-296, 50, 50);
        shapes = {};
        $("#container").append("<h2>"+score+"</h2>");
        score = 0;
        fallSpeed = 4;
        accel = 5;
        document.getElementById("instruction").style.display = "flex";
        document.getElementById("scoring").style.display = "none";
        document.getElementById("scorlive").style.display = "unset";
    }   
    document.getElementById("buttonnewgame").style.transform = `translateX(${screenWidth/2}px)`;
    pausescore = false;
}
function gameOver(){
    document.getElementById("subtitle").innerHTML = "GAME OVER";
    document.getElementById("subtitle").style.color = "black";
    // document.getElementById("buttonnewgame").style.transition = "2s";
    document.getElementById("buttonnewgame").style.transform = "translateX(0)";
    
    document.getElementById("balancer").style.display = "none";
    fallSpeed = 0;
    accel = 0;

    document.getElementById("instruction").style.display = "none";
    
    document.getElementById("chatbox").style.display = "none"; 
    
    document.getElementById("ohnobox").style.visibility="unset";
    document.getElementById("ohnobox").style.opacity="1";
    document.getElementById("ohnobox").style.transition="unset";

    pausescore = true;

    document.getElementById("scoring").style.display = "flex";

    document.getElementById("scorlive").style.display = "none";
    function fadeOutNo(){
        document.getElementById("ohnobox").style.visibility="hidden";
        document.getElementById("ohnobox").style.opacity="0";
        document.getElementById("ohnobox").style.transition="visibility 0s 2s, opacity 2s linear";
    }setTimeout(fadeOutNo,500);
    
}
function shapeGenerate(){
    new Shape(Math.random()*screenWidth,30,30);

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

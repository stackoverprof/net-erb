// Global Variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var screenHeight = $(window).height()-60;
var screenWidth = $(window).width();
var shapes = {};
var food = {};
var xdude = {};
var shapeIndex = 0;
var score = 0; 
var fallSpeed = 4;
var shapeGenerateSpeed = 100;
var accel = 5;
var raincounter = 0;
var releaseShield = false;
var isGameOver = false;
var igniteFoodOnce = true;
var foodscore = 0;
var igniteClear = true;

function clearance(origin){
    if( 
        origin < (screenWidth/2-296)-15 || 
        origin > (screenWidth/2-296)+65
    ){
        return origin;
    }else{
        return screenWidth*(3/4);
    }
}
function releaseFood(){
    if (igniteFoodOnce && !isGameOver) {
        vfood = new Food(clearance((Math.random()*(screenWidth-60))+30));
        $(".foodplive").html("0");
    }
    if (!isGameOver) {
        igniteFoodOnce = false;
    }
}



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
            releaseShield = true;
            igniteClear = false;
            releaseFood();
        } else if (e.which == 39 || e.which == 68){
            dude.Velocity.X = 5;
            document.getElementById("instruction").style.display = "none";
            document.getElementById("chatbox").style.visibility="hidden";
            document.getElementById("chatbox").style.opacity="0";
            document.getElementById("chatbox").style.transition="visibility 0s 3s, opacity 3s linear";
            //else if (e.which == 83){
                // dude.Velocity.Y = 5;
            releaseShield = true;
            igniteClear = false;
            releaseFood();
        }else if (e.which == 13 && isGameOver) {
            newGame();
        }
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
    this.gradient = ctx.createLinearGradient(0,400, 0,250);
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
            if (releaseShield) {
                raincounter++;
                $(".scorplive").html(raincounter);
            }
            
            $(".scorp").html("Score : " + raincounter);
    }
    }
    this.updatePosition = function() {
        this.Position.Y += this.Velocity;
    }
    this.Draw = function(num) {
        if (this.Position.Y < 370) {
            ctx.shadowColor = this.shadow;
            ctx.shadowBlur = this.blur;
            ctx.beginPath();
            ctx.rect(this.Position.X, this.Position.Y-30*num, this.Width, this.Height);
            ctx.fillStyle = this.gradient;
            ctx.fill();
        } else if(this.Position.Y >= 370){
            
            ctx.beginPath();
            ctx.rect(this.Position.X, this.Position.Y-30*num, this.Width, this.Height);
            switch(num) {
                case 0:
                this.colorin = '#000000';
                this.blur = '5';
                this.shadow = '#222222';
                break;
                case 1:
                this.colorin = '#555555';
                this.blur = '0';
                this.shadow = 'rgba(0,0,0,0)';
                break;
                case 2:
                this.colorin = '#999999';
                this.blur = '0';
                this.shadow = 'rgba(0,0,0,0)';
                break;
                case 3:
                this.colorin = '#C7C7C7';
                this.blur = '0';
                this.shadow = 'rgba(0,0,0,0)';
                break;
                case 4:
                this.colorin = '#EBEBEB';
                this.blur = '0';
                this.shadow = 'rgba(0,0,0,0)';
                break;
                default:
                this.colorin = '#000000';
            }
            ctx.shadowColor = this.shadow;
            ctx.shadowBlur = this.blur;
            ctx.fillStyle = this.colorin;
            ctx.fill();
        }
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


function Food(posX){
    this.Width = 20;
    this.Height = 20;
    this.Color = "#FF5B14";
    this.shadow = 'orange';
    this.blur = 25;
    this.PosX = posX;

    food = this;

    this.Draw = function(){
    ctx.shadowColor = this.shadow;
    ctx.shadowBlur = this.blur;
    ctx.beginPath();
    ctx.rect(this.PosX, screenHeight-38, 20, 20);
    ctx.fillStyle = this.Color;
    ctx.fill();
    }

    this.update = function(){
        this.Draw();
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

    xdude = this;

    
    this.checkCollisions = function(){
        function collision(a,b){
            if (
                a.Position.X <= b.Position.X + b.Width &&
                a.Position.X + a.Width >= b.Position.X &&
                a.Position.Y + a.Height >= b.Position.Y &&
                a.Position.Y <= b.Position.Y + b.Height &&
                releaseShield
                ){
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

    this.checkEaten = function(){
        function eat(a,b){
            if (
                a.Position.X <= b.PosX + b.Width &&
                a.Position.X + a.Width >= b.PosX &&
                releaseShield
                ){
                    return true
                }
            }
        if(eat(this, food)){
            if (!isGameOver) {
                foodscore++;
            }
            $(".foodplive").html(foodscore);
            $(".endfoodplive").html("Food : " + foodscore);
            vfood = null;
            if (!isGameOver) {
                vfood = new Food((Math.random()*(screenWidth-60))+30);
            }
        }
    }
}   

document.getElementById("chatbox").style.top = screenHeight-135 + "px";
document.getElementById("ohnobox").style.top = screenHeight-135 + "px";

this.updatePosition = function(){
    if (this.Position.X > 2 && this.Position.X <= screenWidth-55) {   
        this.Position.X += this.Velocity.X;
    }else if(this.Position.X < 5){
        this.Position.X += 2;
    }else if(this.Position.X > screenWidth-55){
        this.Position.X -= 1;        
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
// this.Shield = function(){
//     ctx.shadowColor = 'rgba(0,0,0,0)';
//     ctx.shadowBlur = '0';
//     ctx.beginPath();
//     ctx.rect(this.Position.X-7.5, this.Position.Y-7.5, 65, 65);
//     ctx.fillStyle = '#FAE481';
//     ctx.fill();
// }
this.update = function(){
    this.checkCollisions();
    this.checkEaten();
    this.updatePosition();
    // this.Shield();
    this.Draw();
}
}











var dude = new Dude(screenWidth/2-296, 50, 50);

function newGame(){
    $(".scorplive").html("0");
    raincounter = 0;
    setTimeout(awaiter,2000)
    document.getElementById("scoring").style.display = "none";
    function awaiter(){
        document.getElementById("subtitle").innerHTML = "FULLSTACK DEVELOPER";
        document.getElementById("subtitle").style.color = "gray";
        document.getElementById("balancer").style.display = "unset";
        dude = new Dude(xdude.Position.X, 50, 50);
        shapes = {};
        $("#container").append("<h2>"+score+"</h2>");
        score = 0;
        fallSpeed = 4;
        accel = 5;
        document.getElementById("instruction").style.display = "flex";
        document.getElementById("scorlive").style.display = "unset";
        foodscore = 0;
        isGameOver = false;
        document.getElementById("scorlive").style.display = "flex";
        $(".foodplive").html(foodscore);
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

    

    vfood = null;
    food.PosX = null;
    isGameOver = true;

    igniteFoodOnce = false;

    $(".endfoodplive").html("Food : " + foodscore)
    
    function fadeOutNo(){
        document.getElementById("ohnobox").style.visibility="hidden";
        document.getElementById("ohnobox").style.opacity="0";
        document.getElementById("ohnobox").style.transition="visibility 0s 2s, opacity 2s linear";
    }setTimeout(fadeOutNo,500);
    
    function resetIgniteFoodOnce(){
        igniteFoodOnce = true;
        console.log(raincounter + " " + foodscore);

    }setTimeout(resetIgniteFoodOnce,2000);



}
function shapeGenerate(){
    new Shape(clearanceStart(Math.random()*screenWidth),30,30);
}



function clearanceStart(coor){
    
    if (coor > (screenWidth/2-296)-30 && coor < (screenWidth/2-296)+50 && igniteClear) {        
        returned = screenWidth-30;
    }else{
        returned = coor;
    }

    // alert(coor + " " + returned);
    // console.log(coor + " " + returned);
    return returned;
}

function Updater() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    for(i in shapes){
    shapes[i].update();
    }
    dude.update();
    vfood.update();
    // requestAnimationFrame(Updater);
}
setInterval(Updater, 10);
setInterval(shapeGenerate, shapeGenerateSpeed);

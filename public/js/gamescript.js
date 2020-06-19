// Global Variables
var canvas = xdoc('canvas');
var ctx = canvas.getContext('2d');
var screenHeight = $(window).height()-60;
var screenWidth = $(window).width();
var shapes = {};
var food = {};
var xdude = {};
var dude = {};
var shapeIndex = 0;
var score = 0; 
var fallSpeed = 4;
var shapeGenerateSpeed = 100;
var accel = 5;
var raincounter = 0;
var releaseShield = false;
var isGameOver = false;
var isSafeOver = false;
var igniteFoodOnce = true;
var foodscore = 0;
var igniteClear = true;
var animateDone = false;

//MAIN DOM
xdoc("instruction").style.top = screenHeight-38 + "px";
xdoc("scoring").style.top = screenHeight-48 + "px";
xdoc("scorlive").style.top = 10 + "px";
xdoc("buttonnewgame").style.transform = `translateX(${screenWidth/2}px)`;
xdoc("ohnobox").style.visibility="hidden";
xdoc("ohnobox").style.opacity="0";
// xdoc("lights").style.height = pureScreenHeight;
// xdoc("lightsbg").style.height = pureScreenHeight;

//KEDIP KEDIP
window.addEventListener('load', () => {
    setTimeout(() => {
        setTimeout(() => {
            xdoc('et').style.display="none";
            setTimeout(() => {
                xdoc('et').style.display="unset";
                setTimeout(() => {
                    xdoc('et').style.display="none";
                    // setTimeout(() => {
                    //     xdoc('et').style.display="unset";
                    //     setTimeout(() => {
                    //         xdoc('et').style.display="none";
                            
                    //     }, 100);
                    // }, 200);
                }, 100);
            }, 100);
        }, 1000);
        setTimeout(() => {
            xdoc('bri').style.display="none";
            setTimeout(() => {
                xdoc('bri').style.display="unset";
                setTimeout(() => {
                    xdoc('bri').style.display="none";
                    
                }, 500);
            }, 100);
        }, 800);
        setTimeout(() => {
            xdoc('nr').style.display="none";
            setTimeout(() => {
                xdoc('nr').style.display="unset";
                setTimeout(() => {
                    
                    xdoc('nr').style.display="none";
                    setTimeout(() => {
                        setTimeout(() => {
                            setTimeout(() => {
                                animateDone = true;
                                xdoc('errbintorg').style.transition = "1s";
                                dude = new Dude(screenWidth/2-310, 50, 50);
                                xdoc('chatbox').style.display = "flex";
                            }, 2750);
                            xdoc('subtitle').style.color = "gray";
                        }, 1750);
                        xdoc('errbintorg').style.transition = "2s";
                        xdoc('errbintorg').style.filter = "opacity(1)";
                    }, 1500);
                }, 500);
            }, 100);
            // setTimeout(() => {
            //     xdoc('bri').style.display="unset";
            //     setTimeout(() => {
            //         xdoc('bri').style.display="none";
                    
            //     }, 500);
            // }, 100);
        }, 1800);
    }, 1500);
})
    
// FOOD PLACING CLEARANCE, NO TO HIT BOX
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

//FOOD RELEASING IFs
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

//BUTTON NEW GAME
function appear(){
    xdoc("buttonnewgame").style.backgroundColor = "#FE8D13";
    xdoc("buttonnewgame").style.color = "white";
}setTimeout(appear,800);


//CONTROL AREA

    // $(document).mousemove(function(e){
    //   dude.Position.X = e.pageX;
    //   dude.Position.Y = e.pageY;
    // })
$(document).keydown(function(e){
    // console.log(e.which);
    if (e.which == 37 || e.which == 65){
        if(window.pageYOffset <= $(window).height()){
            dude.Velocity.X = -5;

            xdoc("instruction").style.display = "none";
            xdoc("chatbox").style.visibility="hidden";
            xdoc("chatbox").style.opacity="0";
            xdoc("chatbox").style.transition="visibility 0s 3s, opacity 3s linear";
            if (igniteFoodOnce) {
                xdoc('errbintorg').style.filter ="opacity(0)";
            }
            // xdoc('supertitle').style.zIndex  ="-9";
            
            releaseShield = true;
            igniteClear = false;
            releaseFood();
        }
    } else if (e.which == 39 || e.which == 68){
        if(window.pageYOffset <= $(window).height()){
            dude.Velocity.X = 5;
            
            xdoc("instruction").style.display = "none";
            xdoc("chatbox").style.visibility="hidden";
            xdoc("chatbox").style.opacity="0";
            xdoc("chatbox").style.transition="visibility 0s 3s, opacity 3s linear";
            if (igniteFoodOnce) {
                xdoc('errbintorg').style.filter ="opacity(0)";
            }
            // xdoc('supertitle').style.zIndex  ="-9";
            
            releaseShield = true;
            igniteClear = false;
            releaseFood();
        }
    }else if (e.which == 13 && isSafeOver) {
        if(window.pageYOffset <= $(window).height()) newGame();
    }
});

$(document).keyup(function(){
    dude.Velocity.X = 0;
    dude.Velocity.Y = 0;
});
    

    



//Generates RAINFALL
function Shape(posX, width, height) {
    this.Width = width;
    this.Height = height;
    this.Color = "#000000"
    this.gradient = ctx.createLinearGradient(0,400, 0,250);
    this.shadow = 'rgba(0,0,0,0)';
    this.blur = 0;

    // Add color stops
    this.gradient.addColorStop(0, '#000000');
    this.gradient.addColorStop(.2, '#000000');
    this.gradient.addColorStop(.2, '#555555');
    this.gradient.addColorStop(.4, '#555555');
    this.gradient.addColorStop(.4, '#999999');
    this.gradient.addColorStop(.6, '#999999');
    this.gradient.addColorStop(.6, '#C7C7C7');
    this.gradient.addColorStop(.8, '#C7C7C7');
    this.gradient.addColorStop(.8, '#F5F5F5');
    this.gradient.addColorStop(1, '#F5F5F5');

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
        // if (this.Position.Y < 370) {
            // ctx.shadowColor = this.shadow;
            // ctx.shadowBlur = this.blur;
            // ctx.beginPath();
            // ctx.rect(this.Position.X, this.Position.Y-30*num, this.Width, this.Height);
            // ctx.fillStyle = 'gray';
            // ctx.fill();
        // } else if(this.Position.Y >= 370){
            ctx.beginPath();
            switch(num) {
                case 0:
                    ctx.rect(this.Position.X, this.Position.Y, this.Width, this.Height);
                    this.colorin = '#888888';
                    this.blur = '3';
                    this.shadowBlur = '5';
                    this.shadow = 'gray';
                break;
                case 1:
                    ctx.rect(this.Position.X, this.Position.Y-120, this.Width, this.Height*4);
                    this.grd = ctx.createLinearGradient(pureScreenHeight/2, this.Position.Y, pureScreenHeight/2, this.Position.Y-120 );
                    this.grd.addColorStop(0, "rgba(200,200,200)");
                    this.grd.addColorStop(1, "rgba(200,200,200,0)");
                    this.colorin = this.grd;
                    this.blur = '0';
                    this.shadow = 'rgba(0,0,0,0)';
                break;
                // case 2:
                // this.colorin = '#AAAAAA';
                // this.blur = '0';
                // this.shadow = 'rgba(0,0,0,0)';
                // break;
                // case 3:
                // this.colorin = '#DDDDDD';
                // this.blur = '0';
                // this.shadow = 'rgba(0,0,0,0)';
                // break;
                // case 4:
                // this.colorin = '#EBEBEB';
                // this.blur = '0';
                // this.shadow = 'rgba(0,0,0,0)';
                // break;
                default:
                this.colorin = '#000000';
            }
            ctx.shadowColor = this.shadow;
            ctx.shadowBlur = this.blur;
            ctx.fillStyle = this.colorin;
            ctx.fill();
        // }
    }

    this.update = function(){
        this.checkCollisions();
        this.updatePosition();
        this.Draw(0);
        this.Draw(1);
        // this.Draw(2);
        // this.Draw(3);
        // this.Draw(4);
    }
}

//GENERATE FOOD
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

//GENERATE BOX
function Dude(posX, width, height){
    this.Width = width;
    this.Height = height;
    this.Position = {X: posX, Y: screenHeight-this.Height}
    this.Velocity = {X: 0, Y: 0,}
    this.Color = "#FF5B14"
    this.blur = 25;
    this.shadow = 'orange';
    // this.first = first;
    
    // if (first) {
    //     this.blur = 0;
    //     this.shadow = 'rgba(0,0,0,0)';
    //     this.Color = "rgba(0,0,0,0)";
    //     set
    // }

    xdoc("chatbox").style.top = screenHeight-135 + "px";
    xdoc("ohnobox").style.top = screenHeight-135 + "px";

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

    this.updatePosition = function(){
        if (this.Position.X > 2 && this.Position.X <= screenWidth-55) {   
            this.Position.X += this.Velocity.X;
        }else if(this.Position.X < 5){
            this.Position.X += 2;
        }else if(this.Position.X > screenWidth-55){
            this.Position.X -= 1;        
        }
        
        this.Position.Y += this.Velocity.Y;
        xdoc("chatbox").style.left = this.Position.X+76 + "px";
        xdoc("ohnobox").style.left = this.Position.X+76 + "px";
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
        this.checkEaten();
        this.updatePosition();
        this.Draw();
    }
}









//MAIN FUNCTION RUN GAME

//create new BOX
// window.addEventListener('load', () => {
    // setTimeout(() => {
        
        
    // }, 5300);
// });

//THE FUNC TO MAKE NEW GAME
function newGame(){
    xdoc('errbintorg').style.filter ="opacity(0)";
    $(".scorplive").html("0");
    raincounter = 0;
    setTimeout(awaiter,2000)
    xdoc("scoring").style.display = "none";
    function awaiter(){
        xdoc("subtitle").innerHTML = "A FULLSTACK DEVELOPER";
        xdoc("subtitle").style.color = "gray";
        xdoc("balancer").style.display = "unset";
        dude = new Dude(xdude.Position.X, 50, 50);
        shapes = {};
        $("#container").append("<h2>"+score+"</h2>");
        score = 0;
        fallSpeed = 4;
        accel = 5;
        xdoc("instruction").style.display = "flex";
        xdoc("scorlive").style.display = "unset";
        foodscore = 0;
        isGameOver = false;
        isSafeOver = false;
        xdoc("scorlive").style.display = "flex";
        $(".foodplive").html(foodscore);
    }   
    xdoc("buttonnewgame").style.transform = `translateX(${screenWidth/2}px)`;
    pausescore = false;
}

//THE FUNC TO OVER THE GAME
function gameOver(){
    xdoc('errbintorg').style.filter ="opacity(1)";
    xdoc("subtitle").innerHTML = "GAME OVER";
    xdoc("subtitle").style.color = "black";
    xdoc("buttonnewgame").style.transform = "translateX(0)";
    xdoc("balancer").style.display = "none";
    xdoc("instruction").style.display = "none";
    xdoc("chatbox").style.display = "none"; 
    xdoc("ohnobox").style.visibility="unset";
    xdoc("ohnobox").style.opacity="1";
    xdoc("ohnobox").style.transition="unset";
    xdoc("scoring").style.display = "flex";
    xdoc("scorlive").style.display = "none";
    
    fallSpeed = 0;
    accel = 0;
    pausescore = true;
    vfood = null;
    food.PosX = null;
    igniteFoodOnce = false;
    isGameOver = true;
    
    $(".endfoodplive").html("Food : " + foodscore)
    function fadeOutNo(){
        xdoc("ohnobox").style.visibility="hidden";
        xdoc("ohnobox").style.opacity="0";
        xdoc("ohnobox").style.transition="visibility 0s 2s, opacity 2s linear";
    }setTimeout(fadeOutNo,500);
    
    function resetIgniteFoodOnce(){
        isSafeOver = true;
        igniteFoodOnce = true;
        console.log(raincounter + " " + foodscore);

    }setTimeout(resetIgniteFoodOnce,2000);
}

//MAKE NEW RAINDROP
function shapeGenerate(){
    if (!isGameOver && animateDone) {
        new Shape(clearanceStart(Math.random()*screenWidth),30,30);
    }
}

//KIND OF SHIELD BEFORE PLAY
function clearanceStart(coor){
    
    if (coor > (screenWidth/2-296)-30 && coor < (screenWidth/2-296)+50 && igniteClear) {        
        returned = screenWidth-30;
    }else{
        returned = coor;
    }
    return returned;
}

//SCREEN UPDATER
function Updater() {
        ctx.clearRect(0, 0, screenWidth, screenHeight);
        for(i in shapes){
            shapes[i].update();
        }
        dude.update();
        if (typeof vfood !== 'undefined') {
            vfood.update();
        }
    // requestAnimationFrame(Updater);
}setInterval(Updater, 10);

//MAKE NEW SHAPE EVERY INTERVAL
setInterval(shapeGenerate, shapeGenerateSpeed);

var tomRunning,tomRest,tomCollided, jerryRest,jerryTeasing,jerryCollided,backGround;
var cat;
var mouse;

function preload()
{
    tomRunning = loadAnimation("tomThree.png","tomTwo.png");
    tomRest    = loadAnimation("tomOne.png");
    tomCollided= loadAnimation("tomFour.png");
 

    jerryRest     = loadAnimation("jerryOne.png");
    jerryTeasing  = loadAnimation("jerryTwo.png","jerryThree.png");
    jerryCollided = loadAnimation("jerryFour.png");

    backGround = loadImage("garden.png");
    
}

function setup()
{
    createCanvas(1000,800);
    
    cat = createSprite(850,650,10,10);
    cat.addAnimation("rest",tomRest);
    cat.scale=0.15;
    cat.debug=true;
    cat.setCollider("circle",0,0,450);
   
    mouse = createSprite(200,650,10,10);
    mouse.addAnimation("rest",jerryRest);
    mouse.scale = 0.15;
    mouse.debug=true;
    mouse.setCollider("circle",0,0,450);
}

function draw() {

    background(backGround);
    //Write condition here to evalute if tom and jerry collide

    if(keyCode===LEFT_ARROW)
    {
        cat.velocityX=-2;
        cat.addAnimation("running",tomRunning);
        cat.changeAnimation("running",tomRunning);
        mouse.addAnimation("teasing",jerryTeasing);
        mouse.changeAnimation("teasing",jerryTeasing);
//jerry.changeAnimation("teasing",jerryTeasing);
    }
 
    collisionDetection();

    drawSprites();
   
}

function collisionDetection()
{
    if(cat.x-mouse.x ==0 && cat.y- mouse.y ==0)
    {
        cat.velocityX=0;
        cat.addAnimation("collided",tomCollided);
        cat.changeAnimation("collided",tomCollided);
        mouse.addAnimation("collided",jerryCollided);
        mouse.changeAnimation("collided",jerryCollided);
    }
   
}

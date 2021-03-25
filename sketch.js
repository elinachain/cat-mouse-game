var cat,catI,catA,catA2;
var mouse,mouseI,mouseA,mouseA2;
var back,backI;

function preload(){

catI=loadImage("cat1.png");
catA=loadImage("cat2.png");
catA2=loadImage("cat4.png");

mouseI=loadImage("mouse1.png");
mouseA=loadImage("mouse2.png",);
mouseA2=loadImage("mouse4.png");

backI=loadImage("garden.png");
}

function setup(){
createCanvas(1000,800)

back=createSprite(200,100);
back.addImage(backI);
back.scale=2;


    cat=createSprite(950,550);
    cat.addImage(catI);
    cat.scale=0.1;

    mouse=createSprite(100,550);
    mouse.addImage(mouseI);
    mouse.scale=0.1;


}





function draw(){
background("green");

if(cat.isTouching(mouse)){
mouse.addImage(mouseA);
cat.velocityX=0;
cat.addImage(catA2);

}

mouse.setCollider("circle",0.1,0.1,2);
drawSprites();
}

function keyPressed(){

if(keyCode===LEFT_ARROW ){
cat.velocityX=-5;
cat.addImage(catA);
mouse.addImage(mouseA2)



}
}
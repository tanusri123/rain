var maxdrops =100;

function preload(){
 thunder1 = loadImage("thunderbolt/1.png");
 thunder2 = loadImage("thunderbolt/2.png");
 thunder3 = loadImage("thunderbolt/3.png")
 thunder4 = loadImage("thunderbolt/4.png")
}

function setup(){
   engine = Engine.create();
    world = engine.world;
    createCanvas(400,700);
    umbrella = new Umdrella(200,500);

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            Drop.push(new createDrop(random(0,400),random(0,400)));
        }
    }
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),random()})
    }
}

function draw(){
    engine.update(engine);
    background(0);
    friction:0.1;
    rand = Math.round;{random:(1,4)}
    if(frameCount%50 === 0 ){
        thunderCreateFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
    }
    switch(rand){
        case 1 = thunder.addImage(thunder1):
        break;
        case 2 = thunder.addImage(thunder2):
        break;
        case 3  = thunder.addImage(thunder3):
        break;
        case 4  = thunder.addImage(thunder4):
        break;        
    }
}   


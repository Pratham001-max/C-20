var mr,fr ;


function setup() {
  createCanvas(1200,800);
  fr = createSprite(600,400,50,80);
  fr.shapeColor = "yellow" ;
  fr.debug = true ;

  mr = createSprite(100,100,80,50);     
  mr.shapeColor = "yellow";
  mr.debug = true ;

}

function draw() {
  background("blue");  

  mr.x = World.mouseX;
  mr.y = World.mouseY;

  console.log(mr.x - fr.x );
  console.log(mr.width/2 + fr.width/2) ;
  
  if(mr.x - fr.x < fr.width/2 + mr.width/2
    && fr.x - mr.x < fr.width/2 + mr.width/2
    && mr.y - fr.y < fr.height/2 + mr.height/2
    && fr.y - mr.y < fr.height/2 + mr.height/2){
    
      mr.shapeColor = "red" ;
    fr.shapeColor = "red" ;
    }

    else{
      mr.shapeColor = "yellow";
      fr.shapeColor = "yellow";
    }

  drawSprites();


}


var wall, bullet;
var speed, weight, damage;
var thickness, bulletRightEdge, wallLeftEdge;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200,50, 10);

  speed = random(55, 90);
  weight = random(400, 1500);

  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height/2);
  
  bullet.velocityX = 4 *speed;
  bullet.shapeColor = "white";

  //console.log(damage);

}

function draw() {
  background("black");
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    damage = (0.5 * weight * speed * speed)/thickness * thickness * thickness;
    if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
      
    }
    
  }
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }


}
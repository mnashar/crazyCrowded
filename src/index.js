import "./styles/index.scss";
let canvas = document.querySelector("#canvas");
// if (canvas.getContext) {
  
let context = canvas.getContext('2d');
let road = new Image;
road.src ="src/images/road_small.png";
// road.height="430";
road.onload = () => {
  context.drawImage(road, 0, 0);
  requestAnimationFrame(gameLoop);
}
  
let car =new Image;
car.src = "src/images/Audi.png";


let yOffset=-426;

function gameLoop(){

  if(yOffset>=0) yOffset=-426;

  context.drawImage(road,0,yOffset);
  context.drawImage(road, 0, yOffset + 426);
  context.drawImage(road, 0, yOffset+852);
  yOffset+=6;

  context.drawImage(car,254,280,car.width/2,car.height/2);
  requestAnimationFrame(gameLoop);
}

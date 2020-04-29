import "./styles/index.scss";
import Game from "./game";
let canvas = document.querySelector("#canvas");  
let context = canvas.getContext('2d');
let game=new Game(context);
requestAnimationFrame(gameLoop);

  
let car =new Image;
car.src = "src/images/Audi.png";


let yOffset=-426;

function gameLoop(){

  game.update();

  context.drawImage(car,254,280,car.width/2,car.height/2);
  requestAnimationFrame(gameLoop);
}

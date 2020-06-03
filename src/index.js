import "./styles/index.scss";
import Game from "./game";


let canvas = document.querySelector("#canvas");

let carNo=0;

// document.addEventListener("keydown", function (e) {


let handlerDocumentKeyDown= function (e) {

  // Number 13 is the "Enter" key on the keyboard
  if (e.keyCode === 13) {

    document.removeEventListener("keydown", handlerDocumentKeyDown);
    
    const messagesDiv = document.getElementById("messages");
    messagesDiv.style.display="none";
    
    let context = canvas.getContext('2d');
    let game = new Game(context);
    game.selectedCarNo = carNo;
    debugger;
    requestAnimationFrame(gameLoop);

    function gameLoop() {
      game.update();
      requestAnimationFrame(gameLoop);
    }
    
    // alert(messagesDiv.display);
    // Trigger the button element with a click
    // document.getElementById("myBtn").click();


  }
};


document.addEventListener("keydown", handlerDocumentKeyDown);

window.addEventListener("DOMContentLoaded", () => {
  // document.onkeydown = e => this.beforePlayGame(e);
  const leftBtn = document.getElementById("left-arrow");
  const rightBtn = document.getElementById("right-arrow");
  const chooseCar = document.getElementById("choose-car");
  
  
  leftBtn.onclick = function () {
    let carIndex = chooseCar.src.indexOf("car") + 3;
    carNo = Number(chooseCar.src.substring(carIndex, carIndex + 1));

    if (carNo > 0) {
      carNo -= 1;
    }
    else{
      carNo = 8;
    }

    // game.selectedCarNo = carNo;
    chooseCar.src = "src/images/car" + carNo + ".png";
  }

  rightBtn.onclick = function () {
    let carIndex = chooseCar.src.indexOf("car")+3;
    carNo = Number(chooseCar.src.substring(carIndex, carIndex+1));
    
    if (carNo<8){
      carNo+=1;
    }
    else{
      carNo = 0;
    }
    
    // game.selectedCarNo = carNo;
    chooseCar.src = "src/images/car" + carNo+".png" ;
  }

  // beforePlayGame(e){
  // };

  //   if (e.keyCode === 13) {
  //     const messagesDiv = document.getElementById("messages");
  //     messagesDiv.display="none";

  //   }
  // }
  
});
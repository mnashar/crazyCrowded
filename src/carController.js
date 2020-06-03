export default class carController{

    constructor(game){
        
        this.game = game;
        this.road=game.road;
        this.playerCar=game.playerCar;
        this.init();
    }

    init(){
        
        document.addEventListener("keydown",(e)=>{
            // alert(e.keyCode);
            switch(e.keyCode){
                case 37: //left
                    this.playerCar.moveLeft();
                    break;
                case 38: //up
                    if(!this.game.paused){
                        this.playerCar.speed +=1;
                    }
                    break;
                case 39: //right
                    this.playerCar.moveRight();
                    break;
                case 40: //down;
                    if (!this.game.paused)
                    this.playerCar.speed -= 5;
                    break;
                case 13:
                    //here
                    // this.paused = !(this.paused );
                    // this.game.pauseUnpause();
                    // pauseUnpause();
                    break;
                default:
                    
                    break;
            }
        });
    }

    
}

////////////////////////////////////////////////
/*
if (e.keyCode !== 13) {
    return;
}
//Rerun it
this.scoreboard.startTime = Date.now();

this.trafficCar = [];
this.playerCar.resetPosition();
this.playerCar.speed = 0;
this.paused = false;
let screenTryAgain = document.querySelector(".try-again");
screenTryAgain.style.display = "none";
document.onkeydown = null;
*/
import Road from "./road";
import PlayerCar from "./playerCar";
import CarController from "./carController";
import TrafficCar from "./trafficCar";
import {isCollide} from "./utilities";
import Scoreboard from "./scoreboard";
export default class Game{
    constructor(context){
        this.context = context;
        this.road=new Road(this);
        this.playerCar=new PlayerCar(this);
        this.scoreboard=new Scoreboard(this);
        this.paused=false;
        
       
        this.CarController=new CarController(this);

        this.trafficCar=[];
        this.carNos=[];
        setInterval(()=>this.populateTraffic(),2000);

        this.crash = new Audio("src/sounds/carCrash.mp3");
        this.crash.autoplay=false;
        this.crash.muted=true;
        
        
    }

    // pauseUnpause() {
    //     if (this.paused) {
    //         this.game.playerCar.speed = 0;
    //         let screenTryAgain = document.querySelector(".try-again");
    //         screenTryAgain.style.display = "Block";
    //         // this.game.tra
    //     }
    //     else {

    //     }
    // }

    populateTraffic(){
        if(this.paused) return;

        let trafficCar=new TrafficCar(this);
         console.log("array: "+this.carNos);
        if (this.carNos.indexOf(trafficCar.lane)==-1){
             console.log("carNo: "+trafficCar.carNo);
            this.trafficCar.push(trafficCar);
            this.carNos.push(trafficCar.lane);
        }
        else{
            console.log("Existing carNo: " + trafficCar.carNo+"  Lane: "+trafficCar.lane);
        }
    }
    tryAgain(e){
        if(e.keyCode!==13){
            return;
        }
        
        this.scoreboard.startTime = Date.now();

        this.trafficCar=[];
        this.playerCar.resetPosition();
        this.playerCar.speed=0;
        this.paused=false;
        let screenTryAgain=document.querySelector(".try-again");
        screenTryAgain.style.display="none";
        document.onkeydown=null;
    }


    update(){
        if (this.paused) return;

        this.road.update();
        this.playerCar.update();
        this.scoreboard.update();
        this.trafficCar.forEach(trafficCar=>{
            trafficCar.update();
        });

        if(isCollide(this.playerCar,this.trafficCar)){
            this.paused=true;
            this.crash.muted = false;
            this.crash.play();
            let screenTryAgain=document.querySelector(".try-again");
            screenTryAgain.style.display="block";

            document.onkeydown=e=>this.tryAgain(e);
        }
    }
}
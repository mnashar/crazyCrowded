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
        
        // new CarController({
        //     road:this.road,
        //     playerCar:this.playerCar
        // });
        this.CarController=new CarController(this);

        this.trafficCar=[];
        setInterval(()=>this.populateTraffic(),3000);

        this.crash = new Audio("src/sounds/carCrash.mp3");
        this.crash.autoplay=false;
        this.crash.muted=true;
        
    }

    populateTraffic(){
        if(this.paused) return;

        let trafficCar=new TrafficCar(this);
        this.trafficCar.push(trafficCar);
    }
    tryAgain(e){
        if(e.keyCode!==13){
            return;
        }
        
        this.scoreboard.startTime = Date.now();

        this.trafficCar=[];
        this.playerCar.resetPosition();
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

            let screenTryAgain=document.querySelector(".try-again");
            screenTryAgain.style.display="block";

            document.onkeydown=e=>this.tryAgain(e);
        }
    }
}
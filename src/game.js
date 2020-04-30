import Road from "./road";
import PlayerCar from "./playerCar";
import CarController from "./carController";
import TrafficCar from "./trafficCar";
import {isCollide} from "./utilities";
export default class Game{
    constructor(context){
        this.context = context;
        this.road=new Road(this);
        this.playerCar=new PlayerCar(this);
        new CarController({
            road:this.road,
            playerCar:this.playerCar
        });

        this.trafficCar=[];
        setInterval(()=>this.populateTraffic(),3000);
        this._paused=false;

        this.crash = new Audio("src/sounds/carCrash.mp3");
        this.crash.autoplay=false;
        this.crash.muted=true;
        
    }

    populateTraffic(){
        if(this._paused) return;

        let trafficCar=new TrafficCar(this);
        this.trafficCar.push(trafficCar);
    }
    tryAgain(e){
        console.log(e.keyCode);
        if(e.keyCode!==13){
            return;
        }
        this.trafficCar=[];
        this.playerCar.resetPosition();
        this._paused=false;
        let screenTryAgain=document.querySelector(".try-again");
        screenTryAgain.style.display="none";
        document.onkeydown=null;
    }
    update(){
        if (this._paused) return;

        this.road.update();
        this.playerCar.update();
        this.trafficCar.forEach(trafficCar=>{
            trafficCar.update();
        });

        if(isCollide(this.playerCar,this.trafficCar)){
            this._paused=true;
            this.crash.muted = false;
            this.crash.play();

            let screenTryAgain=document.querySelector(".try-again");
            screenTryAgain.style.display="block";

            document.onkeydown=e=>this.tryAgain(e);
        }
    }
}
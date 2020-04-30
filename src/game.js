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
    }

    populateTraffic(){
        let trafficCar=new TrafficCar(this);
        this.trafficCar.push(trafficCar);
    }
    update(){
        this.road.update();
        this.playerCar.update();
        this.trafficCar.forEach(trafficCar=>{
            trafficCar.update();
        });

        if(isCollide(this.playerCar,this.trafficCar)){
            // alert("Accident!");
        }
    }
}
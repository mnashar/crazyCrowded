import Road from "./road";
import PlayerCar from "./playerCar";
import CarController from "./carController";
import TrafficCar from "./trafficCar";
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
        // new this.trafficCar(this);
        setInterval(()=>this.populateTraffic(),5000);
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
    }
}
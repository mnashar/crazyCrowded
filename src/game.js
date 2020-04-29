import Road from "./road";
import PlayerCar from "./playerCar";
import CarController from "./carController";
export default class Game{
    constructor(context){
        this.context = context;
        this.road=new Road(this);
        this.playerCar=new PlayerCar(this);
        new CarController({
            road:this.road,
            playerCar:this.playerCar
        });
    }
    update(){
        this.road.update();
        this.playerCar.update();
    }
}
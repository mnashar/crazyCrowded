import Road from "./road";
import PlayerCar from "./playerCar";
export default class Game{
    constructor(context){
        this.context = context;
        this.road=new Road(this);
        this.playerCar=new PlayerCar(this);
    }
    update(){
        this.road.update();
        this.playerCar.update();
    }
}
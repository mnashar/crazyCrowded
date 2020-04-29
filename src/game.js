import Road from "./road";
export default class Game{
    constructor(context){
        this.context = context;
        this.road=new Road(this);
    }
    update(){
        this.road.update();
    }
}
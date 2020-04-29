export default class TrafficCar{
    constructor(game){
        this.game=game;
        this.context=this.game.context;
        this.car=new Image;
        
        this.carNo=Math.round(Math.random()*7)+1;
        this.car.src = "src/images/car" + this.carNo+".png";
        this.positionY=0;
        this.lane=Math.floor(Math.random()*3);
        this.lanePosX=[90,170,255,340];
    }

    update(){
        this.context.drawImage(this.car, this.lanePosX[this.lane], this.positionY, this.car.width / 2, this.car.height / 2);

        // X   90  170  255  340

    }
}
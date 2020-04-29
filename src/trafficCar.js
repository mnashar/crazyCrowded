export default class TrafficCar{
    constructor(game){
        this.game=game;
        this.context=this.game.context;
        this.car=new Image;
        
        this.carNo=Math.round(Math.random()*7)+1;
        this.car.src = "src/images/car" + this.carNo+".png";
        this.positionY=-120;
        this.positionY=(Math.random()*500)*-1;
        this.speed=(Math.random()*7) +3;
        this.lane=Math.floor(Math.random()*3);
        this.lanePosX=[90,170,255,340];
    }

    update(){
        this.positionY += this.game.playerCar.speed/5+this.speed;
        this.context.drawImage(this.car, this.lanePosX[this.lane], this.positionY, this.car.width / 2, this.car.height / 2);
        
        if(this.positionY>=700){
            this.game.trafficCar.splice(this.game.trafficCar.indexOf(this),1);
        }
    }
}
export default class TrafficCar{
    constructor(game){
        this.game=game;
        this.context=this.game.context;
        this.car=new Image;
        
        this.carNo=Math.round(Math.random()*7);
        this.car.src = "src/images/car" + this.carNo+".png";
        this.positionY=-120;
        this.positionY=(Math.random()*500)*-1;
        this.speed=(Math.random()*7) +3;
        this.lane=Math.floor(Math.random()*4);
        this.lanePosX = [125, 205, 292,375];
        this.length=100;
        this.length = 100;
    }

    get positionX(){
        return this.lanePosX[this.lane];
    }

   

    update(){
        this.positionY += this.game.playerCar.speed/5+this.speed;
        this.context.drawImage(this.car, this.lanePosX[this.lane], this.positionY, this.car.width / 2, this.car.height / 2);
        
        if(this.positionY>=700){
            this.game.trafficCar.splice(this.game.trafficCar.indexOf(this),1);
        }
    }
}
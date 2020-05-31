export default class TrafficCar{
    constructor(game){
        this.game=game;
        this.context=this.game.context;
        this.car=new Image;
        
        this.carNo=Math.round(Math.random()*7)+1;
        this.car.src = "src/images/car" + this.carNo+".png";
        this.positionY=-120;
        this.positionY=(Math.random()*500)*-1;
        // this.speed=(Math.random()*7) +3;
        this.speed = (Math.random() * 7) ;

        this.lane=Math.floor(Math.random()*4);
        // this.lanePosX = [125, 205, 292,375];
        this.lanePosX = [132, 212, 299, 383];

        // this.length = 110;
        // this.width = 42;
        this.length = 73;
        this.width = 28;
    }

    get positionX(){
        return this.lanePosX[this.lane];
    }

   

    update(){
        // this.positionY += this.game.playerCar.speed/7+this.speed;
        this.positionY += this.speed;
        this.context.drawImage(this.car, this.lanePosX[this.lane], this.positionY, this.car.width / 3, this.car.height / 3);
        
        if(this.positionY>=700){
            // console.log("out");
            let unWantedCarIndex = this.game.trafficCar.indexOf(this);
            this.game.trafficCar.splice(unWantedCarIndex,1);
            this.game.carNos.splice(unWantedCarIndex, 1);

        }
    }
}
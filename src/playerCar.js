export default class playerCar{

    constructor(game){
        this.game=game;
        this.context=this.game.context;

        this.car=new Image;
        this.car.src = "src/images/Audi.png";
    }

    update(){
        this.context.drawImage(this.car, 254, 280, this.car.width / 2, this.car.height / 2);

    }
}
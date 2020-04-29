export default class playerCar{

    constructor(game){
        this.game=game;
        this.context=this.game.context;
        this._positionX=254;
        this._positionY = 280;

        this.car=new Image;
        this.car.src = "src/images/Audi.png";
    }

    moveLeft(){
        this._positionX -=5;
        // left 200
        //right 170
        if(this._positionX<=55) this._positionX=55;
    }
    moveRight() {
        this._positionX += 5;
        // left 200
        //right 170
        if (this._positionX >= 370) this._positionX = 370;
    }

    update(){
        this.context.drawImage(this.car, this._positionX, this._positionY, this.car.width / 2, this.car.height / 2);

    }
}
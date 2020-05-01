export default class playerCar{

    constructor(game){
        this.game=game;
        this.context=this.game.context;
        this._positionX = 292;
        this._positionY = 280;
        this._speed=25;
        this.maxSpeed=120;

        this.car=new Image;
        this.car.src = "src/images/Audi.png";
        this.length=100;
        this.width = 100;
    }

    get positionX(){
        return this._positionX;
    }

    get positionY(){
        return this._positionY;
    }

    moveLeft(){
        this._positionX -=20;
        // left 200
        //right 170
        if(this._positionX<=55) this._positionX=55;
    }
    moveRight() {
        this._positionX += 20;
        // left 200
        //right 170
        if (this._positionX >= 370) this._positionX = 370;
    }

    resetPosition(){
        this._positionX = 292;
        this._positionY = 280;
    }

    set speed(speed){
        if(speed>=this.maxSpeed){
            this._speed=this.maxSpeed;
        } else if(speed<=25){
            this._speed=25;
        } else{
            this._speed=speed;
        }

        document.querySelector(".speedo-meter .speed").innerHTML=this._speed;
    }
    get speed(){
        return this._speed;
    }
    update(){
        this.context.drawImage(this.car, this._positionX, this._positionY, this.car.width / 2, this.car.height / 2);

    }
}
export default class carController{
    constructor(options){
        this.road=options.road;
        this.playerCar=options.playerCar;

        this.init();
    }

    init(){
        document.addEventListener("keydown",(e)=>{
            switch(e.keyCode){
                case 37: //left
                    this.playerCar.moveLeft();
                    break;
                case 38: //up
                    break;
                case 39: //right
                    this.playerCar.moveRight();
                    break;
                case 40: //down;
                    break;
                default:
                    break;
            }
        });
    }
}
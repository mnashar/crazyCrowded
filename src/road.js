export default class Road {
    constructor(game) {
        this.game = game;
        this.context=this.game.context;
        this.yOffset = -426;
        this.road = new Image;
        this.road.src = "src/images/road_small.png";
    }

    update(){
        if (this.yOffset >= 0) this.yOffset = -426;

        this.context.drawImage(this.road, 0, this.yOffset);
        this.context.drawImage(this.road, 0, this.yOffset + 426);
        this.context.drawImage(this.road, 0, this.yOffset + 852);
        // this.yOffset += 6;
        this.yOffset += this.game.playerCar.speed/5;
    }
   
}
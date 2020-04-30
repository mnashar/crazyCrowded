export function isCollide(playerCar,trafficCar){
    for(let i=0;i<trafficCar.length;i++){
        let yRange1 = playerCar.positionY - trafficCar[i].length;
        let yRange2 = playerCar.positionY + playerCar.length;

        let xRange1 = playerCar.positionX;
        let xRange2 = playerCar.positionX + playerCar.width;

        let trafficCarPositionX =trafficCar[i].positionX;//.lanePosX[trafficCar[i].lane];

        

        debugger;

        if (trafficCar[i].positionY >= yRange1 && trafficCar[i].positionY <= yRange2 && 
            ((trafficCarPositionX >= xRange1 && trafficCarPositionX <=xRange2) 
           || 
            (trafficCarPositionX+ trafficCar[i].width >= xRange1 && 
            trafficCarPositionX + trafficCar[i].width <= xRange2 ))
            ){
            return true;
        }

    }
    return false;
}
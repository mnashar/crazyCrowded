export function isCollide(playerCar,trafficCar){
    for(let i=0;i<trafficCar.length;i++){

        let x1Condition = trafficCar[i].positionX >= playerCar.positionX 
                            && ( trafficCar[i].positionX <= (playerCar.positionX + playerCar.width)) ;

       

        let x2Condition = trafficCar[i].positionX + trafficCar[i].width>= playerCar.positionX
            && (trafficCar[i].positionX + trafficCar[i].width<= (playerCar.positionX + playerCar.width));


        let y1Condition = (trafficCar[i].positionY + trafficCar[i].length) >= playerCar.positionY
            && ((trafficCar[i].positionY + trafficCar[i].length ) <= (playerCar.positionY + playerCar.length));



        // console.log((x1Condition || x2Condition) && y1Condition);
        
        let isCollide = (x1Condition || x2Condition) && y1Condition;

        

        if(isCollide) return true;



        // let yRange1 = playerCar.positionY - trafficCar[i].length;
        // let yRange2 = playerCar.positionY + playerCar.length;

        // let xRange1 = playerCar.positionX;
        // let xRange2 = playerCar.positionX + playerCar.width;

        // let trafficCarPositionX =trafficCar[i].positionX;//.lanePosX[trafficCar[i].lane];

        

        // if (trafficCar[i].positionY >= yRange1 && trafficCar[i].positionY <= yRange2 && 
        //     ((trafficCarPositionX >= xRange1 && trafficCarPositionX <=xRange2) 
        //    || 
        //     (trafficCarPositionX+ trafficCar[i].width >= xRange1 && 
        //     trafficCarPositionX + trafficCar[i].width <= xRange2 ))
        //     ){
        //     return true;
        // }

    }
    return false;
}
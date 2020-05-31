export function isCollide(playerCar,trafficCar){
    for(let i=0;i<trafficCar.length;i++){

        let x1Condition = trafficCar[i].positionX >= playerCar.positionX 
                            && ( trafficCar[i].positionX <= (playerCar.positionX + playerCar.width)) ;

       

        let x2Condition = trafficCar[i].positionX + trafficCar[i].width>= playerCar.positionX
            && (trafficCar[i].positionX + trafficCar[i].width<= (playerCar.positionX + playerCar.width));


        let y1Condition = (trafficCar[i].positionY + trafficCar[i].length) >= playerCar.positionY
            && ((trafficCar[i].positionY + trafficCar[i].length ) <= (playerCar.positionY + playerCar.length));
        
        let isCollide = (x1Condition || x2Condition) && y1Condition;

        

        if(isCollide) return true;


    }
    return false;
}
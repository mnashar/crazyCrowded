import Road from "./road";
import PlayerCar from "./playerCar";
import CarController from "./carController";
import TrafficCar from "./trafficCar";
import {isCollide} from "./utilities";
import Scoreboard from "./scoreboard";
export default class Game{
    constructor(context){
        
        this.context = context;
        this.road=new Road(this);
        this.playerCar=new PlayerCar(this);
        this.scoreboard=new Scoreboard(this);
        this.paused=false;
        this.justStarted=true;
        
       
        this.CarController=new CarController(this);

        this.trafficCar=[];
        this.carNos=[];
        this.selectedCarNo=0;

        setInterval(() => this.pauseAtTheBeginning(), 10);
        setInterval(()=>this.populateTraffic(),1000);

        
        
        this.crash = new Audio("src/sounds/carCrash.mp3");
        this.crash.autoplay=false;
        this.crash.muted=true;
        
        // marmar
        document.onkeydown = e => this.playGame(e);
        
        
    }

   

    populateTraffic(){
        
        if(this.paused) return;
        // if (!this.justStarted && this.paused) return;

        console.log("array: " + this.carNos);


        let trafficCar=new TrafficCar(this);
         console.log("array: "+this.carNos);
        if (this.carNos.indexOf(trafficCar.lane)==-1){
             console.log("carNo: "+trafficCar.carNo);
            if (trafficCar.carNo!==this.selectedCarNo){
                this.trafficCar.push(trafficCar);
                this.carNos.push(trafficCar.lane);
            }
        }
        else{
            console.log("Existing carNo: " + trafficCar.carNo+"  Lane: "+trafficCar.lane);
        }

        this.playerCar.speed+=1;
        // this.paused=true;

        
    }
    
    
    playGame(e){
        
        // alert(e.keyCode);
           
        if(e.keyCode!==13){
            return;
        }
        if (!(this.paused)) //not paused, we gonna paused it now
        {
            this.paused = true;
            // this.crash.muted = false;
            // this.crash.play();
            // let screenTryAgain = document.querySelector(".try-again");
            // screenTryAgain.style.display = "block";
        }
        else //paused, we gonna play it now
        {
            if (isCollide(this.playerCar, this.trafficCar)) {
                this.scoreboard.startTime = Date.now();
                this.trafficCar = [];
                this.carNos=[];
                this.playerCar.resetPosition();
                this.playerCar.speed = 0;
            }
            
            this.paused=false;
            let screenTryAgain=document.querySelector(".try-again");
            screenTryAgain.style.display="none";
            // document.onkeydown=null;
        }
    }


    update(){
        
        if (this.paused) return;

        this.road.update();
        this.playerCar.update();
        this.scoreboard.update();
        this.trafficCar.forEach(trafficCar=>{
            trafficCar.update();
        });

        if(isCollide(this.playerCar,this.trafficCar)){
            this.paused=true;
            this.crash.muted = false;
            this.crash.play();
            // const messagesDiv = document.getElementById("messages");
            // messagesDiv.style.display = "block";
            let screenTryAgain=document.querySelector(".try-again");
            screenTryAgain.style.display="block";

            // document.onkeydown = e => this.tryAgain(e);
        }

        
    }


    pauseAtTheBeginning(){
        // alert("aaaaa");
        // if (this.justStarted) {
        //     this.justStarted = false;
        //     this.paused = true;
        // }
    }
}
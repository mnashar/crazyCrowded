export default class Scoreboard{

    constructor(game){
        this.game=game;

        this.timeMeter=document.querySelector(".time-meter .time");
        this.startTime=Date.now();
    }

    update(){
        this.updateTime();
    }

    updateTime(){
        let timeElapsed=Date.now()-this.startTime;
        let time=new Date(timeElapsed);

        let hours=time.getUTCHours()<10 ? '0'+time.getUTCHours() : time.getUTCHours();
        let minutes=time.getUTCMinutes()<10 ? '0'+time.getUTCMinutes() : time.getUTCMinutes();
        let seconds = time.getUTCSeconds() < 10 ? '0' + time.getUTCSeconds() : time.getUTCSeconds();
        this.milliseconds = time.getMilliseconds() < 10 ? '0' + time.getMilliseconds() : time.getMilliseconds();
        let milli=Math.floor(this.milliseconds/100);
        this.timeMeter.innerHTML=`${hours}:${minutes}:${seconds}:${milli}`;
    }
}
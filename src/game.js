let canvas=document.querySelector("#canvas");
let context=canvas.getContext("2d");
let road=new Image;
road.src="../images/road.png";
road.onload=()=>{
    alert("ssss");
    requestAnimationFrame(gameLoop);
}
let yOffset=-512;

function gameLoop(){
    context.drawImage(road,0,0);
    requestAnimationFrame(gameLoop);
}
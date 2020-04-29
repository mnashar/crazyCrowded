let canvas=document.querySelector("#canvas");
let context=canvas.getContext("2d");
let road=new Image;
// road.src="../images/road.png";
road.src = 
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYqgeu-tsnV4rIBdoLbYGDMXvyvme1B0bIi57Ws1zWgckLOkK8&usqp=CAU";
road.onload=()=>{
    alert("ssss");
    requestAnimationFrame(gameLoop);
}
let yOffset=-512;

function gameLoop(){
    context.drawImage(road,0,0);
    requestAnimationFrame(gameLoop);
}
import "./styles/index.scss";
let canvas = document.querySelector("#canvas");
if (canvas.getContext) {
  // alert(canvas.height);
  let context = canvas.getContext('2d');

  // context.fillStyle = ("yellow");
  // context.fillRect(0, 0, canvas.width, canvas.height);
  
  let road = new Image;
  road.src = "./images/road.png";
  alert(road.height);
  context.drawImage(road, 0, 0);
}


// //alert1
// alert(road.clientHeight);

road.onload = () => {
  //alert2
  // alert(road.clientHeight);
}


// requestAnimationFrame(gameLoop);
function gameLoop() {
  context.drawImage(road, 0, 0);
  requestAnimationFrame(gameLoop);
}

// const testObj = {
//   key1: "hi",
//   key2: {
//     key3: "Hello",
//   },
// };

// const greeting = testObj?.key2?.key3 || testObj.key1;
// window.addEventListener("DOMContentLoaded", () => {
//   document.body.classList.add("center");
//   const card = document.createElement("div");
//   card.classList.add("card", "center");
//   card.innerHTML = `<h2>${greeting} World! Mannoooo</h2>`;
//   document.body.append(card);
//   const imgCard = document.createElement("div");
//   imgCard.classList.add("card", "center", "image-card");
//   document.body.appendChild(imgCard);
// });

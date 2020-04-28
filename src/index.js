import "./styles/index.scss";
let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");
let road = new Image;
road.src = "./images/road.png";
road.onload = () => {
  requestAnimationFrame(gameLoop);
}
let yOffset = -512;

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

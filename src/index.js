



import "./styles/index.scss";
let canvas = document.querySelector("#canvas");
if (canvas.getContext) {
  
  let context = canvas.getContext('2d');
  let road = new Image;
  road.src ="src/images/road.png";
  road.height="430";
  // road.src = "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1206870-847__1&recipeName=350";
  road.onload = () => {
    
    context.drawImage(road, 0, 0);
  }
  
}










// //alert1
// alert(road.clientHeight);

// road.onload = () => {
//   //alert2
//   // alert(road.clientHeight);
// }


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

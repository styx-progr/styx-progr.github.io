function loadCanvas() {
  var canvas = document.getElementById("pixelart");
  var ctx = canvas.getContext("2d");
  for (let i=0; i<180;i++){
    for (let j=0; j<90;j++){
      ctx.fillStyle = "#F2F2F2";
      ctx.fillRect(i*10, j*10, 10, 10);
    }
  }

}

function drawSquare(canvas, event) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  console.log("x: " + x + " y: " + y)
  // var drawing = document.getElementById("pixelart");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#04B45F";
  ctx.fillRect(Math.floor(x/10)*10, Math.floor(y/10)*10, 10, 10);
}

// function fitToContainer(canvas){
//   // Make it visually fill the positioned parent
//   canvas.style.width ='100%';
//   canvas.style.height='100%';
//   // ...then set the internal size to match
//   canvas.width  = canvas.offsetWidth;
//   canvas.height = canvas.offsetHeight;
// }

var canvas = document.getElementById("pixelart");
if(canvas){
  canvas.addEventListener('click', drawTestSquares(), false);
}

function drawTestSquares() {
  var c = document.getElementById("pixelart");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 10, 10);

  ctx.fillStyle = "#04B45F";
  ctx.fillRect(10, 10, 10, 10);

  ctx.fillStyle = "#00FFFF";
  ctx.fillRect(20, 20, 10, 10);

  ctx.fillStyle = "#C8FE2EF";
  ctx.fillRect(30, 30, 10, 10);
  
  ctx.fillStyle = "#FE2EC8";
  ctx.fillRect(140, 140, 10, 10);

  ctx.fillStyle = "#FE2EC8";
  ctx.fillRect(400, 300, 30, 30);
}

function  getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
    scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y
    console.log("Getting positions")
    return {
      x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
      y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
    }
  }


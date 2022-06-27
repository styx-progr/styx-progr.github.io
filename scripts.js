const canvas = document.getElementById("pixelart");
function draw() {
    const canvas = document.getElementById("pixelart");

    const resize = () => {
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight;
    }

    resize()
    window.addEventListener('resize', resize)

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 20, 20);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(20, 20, 30, 30);
      }

}


function  getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
    scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y
    alert("Calculating the position")
    return {
      x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
      y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
    }
  }

  function drawSquare() {
    var rect = canvas.getBoundingClientRect(); // abs. size of element
    scaleX = canvas.width / rect.width;    // relationship bitmap vs. element for x
    scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y
  
    x: (evt.clientX - rect.left) * scaleX;   // scale mouse coordinates after they have
    y: (evt.clientY - rect.top) * scaleY;     // been adjusted to be relative to element
    
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x-5, y-5, x+5, y+5);
  }


  canvas.addEventListener('click', getMousePos(canvas), false);
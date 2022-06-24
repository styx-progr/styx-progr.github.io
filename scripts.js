
function draw() {
    const canvas = document.getElementById("canvas");

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
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
  
    return {
      x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
      y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
    }
  }

  function drawSquare(canvas, evt) {
    x, y = getMousePos(canvas, evt);
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(x, y, x+10, y+10);
  }

  let btn = document.getElementById("canvas");
  btn.addEventListener('click', event => {
    drawSquare(canvas, event);
  });
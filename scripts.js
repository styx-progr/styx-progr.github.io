function loadCanvas() {
  var canvas = document.getElementById("pixelart");
  var ctx = canvas.getContext("2d");
  var colourdict = {};
  for (let i=0; i<180;i++){
    for (let j=0; j<90;j++){
      colourdict = initColorFile(colourdict, i*10, j*10);
      ctx.fillStyle = "#F2F2F2";
      ctx.fillRect(i*10, j*10, 10, 10);
    }
  }
  // save the colourdict to a file
  const fs = require('fs');
  var colourfile = JSON.parse(colourdict);
  console.log(colourfile);
  var colourfileContent = JSON.stringify(colourfile);
  console.log(colourfileContent);
  // Now we write all colours and their positions to a JSON file
  fs.writeFile("colours.json", colourfileContent, 'utf8', function(err) {
    if (err) {
      console.log("There was an error while writing to JSON file");
      return console.log(err);
    }
    console.log("JSON file has been saved successfully!")
  })
}

function initColorFile(colourdict, xpos, ypos) {
  xstring = xpos.toString();
  ystring = ypos.toString();
  colourdict[xstring+ystring] = "#F2F2F2"
  return colourdict;
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

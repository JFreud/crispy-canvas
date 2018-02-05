var canvas = document.getElementById("slate");
var toggler = document.getElementById("toggler");
var clear = document.getElementById("clearer");
var ctx = canvas.getContext("2d");
var toggle = 0;
ctx.beginPath();

function toggle_button() {
  if (toggle) {
    toggle = 0;
  }
  else {
    toggle = 1;
  }
}


function execute() {
  var canv = canvas.getBoundingClientRect();
  ctx.moveTo(mouseX, mouseY);
  var mouseX = event.clientX - canv.left;
  var mouseY = event.clientY - canv.top;
  if (toggle) {
    squar(mouseX, mouseY, 30, 30);
  }
  else {
    circ(mouseX, mouseY, 15);
  }
}

function squar(x, y, xMag, yMag) {
  ctx.fillStyle = "green";
  ctx.fillRect(x - xMag / 2, y - yMag / 2, xMag, yMag);
  ctx.lineTo(x,y);
  ctx.stroke();
}

function circ(x, y, r) {
  ctx.fillStyle = "blue";
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  // ctx.fill();
  ctx.lineTo(x,y);
  ctx.stroke();
}


function clearall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.closePath();
  ctx.beginPath();
  toggle = 0;
}


canvas.addEventListener('click', execute);
toggler.addEventListener('click', toggle_button);
clear.addEventListener('click', clearall)

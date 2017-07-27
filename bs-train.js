var c = document.getElementById("bs-train");
var ctx = c.getContext("2d");
var img = document.getElementById("wall-img");
var mode = 'start';

function reset() {
  ctx.drawImage(img,0,0,c.width,c.height);
}

window.onload = function() {
  w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
  if (w > 500) w = 500;
  c.style.width = w + "px";
  c.style.height = w + "px";
  c.width = w;
  c.height = w;
  reset();
}

function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

c.addEventListener('click', function(event){
  coords = c.relMouseCoords(event);
  x = coords.x;
  y = coords.y - 15;
  // rect = c.getBoundingClientRect();
  // x = event.clientX - rect.left;
  // y = event.clientY - rect.top;
  console.log(x, y);
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI, false);
  console.log(mode);
  if (mode == 'start') ctx.fillStyle = 'rgba(0,255,0,0.25)';
  if (mode == 'hold') ctx.fillStyle = 'rgba(0,0,255,0.25)';
  if (mode == 'finish') ctx.fillStyle = 'rgba(255,0,0,0.25)';
  ctx.fill();
}, false);

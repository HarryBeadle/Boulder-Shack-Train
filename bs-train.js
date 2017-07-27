var c = document.getElementById("bs-train");
var ctx = c.getContext("2d");
var img = document.getElementById("wall-img");
var mode = 'start'

window.onload = function() {
  ctx.drawImage(img,0,0,c.width,c.height);
}

c.addEventListener('click', function(event){
  x = event.pageX - c.offsetLeft;
  y = event.pageY - c.offsetTop;
  console.log(x, y);
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI, false);
  console.log(mode);
  if (mode == 'start') ctx.fillStyle = 'rgba(0,255,0,0.25)';
  if (mode == 'hold') ctx.fillStyle = 'rgba(0,0,255,0.25)';
  if (mode == 'finish') ctx.fillStyle = 'rgba(255,0,0,0.25)';
  ctx.fill();
}, false);

// Harry Beadle for Boulder Shack
// Boulder Shack Train
// HTML5 Applet

holdmap = [
  [23, 3],
  [79, 3],
  [52, 4],
  [35, 12],
  [67, 13],
  [51, 15],
  [20, 20],
  [84, 21],
  [43, 22],
  [61, 22],
  [7, 25],
  [95, 25],
  [31, 26],
  [71, 26],
  [51, 31],
  [18, 33],
  [85, 33],
  [40, 34],
  [63, 34],
  [32, 37],
  [71, 38],
  [5, 41],
  [21, 41],
  [81, 41],
  [98, 41],
  [46, 43],
  [58, 43],
  [20, 51],
  [34, 51],
  [69, 51],
  [84, 51],
  [52, 54],
  [97, 58],
  [7, 59],
  [28, 62],
  [40, 62],
  [64, 62],
  [75, 62],
  [50, 63],
  [55, 63],
  [83, 66],
  [22, 67],
  [12, 70],
  [43, 70],
  [60, 70],
  [92, 70],
  [72, 73],
  [32, 75],
  [19, 78],
  [52, 79],
  [85, 79],
  [39, 83],
  [64, 84],
  [28, 86],
  [76, 86],
  [36, 95],
  [48, 95],
  [56, 95],
  [66, 95],
  [88, 95],
  [16, 96]
]

// Initalise Global Variables
var c = document.getElementById("bs-train");
var ctx = c.getContext("2d");
var img = document.getElementById("wall-img");
var mode = 'start';

function reset() {
  // Reset to the default image.
  ctx.drawImage(img,0,0,c.width,c.height);
}

// Onload cleanup and setup
window.onload = function() {
  // Get the window size, match to a maximum of 500px and set the canvas'
  // absoulte width to this size.
  w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
  if (w > 500) w = 500;
  c.style.width = w + "px";
  c.style.height = w + "px";
  c.width = w;
  c.height = w;
  // Initally load the image
  reset();
}

// Paint hold markers when the canvas is clicked.
c.addEventListener('click', function(event) {
  // Get the cursor x,y positon
  rect = c.getBoundingClientRect();
  x = (100 * ((event.clientX - rect.left) / c.width));
  y = (100 * ((event.clientY - rect.top) / c.width));
  // Get a list of all the holds within 20px
  // Find the best fit.
  close_holds = []
  best_fit = [0, 100]
  for (var i = 0; i < holdmap.length; i++) {
    if (holdmap[i][0] >= x-20 && holdmap[i][0] <= x+20) {
      if (holdmap[i][1] >= y-20 && holdmap[i][0] <= x+20) {
        d = ( (holdmap[i][0] - x)**2 + (holdmap[i][1] - y)**2)
        if (d < best_fit[1]) {
          best_fit = [i, d]
        }
      }
    }
  }
  x = c.width * (holdmap[best_fit[0]][0]/100)
  y = c.width * (holdmap[best_fit[0]][1]/100)
  // Draw a circle at this position
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, 2 * Math.PI, false);
  // Fill it with a colour dependant on the mode.
  if (mode == 'start') ctx.fillStyle = 'rgba(0,255,0,0.25)';
  if (mode == 'hold') ctx.fillStyle = 'rgba(0,0,255,0.25)';
  if (mode == 'finish') ctx.fillStyle = 'rgba(255,0,0,0.25)';
  ctx.fill();
}, false);

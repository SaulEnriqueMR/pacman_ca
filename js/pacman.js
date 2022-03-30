// pos is the PacMan image position variable- it is set to 0 initially
var pos = 8;

//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;

//This array contains all the PacMan movement images
const pacArray = [
  ['./images/pacman1.png', './images/pacman2.png'],
  ['./images/pacman3.png', './images/pacman4.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

const speed = 20;

// This function is called on mouse click. Every time it is called, it updates the Pacman image, position and direction on the screen.
function run() {
  let img = document.getElementById('pacman');
  let imgWidth = img.width;
  let pageWidth = window.innerWidth
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= speed;
    img.style.left = pos + 'px';
  } else {
    pos += speed;
    img.style.left = pos + 'px';
  }
}

setInterval(run, 150);

// This function determines the direction of PacMan based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  // Check if it's going left
  if (direction === 0) {
    // position + speed (next position) + img width more than page width - border width from body
    if (pos + speed + imgWidth >= pageWidth - 8) {
      direction = 1;
    }
  } else {
    if (pos <= 8) {
      direction = 0;
    }
  }
  return direction;
}

//Please do not change
module.exports = checkPageBounds;

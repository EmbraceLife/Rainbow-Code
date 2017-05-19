// what is sketch.js?
// it is like kurfile.yml to kur

// User can totally ignore p5.js source code (alien language to me)
// Solely focus on easy language for sketch.js

// Last line before going to sketch.js
// if (typeof context.setup === 'function') {
//   context.setup();
// }

function setup() {
  createCanvas(400, 400);
  print("canvas created!");
}

// out of this function, run back to p5.js to use code to create canvas;

// then running codes on redraw and Userdraw before moving into draw() of sketch.js

function draw() {
  background(255, 0, 255); // take effect immediate when this line runs
  ellipse(200, 200, 50, 50); // so does this line
  // start to draw a rect
  // what does each args mean: https://youtu.be/D1ELEeIs0j8?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=456

  // P5.js reference or doc
  // https://p5js.org/reference/#/p5/line
  
  rect(150, 150, 50, 50);
  console.log("background and ellipse are created!");
}
// out of this function, run back to p5.js to do other looping things, Jquery is used as well;

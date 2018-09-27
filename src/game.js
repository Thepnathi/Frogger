let frogImg;
let logImg;
let carImg;
let frog;
let width;
let height;
let cell;
let lanesOnScreen;
let lanes;


function preload() {
  frogImg = loadImage('../Frog/frog.png');
  logImg = loadImage('../Log/log.png');
  carImg = loadImage('../Car/car.png');
}

function setup() {
  width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);;
  height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);;
  cell = Math.floor(width/25);
  lanesOnScreen = Math.floor(height / cell) - 1;

  const canvas = createCanvas(width, height);

  frog = new Frog(width / 2 - cell / 2, height - cell, cell, frogImg);

  lanes = [];
  let numOfLogs = 3;
  let logWidth = cell * 5;
  let logSpeed = 1.5;
  let numOfCars = 4;
  let carWidth = cell * 1.5;
  let carSpeed = 2;
  let currDrawY = height - cell;
  let currDir = 1;
  let currDrawX;
  for (let i = 0; i < lanesOnScreen; i++) {

    if (i == 0 || i == 5) {
      lanes[i] = new SafeLane(currDrawY, width, cell);
    } else if (i > 0 && i < 5) {
      currDrawX = random(width / 5, 4 * width / 5);
      lanes[i] = new CarLane(numOfCars, carWidth, currDir, carSpeed, currDrawY, currDrawX, cell, width, carImg);
    } else if (i > 5) {
      currDrawX = random(width / 6, 2 * width / 3);
      lanes[i] = new LogLane(numOfLogs, logWidth, currDir, logSpeed, currDrawY, currDrawX, cell, width, logImg);

      logWidth = random(cell * 3, cell * 5);
      if (logWidth == 3) {
        numOfLogs = 4;
      }
      else {
        numOfLogs = 3;
      }
    }

    currDir = -currDir;
    currDrawY -= cell;
  }
}


function draw() {
  background(255);

  for (let i = 0; i < lanesOnScreen; i++) {
    lanes[i].show();
    lanes[i].run();

    if (frog.y == lanes[i].drawY) {
      lanes[i].checkFrog(frog);
    }
  }
  frog.show();
  // noLoop();
}

function keyPressed() {
  frog.move(keyCode, width, height);
}

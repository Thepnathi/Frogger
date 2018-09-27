class CarLane extends Lane {
  constructor(numOfCars, carWidth, dir, speed, drawY, startCarX, cell, laneWidth, carImg) {
    super(drawY, laneWidth, cell);

    this.numOfCars = numOfCars;
    this.carWidth = carWidth;
    this.dir = dir;
    this.speed = speed;
    this.startCarX = startCarX;

    this.cars = new Array(this.numOfCars);
    for (let i = 0; i < this.numOfCars; i++) {
      this.cars[i] = new Car(this.startCarX + i * this.carWidth * 3.5, this.drawY, this.carWidth, this.cell, carImg);
    }
  }

  show() {
    fill('#3d3d3d');
    rect(0, this.drawY, this.laneWidth, this.cell);
    this.cars.forEach(function(car) {
      car.show(200);
    });
  }

  run() {
    const carSpeed = this.speed * this.dir;
    const constrainX = this.laneWidth;
    this.cars.forEach(function(car) {
      car.move(carSpeed, constrainX);
    });
  }

  checkFrog(frog) {
    for (let i = 0; i < this.numOfCars; i++) {
      if(this.cars[i].overlaps(frog))  {
        frog.reset();
      }
    }
  }
}

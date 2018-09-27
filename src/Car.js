class Car extends Rectangle {
  constructor(x, y, w, h, img) {
    super(x, y, w, h);

    this.img = img;
  }

  move(speed, maxX) {
    this.x += speed;
    if (this.x > maxX && speed > 0) {
      this.x = -this.w * speed;
    }
    else if (this.x < 0-this.w && speed < 0) {
      this.x = maxX + this.w;
    }
  }

  show() {
    image(this.img, this.x, this.y, this.w, this.h);
  }

}

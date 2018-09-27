class Frog extends Rectangle {
  constructor(x, y, w, img) {
    super(x, y, w, w);

    this.startX = x;
    this.startY = y;
    this.w = w;
    this.img = img;
  }

  move(code, maxX, maxY) {
    switch (code) {
      case LEFT_ARROW:
        this.x = constrain(this.x - this.w, 0, maxX - this.w);
        break;
      case RIGHT_ARROW:
        this.x = constrain(this.x + this.w, 0, maxX - this.w);
        break;
      case UP_ARROW:
        this.y = constrain(this.y - this.w, 0, maxY - this.w);
        break;
      case DOWN_ARROW:
        this.y = constrain(this.y + this.w, 0, maxY - this.w);
        break;
      default:
        this.x = this.x;
        this.y = this.y;
    }

  }

  reset() {
    this.x = this.startX;
    this.y = this.startY;
  }

  show() {
    image(this.img, this.x, this.y, this.w * 0.9, this.w * 0.9);
  }
}

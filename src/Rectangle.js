class Rectangle {
  constructor (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  overlaps(r2) {
    return !(this.x >= r2.x + r2.w ||
      this.x + this.w <= r2.x ||
      this.y >= r2.y + this.h ||
      this.y + this.h <= r2.y);
  }

  show(color) {
    fill(color);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}

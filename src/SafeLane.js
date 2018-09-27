class SafeLane extends Lane {
  constructor(drawY, width, height) {
    super(drawY, width, height);
    this.lane = new Rectangle(0, drawY, width, height);
  }

  show() {
    this.lane.show(20);
  }

  run() {

  }

  checkFrog(frog) {
    
  }

}

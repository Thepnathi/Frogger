class LogLane extends Lane {
  constructor(numOfLogs, logWidth, dir, speed, drawY, startCarX, cell, laneWidth, logImg) {
    super(drawY, laneWidth, cell);

    this.numOfLogs = numOfLogs;
    this.logWidth = logWidth;
    this.dir = dir;
    this.speed = speed;
    this.startCarX = startCarX;

    this.logs = new Array(this.numOfLogs);
    for (let i = 0; i < this.numOfLogs; i++) {
      this.logs[i] = new Log(this.startCarX + i * this.logWidth * 3.5, this.drawY, this.logWidth, this.cell, logImg);
    }
  }

  show() {
    fill('#5f9ea0');
    noStroke();
    rect(0, this.drawY, this.laneWidth, this.cell);
    this.logs.forEach(function(log) {
      log.show();
    });
  }

  run() {
    const logSpeed = this.speed * this.dir;
    const constrainX = this.laneWidth;
    this.logs.forEach(function(log) {
      log.move(logSpeed, constrainX);
    });
  }

  checkFrog(frog) {
    let overlaps = false;
    for (let i = 0; i < this.numOfLogs; i++) {
      overlaps = frog.overlaps(this.logs[i]);
      if (overlaps) {
        frog.x = constrain(frog.x + this.speed * this.dir, 0, this.laneWidth);

        return;
      }
    }

    frog.reset();
  }
}

var myCar = {
  make: "Mazda",
  year: 2012,
  model: "3 i touring",
  milage: 120000,
  color: "Blue",
  driveToWork: function () {
    console.log(`Old Milage: ${this.milage} | New Milage: ${this.milage + 33}`);
    this.milage = this.milage + 33;
  },
  driveAroundTheWorld: function () {
    console.log(
      `Old Milage: ${this.milage} | New Milage: ${this.milage + 24000}`
    );
    this.milage = this.milage + 24000;
  },
  runErrands: function () {
    console.log(`Old Milage: ${this.milage} | New Milage: ${this.milage + 30}`);
    this.milage = this.milage + 30;
  },
};
myCar.driveToWork();
myCar.driveAroundTheWorld();
myCar.runErrands();

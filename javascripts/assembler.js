function Assembler () {
  this.maxBorderWidth = 7;
  this.maxSpeed = 10;
  this.borderStyles = ['solid', 'dotted', 'dashed', 'double'];
  this.colors = ['#A0151E', '#FFD633', '#661400', '#E55419'];
  this.animation;
  this.rainDrop;
}

Assembler.prototype.reset = function () {
  clearInterval(this.animation);
  $('body').html('');
  this.rainDrop = new RainDrop({
    borderWidth : randPosInt(this.maxBorderWidth),
    borderStyle : sampleFromArray(this.borderStyles)
  });
  this.rainDrop.renderSeed();
};

Assembler.prototype.startInterval = function () {
  var speed = randPosInt(this.maxSpeed);
  // var i = 0;
  var self = this;
  this.animation = setInterval(function () {
    self.rainDrop.addDrop(speed, sampleFromArray(self.colors));
    scrollPage();
    // i++;
    if (self.rainDrop.$largestDrop.width() > $(window).width() * 1.3) {
      clearInterval(self.animation);
    }
  }, 50);
};
function BouncyConductor(snappiness) {
  this.snappiness = snappiness;
}

BouncyConductor.prototype
.getPosition = function(phase) {
  // TODO: replace with exp
  var expSnap = Math.pow(2, this.snappiness);
  var pi = Math.PI;
  var x = [0, 1/(4*expSnap), 1-(1/(4*expSnap)), 1];
  var y = [0, pi/2, 3*pi/2, 2*pi];
  
  var cosine = Math.cos(this.distort(phase, x, y));
  
  x = [-1, 0, 1];
  y = [0, 1-1/(2*expSnap), 1];
  return this.distort(cosine, x, y);
};

BouncyConductor.prototype
.distort = function(input, x, y) {
  var oldK = 0;
  var output = y[0];
  var k;
  var i = 0;
  while(input > x[i]) {
    k = (y[i+1]-y[i])/(x[i+1]-x[i]);
    output += (k-oldK)*(input-x[i]);
    oldK = k;
    i++;
  }
  
  return output;
};

BouncyConductor.prototype
.handleEvent = function() {
  this.snappiness = Number(this.snapInput.value);
};

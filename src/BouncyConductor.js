function BouncyConductor(snappiness) {
  this.snappiness = snappiness;
}

BouncyConductor.prototype = new AbstractConductor();

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

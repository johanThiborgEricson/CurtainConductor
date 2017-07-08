function CosConductor() {
  this.snappiness = 1;
}

CosConductor.prototype = new AbstractConductor();

CosConductor.prototype
.getPosition = function(phase) {
  var normalizedCosine = (1+Math.cos(phase*2*Math.PI))/2;
  return Math.pow(normalizedCosine, this.snappiness);
};

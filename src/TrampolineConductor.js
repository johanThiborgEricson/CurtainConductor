function TrampolineConductor(snappiness) {
  this.snappiness = snappiness;
}

TrampolineConductor.prototype
.getPosition = function(phase) {
  var position = Math.cos((4+Math.PI)*phase);
  position = (1+position)/2;
  return position;
};

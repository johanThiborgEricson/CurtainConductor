function CosConductor() {
  
}

CosConductor.prototype
.getPosition = function(phase) {
  return Math.cos(phase*2*Math.PI);
};
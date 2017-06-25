function CosConductor() {
  
}

CosConductor.prototype
.getPosition = function(phase) {
  return (1+Math.cos(phase*2*Math.PI))/2;
};
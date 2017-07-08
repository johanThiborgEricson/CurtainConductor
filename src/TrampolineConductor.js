function TrampolineConductor(snappiness) {
  this.snappiness = snappiness;
}

TrampolineConductor.prototype = new AbstractConductor();

TrampolineConductor.prototype
.getPosition = function(phase) {
  var x;
  var y;
  var departure;
  var arrival;
  var position;
  departure = 1/(2+8/Math.PI);
  arrival = 1-departure;
  if(phase < departure) {
    position = Math.cos((4+Math.PI)*phase);
  } else if(phase < arrival) {
    var halfFlight = (arrival-departure)/2;
    position = (phase-departure)*(phase-arrival)/(halfFlight*halfFlight);
  } else {
    position = Math.cos((4+Math.PI)*(phase-1));
  }
  
  x = [-1, 1];
  y = [0, 1];
  return this.distort(position, x, y);
};

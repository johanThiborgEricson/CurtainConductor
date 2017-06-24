function ClockMetronome(clock) {
  this.clock = clock;
}

ClockMetronome.prototype
.getPhase = function() {
  var msFraction = this.clock.now()%1000;
  return msFraction/1000;
};
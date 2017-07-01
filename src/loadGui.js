window.addEventListener("load", function() {
  var metronome = new Metronome(Date);
  var conductor = new CosConductor();
  var gui = new Gui(metronome, conductor);
  gui.attachTo(document.body);
});
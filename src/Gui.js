function Gui(metronome, conductor) {
  this.metronome = metronome;
  this.conductor = conductor;
  this.element = document.createElement("form");
  
  var bpmLabel = document.createElement("label");
  bpmLabel["for"] = "bpm";
  bpmLabel.innerHTML = "bpm: ";
  this.element.appendChild(bpmLabel);
  this.bpmInput = document.createElement("input");
  this.bpmInput.id = "bpm";
  this.bpmInput.type = "number";
  this.bpmInput.value = "60";
  this.bpmInput.min = "1";
  // The Nyquist frequency
  this.bpmInput.max = 60*60/2;
  this.bpmInput.addEventListener("input", this.metronome);
  
  this.element.appendChild(this.bpmInput);
  metronome.bpmInput = this.bpmInput;
  // TODO: Call metronome.handleEvent to initially sync with gui
  
  this.startButton = document.createElement("input");
  this.startButton.type = "button";
  this.startButton.value = "Start";
  var that = this;
  this.startButton.addEventListener("click", function() {
    that.start(60);
  });
  
  this.element.appendChild(this.startButton);
  
  this.stopButton = document.createElement("input");
  this.stopButton.type = "button";
  this.stopButton.value = "Stop";
  this.stopButton.addEventListener("click", function() {
    that.stop();
  });
  
  this.element.appendChild(this.stopButton);
  
  this.element.appendChild(document.createElement("br"));
  
  this.canvas = document.createElement("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.ctx.fillStyle = "#bbb";
  this.ctx.font = '24px serif';
  this.ctx.fillText("Curtain conductor", 10, 48, 300);
  this.element.appendChild(this.canvas);
}

Gui.prototype
.attachTo = function(container) {
  container.appendChild(this.element);
};

// TODO: Protect from having multiple setIntervals running by calling stop first
Gui.prototype
.start = function(fps) {
  this.intervalID = setInterval(function(gui) {
    var position = gui.computePosition();
    gui.setCurtainPos(position);
  }, 1000/fps, this);
};

Gui.prototype
.computePosition = function() {
  var phase = this.metronome.getPhase();
  return this.conductor.getPosition(phase);
};

Gui.prototype
.setCurtainPos = function(fraction) {
  var h = this.canvas.height;
  var w = this.canvas.width;
    
  this.ctx.fillStyle = "#000";
  this.ctx.fillRect(0, 0, w, fraction*h);
  this.ctx.fillStyle = "#fff";
  this.ctx.fillRect(0, fraction*h, w, (1-fraction)*h);
};

Gui.prototype
.stop = function() {
  clearInterval(this.intervalID);
};

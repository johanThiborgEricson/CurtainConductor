function Gui() {
  this.canvas = document.createElement("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.element = document.createElement("div");
  this.element.appendChild(this.canvas);
}

Gui.prototype
.setCurtainPos = function(fraction) {
  var h = this.canvas.height;
  var w = this.canvas.width;
    
  this.ctx.fillStyle = "#000";
  this.ctx.fillRect(0, 0, w, 0.3*h);
  this.ctx.fillStyle = "#fff";
  this.ctx.fillRect(0, 0.3*h, w, 0.7*h);
};

Gui.prototype
.attachTo = function(container) {
  container.appendChild(this.element);
};
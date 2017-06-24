function Gui() {
  this.canvas = document.createElement("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.ctx.fillStyle = "#bbb";
  this.ctx.font = '24px serif';
  this.ctx.fillText("Curtain conductor", 10, 48, 300);
  this.element = document.createElement("div");
  this.element.appendChild(this.canvas);
}

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
.attachTo = function(container) {
  container.appendChild(this.element);
};
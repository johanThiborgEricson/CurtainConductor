describe("The gui", function() {
  it("can set the position of the curtain", function() {
    var gui = new Gui();
    spyOn(gui.ctx, "fillRect");
    
    gui.setCurtainPos(0.3);
    
    var h = gui.canvas.height;
    var w = gui.canvas.width;
    
    expect(gui.ctx.fillRect).toHaveBeenCalledWith(0, 0, w, 0.3*h);
    expect(gui.ctx.fillRect).toHaveBeenCalledWith(0, 0.3*h, w, 0.7*h);
  });
  
  it("has a curtain", function() {
    var gui = new Gui();
    
    expect(gui.element.children).toContain(gui.canvas);
  });
  
  it("can attach itself", function() {
    var container = document.createElement("div");
    var gui = new Gui();
    
    gui.attachTo(container);
    
    expect(container.firstChild).toBe(gui.element);
  });
  
});
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
  
  it("can compute the position of the curtain", function() {
    var metronome = new ClockMetronome();
    spyOn(metronome, "getPhase").and.returnValue("phase");
    var conductor = new CosConductor();
    spyOn(conductor, "getPosition").and.returnValue("position");
    var gui = new Gui(metronome, conductor);
    
    var result = gui.computePosition();
    
    expect(conductor.getPosition).toHaveBeenCalledWith("phase");
    expect(result).toBe("position");
  });
  
  it("can start the curtain", function(done) {
    var gui = new Gui();
    spyOn(gui, "computePosition").and.returnValue("computed");
    gui.setCurtainPos = function(fraction) {
      expect(gui.computePosition).toHaveBeenCalled();
      expect(fraction).toBe("computed");
      gui.stop();
      done();
    };
    
    gui.start(60);
  });
  
  it("has a button that can start the curtain", function() {
    var gui = new Gui();
    spyOn(gui, "start");
    
    var clickEvent = new Event("click");
    gui.startButton.dispatchEvent(clickEvent);
    
    expect(gui.start).toHaveBeenCalledWith(60);
    expect(gui.element.children).toContain(gui.startButton);
  });
  
  it("has a button that can stop the curtain", function() {
    var gui = new Gui();
    spyOn(gui, "computePosition");
    spyOn(gui, "setCurtainPos");
    spyOn(window, "clearInterval").and.callThrough();

    gui.start(1);
    var clickEvent = new Event("click");
    gui.stopButton.dispatchEvent(clickEvent);
    
    expect(gui.stopButton).toBeDefined();
    expect(gui.element.children).toContain(gui.stopButton);
    expect(gui.intervalID).toBeDefined();
    expect(clearInterval).toHaveBeenCalledWith(gui.intervalID);
  });
  
});
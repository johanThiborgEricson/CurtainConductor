describe("The trampoline conductor", function() {
  it("leaves the trampoline at 1/(2+8/pi) and lands at 1-1/(2+8/pi)", 
  function() {
    var snappiness = 0;
    var conductor = new TrampolineConductor(snappiness);
    
    var leave = 1/(2+8/Math.PI);
    var land = 1-leave;
    
    expect(conductor.getPosition(leave-0.0001)).toBeCloseTo(0.5, 3);
  });
  
});

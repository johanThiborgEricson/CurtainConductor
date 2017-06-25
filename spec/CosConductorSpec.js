describe("The cos-conductor", function() {
  it("has a cozy wave", function() {
    var conductor = new CosConductor();
    
    var deg45 = (Math.PI/4)/(2*Math.PI);
    
    expect(conductor.getPosition(deg45)).toBe(Math.sqrt(0.5));
  });
});
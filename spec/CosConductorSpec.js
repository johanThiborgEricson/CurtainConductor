describe("The cos-conductor", function() {
  it("returns (1+cos(phase*2*pi))/", function() {
    var conductor = new CosConductor();
    
    var deg45 = (Math.PI/4)/(2*Math.PI);
    
    expect(conductor.getPosition(deg45)).toBe((1+Math.sqrt(0.5))/2);
  });
});
describe("The cos-conductor", function() {
  it("returns (1+cos(phase*2*pi))/", function() {
    var conductor = new CosConductor();
    
    var deg45 = (Math.PI/4)/(2*Math.PI);
    
    expect(conductor.getPosition(deg45)).toBe((1+Math.sqrt(0.5))/2);
  });
  
  it("gets snappier with higher snappiness value", function() {
    cs = [1, 2, 3].map(function(snappiness) {
      var conductor = new CosConductor();
      conductor.snappiness = snappiness;
      return conductor;
    });
    
    expect(cs[1].getPosition(0.25)).toBeLessThan(cs[0].getPosition(0.25));
    expect(cs[2].getPosition(0.25)).toBeLessThan(cs[1].getPosition(0.25));
    
  });
  
});
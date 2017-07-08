describe("The bouncy counductor", function() {
  
  it("returns a normalized cosine for snappiness 0", function() {
    var conductor = new BouncyConductor(0);
    
    expect(conductor.getPosition(1/8)).toBe((2+Math.sqrt(2))/4);
  });
  
  it("approaches (1/8, 3/4) if the snappiness is 1", function() {
    var conductor = new BouncyConductor(1);
    
    expect(conductor.getPosition(1/8-0.0001)).toBeCloseTo(3/4, 3);
  });
  
  it("passes all of the important points for snappiness 1", function() {
    var conductor = new BouncyConductor(1);
    
    expect(conductor.getPosition(0)).toBe(1);
    expect(conductor.getPosition(1/8-0.0001)).toBeCloseTo(3/4, 3);
    expect(conductor.getPosition(1/8)).toBe(3/4);
    expect(conductor.getPosition(1/8+0.0001)).toBeCloseTo(3/4, 3);
    expect(conductor.getPosition(0.5)).toBe(0);
    expect(conductor.getPosition(7/8-0.0001)).toBeCloseTo(3/4, 3);
    expect(conductor.getPosition(7/8)).toBeCloseTo(3/4, 8);
    expect(conductor.getPosition(7/8+0.0001)).toBeCloseTo(3/4, 3);
    expect(conductor.getPosition(1-0.0001)).toBeCloseTo(1, 3);
    expect(conductor.getPosition(1)).toBeCloseTo(1, 8);
  });
  
  it("passes all of the important points for snappiness 2", function() {
    var conductor = new BouncyConductor(2);
    
    expect(conductor.getPosition(0)).toBe(1);
    expect(conductor.getPosition(1/16-0.0001)).toBeCloseTo(7/8, 3);
    expect(conductor.getPosition(1/16)).toBe(7/8);
    expect(conductor.getPosition(1/16+0.0001)).toBeCloseTo(7/8, 3);
    expect(conductor.getPosition(0.5)).toBe(0);
    expect(conductor.getPosition(15/16-0.0001)).toBeCloseTo(7/8, 3);
    expect(conductor.getPosition(15/16)).toBeCloseTo(7/8, 8);
    expect(conductor.getPosition(15/16+0.0001)).toBeCloseTo(7/8, 3);
    expect(conductor.getPosition(1-0.0001)).toBeCloseTo(1, 3);
    expect(conductor.getPosition(1)).toBeCloseTo(1, 8);
  });
  
  it("has a continous first derivative", function() {
    var conductor = new BouncyConductor(1);
    
    var yMinus = conductor.getPosition(1/8-0.0001);
    var y = conductor.getPosition(1/8);
    var yPlus = conductor.getPosition(1/8+0.0001);
    expect(yPlus-y).toBeCloseTo(y-yMinus, 7);
    yMinus = conductor.getPosition(7/8-0.0001);
    y = conductor.getPosition(7/8);
    yPlus = conductor.getPosition(7/8+0.0001);
    expect(yPlus-y).toBeCloseTo(y-yMinus, 7);
  });

});

describe("The bouncy counductor", function() {
  
  it("returns a normalized cosine for snappiness 0", function() {
    var conductor = new BouncyConductor(0);
    
    expect(conductor.getPosition(1/8)).toBe((2+Math.sqrt(2))/4);
  });
  
  it("can distort a curve with two distortion points", function() {
    var x = [0, 1];
    var y = [0, 2];
    var input = 0.5;
    
    expect(BouncyConductor.prototype.distort(input, x, y)).toBe(1);
  });
  
  it("can distort a curve with initial offset", function() {
    var x = [0, 1];
    var y = [-1, 0];
    var input = 0;
    
    expect(BouncyConductor.prototype.distort(input, x, y)).toBe(-1);
  });
  
  it("can distort a curves outside of the interval [0, 1]", function() {
    var x = [-2, 0];
    var y = [0, 1];
    var input = -1;
    
    expect(BouncyConductor.prototype.distort(input, x, y)).toBe(0.5);
  });
  
  it("can distort a curves with three distortion points", function() {
    var x = [0, 0.5, 1];
    var y = [0, 0.75, 1];
    var input = 1;
    
    expect(BouncyConductor.prototype.distort(input, x, y)).toBe(1);
  });
  
  it("can distort a curves with many distortion points", function() {
    var x = [0, 1/4,  3/4, 1];
    var y = [0, 1/8, 7/8, 1];
    var input = 1;
    
    expect(BouncyConductor.prototype.distort(input, x, y)).toBe(1);
  });
  
  // TODO: distort should throw if phase is out of x bounds.
  
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
  
  it("has a continous second derivative", function() {
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

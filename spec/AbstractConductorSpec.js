describe("The abstract counductor", function() {
  
  it("can distort a curve with two distortion points", function() {
    var x = [0, 1];
    var y = [0, 2];
    var input = 0.5;
    
    expect(AbstractConductor.prototype.distort(input, x, y)).toBe(1);
  });
  
  it("can distort a curve with initial offset", function() {
    var x = [0, 1];
    var y = [-1, 0];
    var input = 0;
    
    expect(AbstractConductor.prototype.distort(input, x, y)).toBe(-1);
  });
  
  it("can distort a curves outside of the interval [0, 1]", function() {
    var x = [-2, 0];
    var y = [0, 1];
    var input = -1;
    
    expect(AbstractConductor.prototype.distort(input, x, y)).toBe(0.5);
  });
  
  it("can distort a curves with three distortion points", function() {
    var x = [0, 0.5, 1];
    var y = [0, 0.75, 1];
    var input = 1;
    
    expect(AbstractConductor.prototype.distort(input, x, y)).toBe(1);
  });
  
  it("can distort a curves with many distortion points", function() {
    var x = [0, 1/4,  3/4, 1];
    var y = [0, 1/8, 7/8, 1];
    var input = 1;
    
    expect(AbstractConductor.prototype.distort(input, x, y)).toBe(1);
  });
  
  // TODO: distort should throw if phase is out of x bounds.
});

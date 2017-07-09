describe("Heavy conductor", function() {
  
  var conductor = new HeavyConductor();
  
  it("is just a negative cosine when departure is pi", function() {
    var departure = Math.PI;
    var time = 3;
    
    expect(conductor.trampoline(time, departure)).toBe(-Math.cos(3));
  });
  
  it("can compute how long it will be in the air", function() {
    var departure = (3/4)*Math.PI;
    var two = -2*Math.tan(departure);
    
    expect(two).toBeCloseTo(2, 15);
    expect(conductor.airTime(departure)).toBe(two);
  });
  
  it("lands after the flight", function() {
    var departure = (3/4)*Math.PI;
    var airTime = conductor.airTime(departure);
    
    var bottom = 2*departure+airTime;
    expect(conductor.trampoline(bottom, departure)).toBe(-1);
  });
  
  it("falls frictionless", function() {
    var departure = (3/4)*Math.PI;
    var f = function(t) {
      var x0 = departure;
      return -Math.cos(x0)+Math.sin(x0)*t+(Math.cos(x0)/2)*t*t;
    };
    
    var airTime = conductor.airTime(departure);
    var actuall = conductor.trampoline(departure+0.01*airTime, departure);
    expect(actuall).toBeCloseTo(f(0.01*airTime), 15);
    actuall = conductor.trampoline(departure+0.5*airTime, departure);
    expect(actuall).toBeCloseTo(f(0.5*airTime), 15);
    actuall = conductor.trampoline(departure+0.99*airTime, departure);
    expect(actuall).toBeCloseTo(f(0.99*airTime), 15);
  });
  
  it("reaches its highest point mid-flight", function() {
    var departure = (3/4)*Math.PI;
    var airTime = conductor.airTime(departure);
    var goingUp = conductor.trampoline(departure+0.49*airTime, departure);
    var onTop = conductor.trampoline(departure+0.5*airTime, departure);
    var goingDown = conductor.trampoline(departure+0.51*airTime, departure);
    
    expect(onTop).toBeGreaterThan(goingUp);
    expect(goingDown).toBeLessThan(onTop);
  });
  
  it("moves continuously from and to the trampoline", function() {
    var dep = (3/4)*Math.PI;
    var arr = dep+conductor.airTime(dep);
    
    var d = 0.0001;
    var f = function(t) {
      return conductor.trampoline(t, dep);
    };
    
    expect(f(dep)).toBeGreaterThan(f(dep-d));
    expect(f(dep+d)).toBeGreaterThan(f(dep));
    expect((f(dep+d)-f(dep-d))/(2*d)).toBeCloseTo(Math.sin(dep), 4);
    
    expect(f(arr)).toBeLessThan(f(arr-d));
    expect(f(arr+d)).toBeLessThan(f(arr));
    expect((f(arr+d)-f(arr-d))/(2*d)).toBeCloseTo(-Math.sin(dep), 4);
  });
  
  it("stops getting pushed once it leaves the trampoline", function() {
    var dep = (3/4)*Math.PI;
    
    var d = conductor.airTime(dep)/2;
    var f = function(t) {
      return conductor.trampoline(t, dep);
    };
    
    var fBis = (f(dep)-2*f(dep+d)+f(dep+2*d))/(d*d);
    expect(fBis).toBeCloseTo(Math.cos(dep), 15);
  });
  
  it("can compute its highest elevation", function() {
    var departure = (3/4)*Math.PI;
    var airTime = conductor.airTime(departure);
    var t = 0.5*airTime;
    var x0 = departure;
    var top = -Math.cos(x0)+Math.sin(x0)*t+(Math.cos(x0)/2)*t*t;
    
    expect(conductor.highest(departure)).toBeCloseTo(top, 15);
  });
  
  it("can scale the output", function() {
    var snappiness = 1;
    var conductor = new HeavyConductor(snappiness);
    
    expect(conductor.getPosition(0)).toBe(1);
    expect(conductor.getPosition(0.5)).toBe(0);
    expect(conductor.getPosition(1)).toBe(1);
    
  });
  
});

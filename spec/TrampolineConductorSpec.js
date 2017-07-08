describe("The trampoline conductor", function() {
  describe("with snappiness 1,", function() {
    it("starts at the bottom of the trampoline", function() {
      var conductor = new TrampolineConductor(1);
      
      expect(conductor.getPosition(0)).toBe(1);
    });
    
    it("leaves the trampoline at 1/(2+8/pi)", function() {
      var snappiness = 1;
      var conductor = new TrampolineConductor(snappiness);
      
      var leave = 1/(2+8/Math.PI);
  
      expect(conductor.getPosition(leave-0.0001)).toBeCloseTo(0.5, 3);
      expect(conductor.getPosition(leave+0.0001)).toBeCloseTo(0.5, 3);
    });
    
    it("reaches its highest point at 1/2", function() {
      var conductor = new TrampolineConductor(1);
      
      expect(conductor.getPosition(1/2)).toBe(0);
    });
    
    it("lands on the trampoline at 1-(1/(2+8/pi))", function() {
      var snappiness = 1;
      var conductor = new TrampolineConductor(snappiness);
      
      var land = 1-(1/(2+8/Math.PI));
  
      expect(conductor.getPosition(land-0.0001)).toBeCloseTo(0.5, 3);
      expect(conductor.getPosition(land+0.0001)).toBeCloseTo(0.5, 3);
    });
    
    it("reaches the bottom of the trampoline at the end of the cycle", 
    function() {
      var conductor = new TrampolineConductor(1);
      
      expect(conductor.getPosition(1)).toBe(1);
    });
    
  });
  
});

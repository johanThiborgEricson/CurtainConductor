describe("The clock-metronome", function() {
  it("has a phase corresponding to the how much of the current second that " + 
  "has passed", function() {
    var clock = {
      now: function() {
        
      }
    };
    
    spyOn(clock, "now").and.returnValues(0, 1000, 2200);
    
    var metronome = new ClockMetronome(clock);
    
    expect(metronome.getPhase()).toBe(0);
    expect(metronome.getPhase()).toBe(0);
    expect(metronome.getPhase()).toBe(0.2);
  });
  
  
  
});
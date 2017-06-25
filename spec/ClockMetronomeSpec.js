describe("The clock-metronome", function() {
  it("when bpm is 60 it has a phase corresponding to the how much of the " + 
  "current second that has passed", function() {
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
  
  it("can have different values for bpm", function() {
    spyOn(Date, "now").and.returnValue(1000);
    var metronome = new ClockMetronome(Date);
    
    metronome.bpm = 30;
    expect(metronome.getPhase()).toBe(0.5);
    metronome.bpm = 120;
    expect(metronome.getPhase()).toBe(0);
    metronome.bpm = 40;
    expect(metronome.getPhase()).toBe(2/3);
  });
  
});
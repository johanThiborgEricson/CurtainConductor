describe("A metronome", function() {
  it("starts at zero", function() {
    var clock = {
      now: function() {
        return 0;
      }
    };
    var metronome = new Metronome(clock);
    
    expect(metronome.getPhase()).toBe(0);
  });
  
  it("remembers its last call", function() {
    var clock = {
      now: function() {
        
      }
    };
    
    spyOn(clock, "now").and.returnValues(500, 1000);
    var metronome = new Metronome(clock);
    
    expect(metronome.getPhase()).toBe(0);
    expect(metronome.getPhase()).toBe(0.5);
  });
  
  it("has a settable bpm", function() {
    var clock = {
      now: function() {
        
      }
    };
    
    spyOn(clock, "now").and.returnValues(0, 250);
    var metronome = new Metronome(clock);
    metronome.bpm = 120;
    
    expect(metronome.getPhase()).toBe(0);
    expect(metronome.getPhase()).toBe(0.5);
  });
  
  it("remembers its previous phase", function() {
    var clock = {
      now: function() {
        
      }
    };
    
    spyOn(clock, "now").and.returnValues(0, 250, 500);
    var metronome = new Metronome(clock);
    
    expect(metronome.getPhase()).toBe(0);
    expect(metronome.getPhase()).toBe(0.25);
    expect(metronome.getPhase()).toBe(0.5);
  });
  
  it("loops before reaching 1", function() {
    var clock = {
      now: function() {
        
      }
    };
    
    spyOn(clock, "now").and.returnValues(0, 1000, 3000);
    var metronome = new Metronome(clock);
    
    expect(metronome.getPhase()).toBe(0);
    expect(metronome.getPhase()).toBe(0);
    expect(metronome.getPhase()).toBe(0);
  });
  
  it("listens to events", function() {
    var input = document.createElement("input");
    input.value = "70";
    var metronome = new Metronome();
    metronome.bpmInput = input;
    
    metronome.handleEvent();
    
    expect(metronome.bpm).toBe(70);
  });
  
});

describe("Plane", function(){
  var plane = new Plane();

  describe("land", function() {
    it('at an airport', function(){
      expect(plane.land()).toBe(true);
    });
  });
});



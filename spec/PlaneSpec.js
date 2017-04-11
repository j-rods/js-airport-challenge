describe("Plane", function(){
  var plane = new Plane();

  describe('isFlying', function() {
    it('has not landed', function() {
      expect(plane.isFlying).toBe(true)
    });
  });

  describe("land", function() {
    it('at an airport', function(){
      plane.land();
      expect(plane.isFlying).toBe(false);
    });
  });
});

describe("airport", function() {
  var airport = new Airport();

  describe("land", function() {
    it("airport instructs plane to land", function() {
      expect(airport.land("plane")).toEqual("plane");
    });
  });
});
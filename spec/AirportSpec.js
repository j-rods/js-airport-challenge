describe("airport", function() {
  var airport = new Airport();

  describe("planes", function() {
    it("initializes with empty array", function() {
      expect(airport.planes).toEqual([]);
    });
  });

  describe("land", function() {
    it("airport instructs plane to land", function() {
      airport.land("plane");
      expect(airport.planes).toEqual(["plane"]);
    });
  });
});
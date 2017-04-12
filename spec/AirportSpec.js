describe("airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    spyOn(plane,'land');
    spyOn(plane,'takeoff');
  });

  describe("planes", function() {
    it("initializes with empty array", function() {
      expect(airport.planes).toEqual([]);
    });
  });

  describe("land", function() {
    it("airport instructs plane to land", function() {
      airport.land(plane);
      expect(airport.planes).toEqual([plane]);
    });
    it('lands the plane', function() {
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it("plane if not full", function() {
      for(var i = 0; i < 20; i++) {
        airport.land(plane); // -> "this" is the airport
      }

      //because airport.land is calling the function immediately,
      //the result of that function is undefined
      expect(airport.land(plane)).to
      expect(function() { //here you are not calling the function immediately, you are wrapping it with another function and then letting jasmine call that function
        airport.land(plane) //when you call function here
      }).toThrowError(TypeError, "airport full");
    });
  });

  describe('takeoff', function() {
    it('airport instructs plane to take off', function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes).toEqual([]);
    });
    it('takes off the plane', function() {
      airport.takeoff(plane);
      expect(plane.takeoff).toHaveBeenCalled();
    });
  });

});

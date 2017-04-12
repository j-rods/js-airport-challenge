function Airport() {
  this.planes = []
}

const DEFAULT_CAPACITY = 20;

Airport.prototype.land = function(plane) {
  if (this.planes.length > DEFAULT_CAPACITY) {
    throw new TypeError("airport full")
  } else {
    plane.land()
  }
  this.planes.push(plane)
}

Airport.prototype.takeoff = function(plane) {
  plane.takeoff()
  var index = this.planes.indexOf(plane)
  this.planes.splice(index,1)
}

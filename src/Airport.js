function Airport() {
  this.planes = []
}

Airport.prototype.land = function(plane) {
  plane.land()
  this.planes.push(plane)
}

Airport.prototype.takeoff = function(plane) {
  plane.takeoff()
  var index = this.planes.indexOf(plane)
  this.planes.splice(index,1)
  // this.planes.pop(plane)
}

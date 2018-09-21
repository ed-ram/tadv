exports.NavigationLogic = class NavigationLogic {
  constructor(initialLat, initialLng){
    this.lat = initialLat,
    this.lng = initialLng,
    this.v = 0.01;
  }
  moveNorth() {
    
    this.lat = this.lat + this.v;
  }
  moveSouth() {
    this.lat = this.lat - this.v;
  }
  moveEast() {
    this.lng = this.lng + this.v;
  }
  moveWest() {
    this.lng = this.lng - this.v;
  }
  getLocation() {
 console.log(typeof(this.lat));
    return {lat: this.lat, lng: this.lng};
  }
  getLat() {
    return this.lat;
  }
  getLng() {
    return this.long;
  }
}

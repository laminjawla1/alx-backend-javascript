export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Setters
  set size(value) {
    if (typeof value !== 'number') {
      throw new Error('Size must be a number');
    }
    this._size = value;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new Error('Location must be a string');
    }
    this._location = value;
  }

  valueOf() { return this.size; }

  toString() { return this.location; }
}

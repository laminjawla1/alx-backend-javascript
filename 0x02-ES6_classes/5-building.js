export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this.sqft = sqft;
  }

  // Getters
  get sqft() { return this._sqft; }

  // Setters
  set sqft(sqft) { this._sqft = sqft; }
}

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getters
  get code() { return this._code; }

  get name() { return this._name; }

  // Setters
  set code(code) { this._code = code; }

  set name(name) { this._name = name; }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

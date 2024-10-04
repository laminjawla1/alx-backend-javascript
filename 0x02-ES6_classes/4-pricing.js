export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getters
  get amount() { return this._amount; }

  get currency() { return this._currency; }

  // Setters
  set amount(amount) { this._amount = amount; }

  set currency(currency) { this._currency = currency; }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

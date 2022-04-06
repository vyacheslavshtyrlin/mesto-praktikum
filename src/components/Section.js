export default class Section {
  constructor({renderer}, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }
  renderItems(card) {
    card.forEach(item => this._renderer(item));
  };
  setItem(element) {
    this._container.prepend(element);
  }
}

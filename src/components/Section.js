export default class Section {
  constructor({items, renderer}, selector) {
    this._rendererItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }
  renderItems() {
    this._rendererItems.forEach(item => this._renderer(item));
  };
  setItem(element) {
    this._container.prepend(element);
  }
}

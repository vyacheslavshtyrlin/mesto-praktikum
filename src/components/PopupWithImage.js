import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, name, url) {
    super(popupSelector)
    this._url = url;
    this._name = name;
  }

  open(name, url) {
    super.open();
    this._url.src = url;
    this._url.alt = name;
    this._name.textContent = name;
  }
}

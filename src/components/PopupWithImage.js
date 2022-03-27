import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({popupSelector}) {
    super({popupSelector})
    this._popupImage = this._popupElement.querySelector('.popup__image');
    this._popupImageTitle = this._popupElement.querySelector('.popup__caption')
  }

  open(imgName, imgUrl) {
    super.open();
    this._popupImage.src = imgUrl;
    this._popupImage.alt = imgName;
    this._popupImageTitle.textContent = imgName;
  }
}

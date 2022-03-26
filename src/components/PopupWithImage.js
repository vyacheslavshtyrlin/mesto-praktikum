import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupImage = this._popupSelector.querySelector('.popup__image');
    this._popupImageTitle = this._popupSelector.querySelector('.popup__caption')
  }

  open(ImgName, ImgUrl) {
    super.open();
    this._popupImage.src = ImgUrl;
    this._popupImage.alt = ImgName;
    this._popupImageTitle.textContent = ImgName;
  }
}

import { openPopup } from "./index.js";

export class Card {
  constructor(data, templateSelector) {
    this._imgLink = data.link;
    this._imgName = data.name;
    this._template = templateSelector
    this._popup = document.querySelector('.popup_type_zoom');
    this._popupZoomImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  };


  _getTemplate() {
    const cardElement = document.querySelector(this._template).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _addCard() {
    this._card = this._getTemplate();
    this._setEventListeners();
    this._card.querySelector('.card__caption').textContent = this._imgName;
    this._card.querySelector('.card__image').src = this._imgLink;
    this._card.querySelector('.card__caption').alt = this._imgName;
    return this._card;
  }

  _setEventListeners() {
    this._card.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLikeButton();
    });
    this._card.querySelector('.card__remove-button').addEventListener('click', () => {
      this._handleRemoveButton();
    });
    this._card.querySelector('.card__image').addEventListener('click', () => {
      this._zoomImage();

    });
  }

  _handleLikeButton() {
    this._card.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }

  _handleRemoveButton() {
    this._card.remove()
  };

  _zoomImage() {
    this._popupZoomImage.src = this._imgLink;
    this._popupCaption.textContent = this._imgName;
    this._popupZoomImage.alt = this._imgName;
    openPopup(this._popup);
  }

}




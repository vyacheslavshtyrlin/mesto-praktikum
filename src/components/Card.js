
export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._imgLink = data.link;
    this._imgName = data.name;
    this._template = templateSelector
    this._popup = document.querySelector('.popup_type_zoom');
    this._handleCardClick = handleCardClick;
  };


  _getTemplate() {
    const cardElement = document.querySelector(this._template).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  addCard() {
    this._card = this._getTemplate();
    this._card.querySelector('.card__caption').textContent = this._imgName;
    this._cardImage = this._card.querySelector('.card__image');
    this._cardLike = this._card.querySelector('.card__like-button');
    this._cardRemove = this._card.querySelector('.card__remove-button');
    this._cardImage.src = this._imgLink;
    this._cardImage.alt = this._imgName
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click', () => {
      this._handleLikeButton();
    });
    this._cardRemove.addEventListener('click', () => {
      this._handleRemoveButton();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._imgName, this._imgLink);

    });
  }

  _handleLikeButton() {
    this._cardLike.classList.toggle('card__like-button_active');
  }

  _handleRemoveButton() {
    this._card.remove()
    this._card = null;
  };
}




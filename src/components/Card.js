
;
export default class Card {
  constructor(data, templateSelector, userId, {handleCardClick, handleDelete, putLike, deleteLike} ) {
    this._data = data
    this._imgLink = data.link;
    this._imgName = data.name;
    this._ownerId = data.owner._id
    this._template = templateSelector
    this._handleCardClick = handleCardClick;
    this._userId = userId
    this._handleDelete = handleDelete;
    this._putLike = putLike;
    this._deleteLike = deleteLike;
    this._cardId = data._id;
  };

  _getTemplate() {
    const card = document.querySelector(this._template).content.querySelector('.card').cloneNode(true);
    return card;
  }

  addLike(data) {
    this._cardLike.classList.add('card__like-button_active');
    this._putLike(data);
  }

  removeLike(data) {
    this._cardLike.classList.remove('card__like-button_active');
    this._deleteLike(data)
  }


  _checkLikeButtonState() {
    this._data.likes.forEach((like) => {
      if (like._id === this._userId) {
        this._cardLike.classList.add('card__like-button_active');
      }
    })
  }


  likeCounter(data) {
    this._cardLikeCounter.textContent = String(data.likes.length)
  }

  _checkOwner() {
    if (this._ownerId != this._userId) {
      this._cardRemove.remove();
    }
  }

  createCard() {
    this._card = this._getTemplate();
    this._card.querySelector('.card__caption').textContent = this._imgName;
    this._cardImage = this._card.querySelector('.card__image');
    this._cardLike = this._card.querySelector('.card__like-button');
    this._cardRemove = this._card.querySelector('.card__remove-button');
    this._cardLikeCounter = this._card.querySelector('.card__like-counter')
    this._cardImage.src = this._imgLink;
    this._cardImage.alt = this._imgName;
    this._checkLikeButtonState()
    this._checkOwner()
    this.likeCounter(this._data)
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click', () => {
      if (this._cardLike.classList.contains('card__like-button_active')) {
        this.removeLike(this._cardId);
      }
      else {
        this.addLike(this._cardId)
      }
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._imgName, this._imgLink);
    });

    this._cardRemove.addEventListener('click', () =>{
      this._handleDelete(this._cardId, this._card)
    }
    )
  }
}




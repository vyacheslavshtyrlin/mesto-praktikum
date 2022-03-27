export default class Popup {
  constructor({popupSelector}) {
    this._popupElement = document.querySelector(popupSelector);
    this._handler = this._handleEscClose.bind(this);

  }
  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handler)
  };

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handler)
  };

  _handleEscClose = (e) => {
    if (e.key === 'Escape') {
      this.close()
    }
  }


  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
        this.close()
      }
    })
  }
};



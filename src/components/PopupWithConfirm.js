import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";

export default class PopupWithConfirm extends Popup {
constructor({callback, popupSelector, formSelector} ) {
  super({popupSelector})
  this._callback = callback
  this._form = this._popupElement.querySelector(formSelector)
}


  setEventListeners() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._callback(this._cardId, this._card);
    })

    super.setEventListeners()
  }

  open(cardId, card) {
    super.open();
    this._cardId = cardId;
    this._card = card;
  }
}

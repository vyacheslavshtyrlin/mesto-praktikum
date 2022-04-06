import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({handlerFormSubmit , popupSelector, formSelector}) {
    super({popupSelector})
    this._handlerFormSubmit = handlerFormSubmit;
    this._form = this._popupElement.querySelector(formSelector);
    this._submitButton = this._form.querySelector('.form__save-button');
    this._inputs = this._form.querySelectorAll('.form__field');
    this._loadingMessage = 'Сохранение...'
    this._defaultMessage = 'Сохранить'
  }

  confirmButtonState(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = this._loadingMessage;
    }
    else {
      this._submitButton.textContent = this._defaultMessage;
    }
  }



  _getInputValues() {
    this._values = {};
    this._inputs.forEach(input => {
      this._values[input.name] = input.value;
    });
    return this._values;
  };

  _submitForm() {
    this._handlerFormSubmit(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submitForm();
    })
  };

  close() {
    super.close();
    this._form.reset();
  };
}

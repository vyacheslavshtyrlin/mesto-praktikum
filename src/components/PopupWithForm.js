import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({handlerFormSubmit , popupSelector, formSelector}) {
    super({popupSelector})
    this._handlerFormSubmit = handlerFormSubmit;
    this._form = this._popupElement.querySelector(formSelector);
    this._inputs = this._popupElement.querySelectorAll('.form__field');
    ///console.log(this._getInputValues());
  }

  _getInputValues() {
    this._values = {};
    this._inputs.forEach(input => {
      this._values[input.name] = input.value;
    });
    return this._values;
  };

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handlerFormSubmit(this._getInputValues());
      this.close();
    })
  };

  close() {
    super.close();
    this._form.reset();
  };
}

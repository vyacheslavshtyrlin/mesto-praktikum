import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handlerFormSubmit) {
    super(popupSelector)
    this._handlerFormSubmit = handlerFormSubmit;
    this._selectorForm = this._popupSelector.querySelector('.form');
  }
  _getInputValues() {
    this._inputs = popupSelector.querySelectorAll('.form__field');
    this._values = {};
    this._inputs.forEach(input => {
      this._values[input.name] = input.value;
    });
    return this._values;
  };

  setEventListeners() {
    super.setEventListeners()
    this._selectorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handlerFormSubmit();
      this.close();
    })
  };

  close() {
    super.close();
    this._selectorForm.reset();
  };
}

export class FormValidator {
  constructor(data, formElement) {
    this._data = data
    this._form = formElement
    const {inputSelector, submitButtonSelector} = this._data;
    this._inputList = [...this._form.querySelectorAll(inputSelector)];
    this._submitButton = this._form.querySelector(submitButtonSelector);
  }

  _setSubmitButtonState() {
    this._submitButton.disabled = !this._form.checkValidity();
    this._submitButton.classList.toggle(this._data.inactiveButtonClass, !this._form.checkValidity());

  }
  _hideError(inputElement) {
    const {inputErrorClass, errorClass} = this._data;
    inputElement.classList.remove(inputErrorClass);
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
  };


  _showError(inputElement) {
    const {inputErrorClass, errorClass} = this._data;
    inputElement.classList.add(inputErrorClass);
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
  }



  _inputHandler(inputElement) {
    if (inputElement.validity.valid) {
      this._hideError(inputElement);

    } else {
      this._showError(inputElement);
    }
  }


  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._inputHandler(inputElement)
        this._setSubmitButtonState()
      })
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
};








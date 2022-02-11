const configValidation = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__error_visible',
};




function enableValidation(config) {
  const forms = [...document.querySelectorAll(config.formSelector)];
  forms.forEach(form => addFormListeners(form, config));
};


function addFormListeners(form, config) {
  form.addEventListener('submit', submitHandler);
  form.addEventListener('input', () => setSubmitButtonState(form, config));
  const inputs = [...form.querySelectorAll(config.inputSelector)];
  inputs.forEach(input => input.addEventListener('input', () => inputHandler(form, input, config)));
  inputs.forEach(input => input.addEventListener('mouseover', () => inputHandler(form, input, config)));
  form.addEventListener('mouseover', () => setSubmitButtonState(form, config));


  setSubmitButtonState(form, config);
};



function inputHandler(form, input, config) {
  if (input.validity.valid) {
    hideError(form, input, config);

  } else {
    showError(form, input, config);
  }
};

function showError(form, input, config) {
  input.classList.add(config.inputErrorClass);
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(config.errorClass);



};

function hideError(form, input, config) {
  input.classList.remove(config.inputErrorClass);
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
  errorElement.classList.remove(config.errorClass);

};

function setSubmitButtonState(form, config) {
  const button = form.querySelector(config.submitButtonSelector);
  button.disabled = !form.checkValidity();
  button.classList.toggle(config.inactiveButtonClass, !form.checkValidity());

}

function submitHandler(e) {
  e.preventDefault();
};

enableValidation(configValidation);




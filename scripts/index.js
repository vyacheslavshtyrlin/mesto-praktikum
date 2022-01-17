let buttonEdit = document.querySelector('.profile__edit-button');
let buttonClose = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__field_name_input');
let jobInput = document.querySelector('.form__field_job_input');
let namePage = document.querySelector('.profile__name');
let jobPage = document.querySelector('.profile__caption');



function closePopup() {
  popup.classList.remove('popup_opened');
}


function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = namePage.textContent;
  jobInput.value = jobPage.textContent;
}


function formSubmitHandler (evt) {
  evt.preventDefault();
  namePage.textContent = nameInput.value;
  jobPage.textContent = jobInput.value;
  closePopup();
}


formElement.addEventListener('submit', formSubmitHandler);
buttonClose.addEventListener('click', closePopup);
buttonEdit.addEventListener('click', openPopup);


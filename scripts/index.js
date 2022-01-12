let buttonEdit = document.querySelector('.profile__edit-button');
let buttonClose = document.querySelector('.popup__close-button');
let overlay = document.querySelector('.popup');
let popupopend = 'popup_opened';
let formElement = document.querySelector('.form');



function closePopup() {
  overlay.classList.remove(popupopend);
}


function openPopup() {
  overlay.classList.add(popupopend);
}


function formSubmitHandler (evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.form__name');
  let jobInput = document.querySelector('.form__job');
  let namePage = document.querySelector('.profile__name');
  let jobPage = document.querySelector('.profile__caption');
  namePage.textContent = nameInput.value;
  jobPage.textContent = jobInput.value;
  closePopup(overlay);
}


formElement.addEventListener('submit', formSubmitHandler);
buttonClose.addEventListener('click', closePopup);
buttonEdit.addEventListener('click', openPopup);


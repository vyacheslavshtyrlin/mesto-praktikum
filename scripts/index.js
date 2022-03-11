import { Card } from "./Card.js";
import { FormValidator } from './CardValidate.js';

const popupEdit = document.querySelector('.popup_type_profile-edit');
const openButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button_type_profile-edit');
const popupAdd = document.querySelector('.popup_type_card-add');
const addButton = document.querySelector('.profile__add-button');
const closeAddPopup = document.querySelector('.popup__close-button_type_card-add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__caption');
const formEdit = document.querySelector('.form_type_profile-edit');
const inputName = formEdit.querySelector('.form__field_input_name');
const inputJob = formEdit.querySelector('.form__field_input_job');
const сardInputPlace = document.querySelector('.form__field_input_place');
const cardInputLink = document.querySelector('.form__field_input_link');
const formAdd = document.querySelector('.form_type_card-add');
const popupZoom = document.querySelector('.popup_type_zoom');
const popupZoomClose = document.querySelector('.popup__close-button_type_zoom');


initialCards.forEach(item => {
  const card = new Card (item, '.card-template');
  const cardElement = card._addCard();
  const cardWrap = document.querySelector('.cards__item');
  cardWrap.append(cardElement)
});


function resetForm(form) {
  form.reset();
};


function addCard(event) {   //Добавление карточки при вводе значений в форму
  event.preventDefault();
  const card = new Card ({
    name: сardInputPlace.value,
    link: cardInputLink.value
  }, '.card-template');
  const cardElement = card._addCard();
  const cardWrap = document.querySelector('.cards__item');
  cardWrap.prepend(cardElement);
  closePopup(popupAdd);
  resetForm(formAdd);
};


function exitPopup(evt){
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup');
    closePopup(openedPopup);
  }
};


function handleClickByOverlay(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
};


export function openPopup(popup) {  // Открытие попапа
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', exitPopup);
  document.addEventListener('click', handleClickByOverlay);
}


function closePopup(popup) {  // закрытие попапа
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', exitPopup);
  document.removeEventListener('click', handleClickByOverlay);
}


function editProfilePopup() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;

}


function handlerFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupEdit);
}

const configValidation = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__error_visible',
};


const editFormValidation = new FormValidator(configValidation, formEdit);
const addFormValidation = new FormValidator(configValidation, formAdd);
editFormValidation.enableValidation();
addFormValidation.enableValidation();



formEdit.addEventListener('submit', handlerFormSubmit);
formAdd.addEventListener('submit', addCard);
addButton.addEventListener('click', () => {openPopup(popupAdd)});
closeAddPopup.addEventListener('click', () => {closePopup(popupAdd)});
openButton.addEventListener('click', () => {openPopup(popupEdit), editProfilePopup()});
closeButton.addEventListener('click', () => {closePopup(popupEdit)});
popupZoomClose.addEventListener('click', () => {closePopup(popupZoom)});


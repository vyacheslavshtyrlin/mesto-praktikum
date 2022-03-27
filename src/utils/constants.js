export const popupEdit = document.querySelector('.popup_type_profile-edit');
export const buttonOpen = document.querySelector('.profile__edit-button');
export const popupAdd = document.querySelector('.popup_type_card-add');
export const buttonAdd = document.querySelector('.profile__add-button');
export const formEdit = document.querySelector('.form_type_profile-edit');
export const nameInput = formEdit.querySelector('.form__field_input_name');
export const jobInput = formEdit.querySelector('.form__field_input_job');
export const formAdd = document.querySelector('.form_type_card-add');
export const popupZoom = document.querySelector('.popup_type_zoom');
export const configValidation = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__field_type_error',
  errorClass: 'form__error_visible',
};

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

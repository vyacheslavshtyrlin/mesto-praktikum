import  Card  from '../components/Card.js';
import  FormValidator  from '../components/CardValidate.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'


import {

  openButton,

  addButton,

  formEdit,

  inputName,

  inputJob,

  сardInputPlace,

  cardInputLink,

  formAdd,

  img,

  link,

  configValidation,

  initialCards,

} from '../utils/constants.js'








const profileInfo = new UserInfo('.profile__name', '.profile__caption')
const popupImage = new PopupWithImage('.popup_type_zoom', link, img);
const popupFormEdit = new PopupWithForm('.popup_type_profile-edit', '.form_type_profile-edit', handlerFormSubmit)
const popupAddForm = new PopupWithForm('.popup_type_card-add', '.form_type_card-add', addCard);
const formEditValidation = new FormValidator(configValidation, formEdit);
const formAddValidation = new FormValidator(configValidation, formAdd);

formEditValidation.enableValidation();
formAddValidation.enableValidation();


function addCardForm() {
  formAddValidation.setSubmitButtonState();
  popupAddForm.open();
}


popupFormEdit.setEventListeners();
popupImage.setEventListeners();
popupAddForm.setEventListeners();


function handleCardClick(img, link){
  popupImage.open(img, link);
};


const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCards(item, '.card-template');
    cardSection.setItem(card);
  }
}, '.cards__item');

cardSection.renderItems();


function createCards(item, selector) {
  const card = new Card(item, selector, handleCardClick);
  const cardElement = card.addCard();
  return cardElement
}


function addCard() {   //Добавление карточки при вводе значений в форму
  const card = createCards({
    name: сardInputPlace.value,
    link: cardInputLink.value
  }, '.card-template');
  cardSection.setItem(card);
};


function editProfilePopup() {
  popupFormEdit.open();
  const userData = profileInfo.getUserInfo();
  inputName.value = userData.name;
  inputJob.value = userData.info;
  formEditValidation.setSubmitButtonState()
}


function handlerFormSubmit() {
  profileInfo.setUserInfo(inputName, inputJob)
}



addButton.addEventListener('click', () => addCardForm());
openButton.addEventListener('click', () => editProfilePopup());


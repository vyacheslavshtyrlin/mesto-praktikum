import  Card  from '../components/Card.js';
import  FormValidator  from '../components/CardValidate.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'


import {
  popupEdit,

  openButton,

  popupAdd,

  addButton,

  formEdit,

  inputName,

  inputJob,

  сardInputPlace,

  cardInputLink,

  formAdd,

  popupZoom,

  img,

  link,

  configValidation,

  initialCards,

} from '../utils/constants.js'








const profileInfo = new UserInfo('.profile__name', '.profile__caption')
const popupImage = new PopupWithImage(popupZoom, link, img);
const popupFormEdit = new PopupWithForm(popupEdit, handlerFormSubmit)
const popupAddForm = new PopupWithForm(popupAdd, addCard);
const editFormValidation = new FormValidator(configValidation, formEdit);
const addFormValidation = new FormValidator(configValidation, formAdd);

editFormValidation.enableValidation();
addFormValidation.enableValidation();


function addCardForm() {
  popupAddForm.open();
  addFormValidation.setSubmitButtonState();
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
  }, '.card-template', handleCardClick);
  cardSection.setItem(card);
};


function editProfilePopup() {
  popupFormEdit.open();
  const userData = profileInfo.getUserInfo();
  inputName.value = userData.name;
  inputJob.value = userData.info;
  editFormValidation.setSubmitButtonState()
}


function handlerFormSubmit() {
  profileInfo.setUserInfo({name: inputName.value, info: inputJob.value})
}


addButton.addEventListener('click', () => addCardForm());
openButton.addEventListener('click', () => editProfilePopup());


console.log('Hello, World!')

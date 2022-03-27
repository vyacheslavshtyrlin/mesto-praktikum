import Card  from '../components/Card.js';
import FormValidator  from '../components/CardValidate.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'


import {
  buttonAdd,

  formEdit,

  nameInput,

  jobInput,

  formAdd,

  configValidation,

  initialCards,

  buttonOpen,
} from '../utils/constants.js'


const profileInfo = new UserInfo('.profile__name', '.profile__caption')
const popupImage = new PopupWithImage({popupSelector: '.popup_type_zoom'});
const formEditValidation = new FormValidator(configValidation, formEdit);
formEditValidation.enableValidation();
const formAddValidation = new FormValidator(configValidation, formAdd);
formAddValidation.enableValidation();


const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCards(item, '.card-template');
    cardSection.setItem(card);
  }
}, '.cards__item');
cardSection.renderItems();


const popupFormEdit = new PopupWithForm({
  handlerFormSubmit: (data) => {
    profileInfo.setUserInfo(data)
  },
  popupSelector: '.popup_type_profile-edit',
  formSelector: '.form_type_profile-edit'
});


const popupAddForm = new PopupWithForm({
  handlerFormSubmit: (data) => {
    addCard(data);
  },
  popupSelector: '.popup_type_card-add',
  formSelector:'.form_type_card-add'
});


popupFormEdit.setEventListeners();
popupImage.setEventListeners();
popupAddForm.setEventListeners();


function addCardForm() {
  formAddValidation.setSubmitButtonState();
  popupAddForm.open();
}


function handleCardClick(img, link){
  popupImage.open(img, link);
};


function createCards(item, selector) {
  const card = new Card(item, selector, handleCardClick);
  const cardElement = card.addCard();
  return cardElement
}


function addCard(data) {   //Добавление карточки при вводе значений в форму
  const card = createCards({
    name: data.place,
    link: data.link
  }, '.card-template');
  cardSection.setItem(card);
};


function editProfilePopup() {
  popupFormEdit.open();
  const userData = profileInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;
  formEditValidation.setSubmitButtonState()
}


buttonAdd.addEventListener('click', () => addCardForm());
buttonOpen.addEventListener('click', () => editProfilePopup());


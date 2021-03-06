import Card  from '../components/Card.js';
import FormValidator  from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js'
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import './index.css'


import {
  buttonAdd,

  formEdit,

  formAdd,

  configValidation,

  buttonOpen,

  formEditAvatar,

  buttonAvatarEdit


} from '../utils/constants.js'


const profileInfo = new UserInfo('.profile__name', '.profile__caption', '.profile__avatar')
const popupImage = new PopupWithImage({popupSelector: '.popup_type_zoom'});
const formEditValidation = new FormValidator(configValidation, formEdit);
formEditValidation.enableValidation();
const formAddValidation = new FormValidator(configValidation, formAdd);
formAddValidation.enableValidation();
const formEditAvatarValidation = new FormValidator(configValidation, formEditAvatar);
formEditAvatarValidation.enableValidation()
const api = new Api('9e8587c5-8b4a-4c10-9dd7-1ae3fee22dd0', 'https://nomoreparties.co/v1/cohort-38/')


let userId = null

Promise.all([api.getData('users/me'), api.getData('cards')])
.then((data) =>{
  const [userData, сardData] = data;
  userId = userData._id;
  profileInfo.setUserInfo(userData);
  cardSection.renderItems(сardData)
})
.catch((err) =>{
  console.log(err)
})


const cardSection = new Section({
  renderer: (data) => {
    const card = createCards(data)
    const cardElement = card.createCard()
    cardSection.setItem(cardElement)
  }
}, '.cards__item')


const popupConfirm = new PopupWithConfirm({
  callback: (cardId, card) => {
    api.deleteCard(cardId)
    .then(() => {
      card.remove()
    })
    .then(() =>{
      popupConfirm.close()
      card = null;
    })
    .catch((err) =>{
      console.log(err)
    })
  },
  popupSelector: '.popup_type_confirm',
  formSelector: '.form_type_confirm',
})


const createCards = (data) => {
  const card = new Card(data, '.card-template', userId, {
    handleCardClick: handleCardClick,
    handleDelete: (cardId, card) => {
      popupConfirm.open(cardId, card)
    },
    putLike: (data) => {
      api.putLike(data)
      .then((data) =>{
        card.handleLikeIcon()
        card.setLikeCounter(data)
      })
      .catch((err) =>{
        console.log(err)
      })
    },
    deleteLike: (data) => {
      api.removeLike(data)
      .then((data) => {
        card.handleLikeIcon()
        card.setLikeCounter(data)
      })
      .catch((err) =>{
        console.log(err)
      })
    }
  })
  return card;
}


  const popupAvatarEdit = new PopupWithForm({
    popupSelector: '.popup_type_edit',
    formSelector: '.form_type_avatar-add',
    handlerFormSubmit: (data) => {
      popupAvatarEdit.changeButtonText(true)
      api.editAvatar(data)
      .then((data) =>{
        profileInfo.setAvatar(data);
      })
      .then(() => {
        popupAvatarEdit.close()
      })
      .catch((err) =>{
        console.log(err)
      })
      .finally(() =>{
        popupAvatarEdit.changeButtonText(false);
      })
    }
  })


const popupFormEdit = new PopupWithForm({
  handlerFormSubmit: (data) => {
    popupFormEdit.changeButtonText(true)
    api.editProfie(data)
    .then((data) => {
      profileInfo.setUserInfo(data);
    })
    .then(() =>{
        popupFormEdit.close()
      })
      .catch((err) =>{
        console.log(err)
      })
      .finally(() =>{
        popupFormEdit.changeButtonText(false);
      })
  },
  popupSelector: '.popup_type_profile-edit',
  formSelector: '.form_type_profile-edit'
});


const popupAddForm = new PopupWithForm({
  handlerFormSubmit: (data) => {
    popupAddForm.changeButtonText(true);
    api.addCard(data).then((data) =>{
      const card = createCards(data);
      const cardElement = card.createCard()
      cardSection.setItem(cardElement)
    })
    .then(()=> {
      popupAddForm.close()
    })
    .catch((err) =>{
      console.log(err)
    })
    .finally(()=> {
      popupAddForm.changeButtonText(false);
    })
  },
  popupSelector: '.popup_type_card-add',
  formSelector:'.form_type_card-add'
});


popupFormEdit.setEventListeners();
popupImage.setEventListeners();
popupAddForm.setEventListeners();
popupConfirm.setEventListeners();
popupAvatarEdit.setEventListeners();


function addCardForm() {
  formAddValidation.resetValidation();
  formAddValidation.setSubmitButtonState();
  popupAddForm.open();
}


function handleCardClick(img, link){
  popupImage.open(img, link);
};


function editProfileAvatar() {
  popupAvatarEdit.open();
  formEditAvatarValidation.setSubmitButtonState();
  formEditAvatarValidation.resetValidation();

}


function editProfilePopup() {
  popupFormEdit.open();
  popupFormEdit.setInputValues(profileInfo.getUserInfo());
  formEditValidation.setSubmitButtonState();
  formEditValidation.resetValidation();
}


buttonAvatarEdit.addEventListener('click', () => editProfileAvatar());
buttonAdd.addEventListener('click', () => addCardForm());
buttonOpen.addEventListener('click', () => editProfilePopup());


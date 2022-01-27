let buttonEdit = document.querySelector('.profile__edit-button');
let buttonClose = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__field_name_input');
let jobInput = document.querySelector('.form__field_job_input');
let namePage = document.querySelector('.profile__name');
let jobPage = document.querySelector('.profile__caption');
const cardList = document.querySelector('.cards__item');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const popupImage = document.querySelector('.popup-img');
const popupImagePhoto = document.querySelector('.popup-img__image');
const popupAdd = document.querySelector('.popup_card-add');




const initialCards = [
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



const renderCards = (item) => {
  const card = cardTemplate.cloneNode(true);
  const cardCaption = card.querySelector('.card__caption');
  const cardImage = card.querySelector('.card__image');
  cardCaption.textContent = item.name;
  cardImage.src = item.link;
  cardList.prepend(card);
  const likeButton = card.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeButtonHandler);
}


const likeButtonHandler = (e) => {
  e.target.classList.toggle('card__like-button_active');
}

initialCards.forEach(item => {
  renderCards(item);
})



function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


function openPopup(popup) {
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
buttonEdit.addEventListener('click', openPopup(popupAdd));





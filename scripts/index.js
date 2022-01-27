const popupEdit = document.querySelector('.popup_profile-edit');
const openButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button_profile-edit');
const popupAdd = document.querySelector('.popup_card-add');
const addButton = document.querySelector('.profile__add-button');
const closeAddPopup = document.querySelector('.popup__close-button_card-add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__caption');
const form = document.querySelector('.form');
const inputName = form.querySelector('.form__field_input_name');
const inputJob = form.querySelector('.form__field_input_job');
const templateCard = document.querySelector('#card-template').content.querySelector('.card');
const cardWrap = document.querySelector('.cards__item');
const formAdd = document.querySelector('[name="add-image"]')
const сardInputPlace = document.querySelector('.form__field_input_place');
const cardInputLink = document.querySelector('.form__field_input_link');
const cardAddForm = document.querySelector('[name="add-image"]')
const popupZoom = document.querySelector('.popup_large-image');
const popupZoomImage = popupZoom.querySelector('.popup__image');
const popupZoomCaption = popupZoom.querySelector('.popup__caption');
const popupZoomClose = popupZoom.querySelector('.popup__close-button_large-image');
const popupAll = document.querySelectorAll('.popup');

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


initialCards.forEach(item => {
  renderCard(item, cardWrap);
});


function createCard(item) {
  const card = templateCard.cloneNode(true);
  const cardTitle = card.querySelector('.card__caption');
  const cardLike = card.querySelector('.card__like-button');
  const cardImage = card.querySelector('.card__image')
  const cardDelete = card.querySelector('.card__remove-button');
  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  function cardZoom() {
    openPopup(popupZoom);
    popupZoomImage.src = item.link;
    popupZoomCaption.textContent = item.name;
    popupZoomImage.alt = item.name;
  }
  cardDelete.addEventListener('click', removeButtonHandler);
  cardImage.addEventListener('click', cardZoom);
  cardLike.addEventListener('click', likeButtonHandler);

  return card
}

popupAll.forEach(item => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === "Escape") {
      item.classList.remove('popup_opened')
    }
  })
  item.addEventListener('click', (evt) => {
    evt.target.classList.toggle('popup_opened')
  })
})



function likeButtonHandler(e) {
  e.target.classList.toggle('card__like-button_active');
}

function removeButtonHandler(e) {
  e.target.closest('.card').remove();
}


function renderCard(item, wrap) {
  const cards = createCard(item);
  wrap.prepend(cards);
}


function addCard(event) {
  event.preventDefault();
  const card = {
    name: сardInputPlace.value,
    link: cardInputLink.value
  }
  renderCard(card, cardWrap);
  openPopup(popupAdd);
}

function closePopupLarge() {
  openPopup(popupZoom);
}

function openPopup(popup) {
  popup.classList.toggle('popup_opened');
}


function profilePopupAdd() {
  openPopup(popupAdd);
}


function profilePopupEdit() {
  openPopup(popupEdit);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popupEdit.classList.remove('popup_opened');
}


addButton.addEventListener('click', profilePopupAdd);
openButton.addEventListener('click', profilePopupEdit);
closeButton.addEventListener('click', profilePopupEdit);
closeAddPopup.addEventListener('click', profilePopupAdd);
form.addEventListener('submit', formSubmitHandler);
cardAddForm.addEventListener('submit', addCard);
popupZoomClose.addEventListener('click', closePopupLarge);

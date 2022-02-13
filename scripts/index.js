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
const templateCard = document.querySelector('#card-template').content.querySelector('.card');
const cardWrap = document.querySelector('.cards__item');
const сardInputPlace = document.querySelector('.form__field_input_place');
const cardInputLink = document.querySelector('.form__field_input_link');
const formAdd = document.querySelector('.form_type_card-add');
const popupZoom = document.querySelector('.popup_type_zoom');
const popupZoomImage = document.querySelector('.popup__image');
const popupZoomCaption = document.querySelector('.popup__caption');
const popupZoomClose = document.querySelector('.popup__close-button_type_zoom');
const popupAll = document.querySelectorAll('.popup');




initialCards.forEach(item => {
  renderCard(item, cardWrap);
});


function createCard(item) {
  const card = templateCard.cloneNode(true);
  const cardTitle = card.querySelector('.card__caption');     //Функция создания карточек
  const cardLike = card.querySelector('.card__like-button');
  const cardImage = card.querySelector('.card__image')
  const cardDelete = card.querySelector('.card__remove-button');
  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardDelete.addEventListener('click', removeButtonHandler);
  cardImage.addEventListener('click',() => zoomCard(item));
  cardLike.addEventListener('click', likeButtonHandler);
  return card
};



function zoomCard(item) {
  popupZoomImage.src = item.link;
  popupZoomCaption.textContent = item.name;
  popupZoomImage.alt = item.name;
  openPopup(popupZoom);
};


function likeButtonHandler(e) {
  e.target.classList.toggle('card__like-button_active');
}


function removeButtonHandler(e) {
  e.target.closest('.card').remove();
}


function renderCard(item, wrap) {
  const cards = createCard(item);
  wrap.prepend(cards);
};

function resetForm(form) {
  form.reset();
};

function addCard(event) {   //Добавление карточки при вводе значений в форму
  event.preventDefault();
  const card = {
    name: сardInputPlace.value,
    link: cardInputLink.value
  }
  renderCard(card, cardWrap);
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

function openPopup(popup) {  // Открытие попапа
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
  openPopup(popupEdit);
}



formEdit.addEventListener('submit', handlerFormSubmit);
formAdd.addEventListener('submit', addCard);
addButton.addEventListener('click', () => {openPopup(popupAdd), enableValidation});
closeAddPopup.addEventListener('click', () => {closePopup(popupAdd)});
openButton.addEventListener('click', () => {openPopup(popupEdit), editProfilePopup()});
closeButton.addEventListener('click', () => {closePopup(popupEdit)});
popupZoomClose.addEventListener('click', () => {closePopup(popupZoom)});

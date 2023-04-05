import Popup from './Popup.js';

export default class PopupPet extends Popup {
  constructor(selector) {
    super(selector);
    this.img = this.popup.querySelector('.popup__photo');
    this.title = this.popup.querySelector('.popup__title');
    this.subtitle = this.popup.querySelector('.popup__subtitle');
    this.text = this.popup.querySelector('.popup__main-text');
    this.facts = this.popup.querySelector('.popup__facts');
    this.factTemplate = document.querySelector('#popupFactTemplate');
  }
  fill(card) {
    this.title.textContent = card.name;
    this.subtitle.textContent = card.type + ' - ' + card.breed;
    this.text.textContent = card.description;
    this.img.src = card.img;
    this.img.alt = card.name;
  }
  open = (card) => {
    this.fill(card);
    super.open();
  };
}

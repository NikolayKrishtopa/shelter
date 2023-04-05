import Popup from './Popup.js';

export default class PopupPet extends Popup {
  constructor(selector) {
    super(selector);
    this.img = this.popup.querySelector('.popup__photo');
    this.title = this.popup.querySelector('.popup__title');
    this.subtitle = this.popup.querySelector('.popup__subtitle');
    this.text = this.popup.querySelector('.popup__main-text');
    this.factTemplate = this.popup
      .querySelector('#popupFactTemplate')
      .content.querySelector('.popup__fact');
    this.list = this.popup.querySelector('.popup__facts');
  }
  fill() {
    this.title.textContent = this.card.name;
    this.subtitle.textContent = this.card.type + ' - ' + this.card.breed;
    this.text.textContent = this.card.description;
    this.img.src = this.card.img;
    this.img.alt = this.card.name;
  }
  generateListItem(title, text) {
    const itemEl = this.factTemplate.cloneNode(true);
    const titleEl = itemEl.querySelector('.popup__fact-title');
    const textEl = itemEl.querySelector('.popup__fact-text');
    titleEl.textContent = title + ': ';
    textEl.textContent = text;
    return itemEl;
  }
  renderList() {
    for (let key in this.card.facts) {
      this.list.prepend(this.generateListItem(key, this.card.facts[key]));
    }
  }
  open = (card) => {
    this.card = card;
    this.fill();
    this.renderList();
    super.open();
  };
}

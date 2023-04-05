export default class CardPet {
  constructor(card, openPetPopup) {
    this.card = card;
    this.openPetPopup = () => openPetPopup(this.card);
    this.cardElement = document
      .querySelector('#pet-template')
      .content.cloneNode(true)
      .querySelector('.card');
    this.img = this.cardElement.querySelector('.card__img');
    this.text = this.cardElement.querySelector('.card__title');
  }
  setEventListeners() {
    this.cardElement.addEventListener('click', this.openPetPopup);
    console.log('click');
  }
  generateCard = () => {
    this.img.src = this.card.img;
    this.img.alt = this.card.name;
    this.text.textContent = this.card.name;
    this.setEventListeners();
    return this.cardElement;
  };
}

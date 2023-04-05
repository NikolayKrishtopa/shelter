export default class CardPet {
  constructor(card, openPetPopup) {
    this.card = card;
    this.cardTemplate = document.querySelector('#pet-template');
    this.openPetPopup = openPetPopup;
  }
  generateCard = () => {
    const petElement = this.cardTemplate.content
      .cloneNode(true)
      .querySelector('.card');
    const img = petElement.querySelector('.card__img');
    const text = petElement.querySelector('.card__title');
    img.src = this.card.img;
    img.alt = this.card.name;
    text.textContent = this.card.name;
    return petElement;
  };
}

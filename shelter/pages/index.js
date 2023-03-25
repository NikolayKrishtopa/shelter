const HELPS = [
  { id: 1, name: 'Pet food', img: 'icon-pet-food.svg' },
  { id: 2, name: 'Transportation', img: 'icon-transportation.svg' },
  { id: 3, name: 'Toys', img: 'icon-toys.svg' },
  { id: 4, name: 'Bowls and cups', img: 'icon-sleeping-area.svg' },
  { id: 5, name: 'Shampoos', img: 'icon-shampoos.svg' },
  { id: 6, name: 'Vitamins', img: 'icon-vitamins.svg' },
  { id: 7, name: 'Medicines', img: 'icon-medicines.svg' },
  { id: 8, name: 'Collars / leashes', img: 'icon-collars-leashes.svg' },
  { id: 9, name: 'Sleeping areas', img: 'icon-sleeping-area.svg' },
];

const PETS = [
  {
    id: 1,
    name: 'Katrine',
    short: 'Cat - British Shorthair',
    description:
      'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    img: 'pets-katrine.png',
  },

  {
    id: 2,
    name: 'Jennifer',
    short: 'Dog - Labrador',
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    img: 'pets-jennifer.png',
  },
  {
    id: 3,
    name: 'Woody',
    short: 'Dog - Shih tzu',
    description:
      'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    img: 'pets-woody.png',
  },
  {
    id: 4,
    name: 'Scarlett',
    short: 'Dog - Golden Retriever',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    img: 'pets-scarlet.png',
  },
  {
    id: 5,
    name: 'Sophia',
    short: 'Dog - Labrador',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    img: 'pets-sophia.png',
  },
  {
    id: 6,
    name: 'Timmy',
    short: 'Cat - British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    img: 'pets-timmy.png',
  },
  {
    id: 7,
    name: 'Freddie',
    short: 'Cat - British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    img: 'pets-freddie.png',
  },
  {
    id: 8,
    name: 'Charly',
    short:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    description: 'Dog - Jack Russell Terrier ',
    img: 'pets-charly.png',
  },
];

const PAGES = {
  main: 'main',
  pets: 'pets',
};

class Main {
  constructor(pages, pets, helps) {
    this.pages = pages;
    this.pets = pets;
    this.helps = helps;
    this.about = document.querySelector('.about');
    this.help = document.querySelector('.help');
    this.donate = document.querySelector('.donate');
    this.headerContent = document.querySelector('.header__container');
    this.currentPage = this.pages.main;
    this.petTemplate = document.querySelector('#pet-template');
    this.helpTemplate = document.querySelector('#help-template');
    this.petsContainer = document.querySelector('.pets__container');
    this.helpsContainer = document.querySelector('.help__container');
    this.render();
  }
  createHelpElement = (help) => {
    const helpElement = this.helpTemplate.content
      .cloneNode(true)
      .querySelector('.help__item');
    const img = helpElement.querySelector('.help__img');
    const text = helpElement.querySelector('.help__item-title');
    img.src = './images/' + help.img;
    img.alt = help.name;
    text.textContent = help.name;
    return helpElement;
  };

  renderHelps = () =>
    this.helps.forEach((h) =>
      this.helpsContainer.append(this.createHelpElement(h))
    );
  createPetElement = (pet) => {
    const petElement = this.petTemplate.content
      .cloneNode(true)
      .querySelector('.card');
    const img = petElement.querySelector('.card__img');
    const text = petElement.querySelector('.card__title');
    img.src = './images/' + pet.img;
    img.alt = pet.name;
    text.textContent = pet.name;
    return petElement;
  };

  renderPets = () =>
    this.pets
      .slice(0, 3)
      .forEach((p) => this.petsContainer.append(this.createPetElement(p)));

  render = () => {
    switch (this.currentPage) {
      case this.pages.main:
        this.renderHelps();
        this.renderPets();
        break;
      case this.pages.pets:
        break;
      default:
        break;
    }
  };
}

const main = new Main(PAGES, PETS, HELPS);

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
    name: 'Sophia',
    short: 'Dog - Labrador',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    img: 'pets-sophia.png',
  },
  {
    id: 5,
    name: 'Timmy',
    short: 'Cat - British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    img: 'pets-timmy.png',
  },
  {
    id: 6,
    name: 'Charly',
    short:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    description: 'Dog - Jack Russell Terrier ',
    img: 'pets-charly.png',
  },
  {
    id: 7,
    name: 'Scarlett',
    short: 'Dog - Golden Retriever',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    img: 'pets-scarlet.png',
  },
  {
    id: 8,
    name: 'Freddie',
    short: 'Cat - British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    img: 'pets-freddie.png',
  },
];

const PAGES = {
  main: 'main',
  pets: 'pets',
};

class Main {
  constructor(pages, pets, helps) {
    this.mainOnly = document.querySelectorAll('.main');
    this.petsOnly = document.querySelectorAll('.for-pets');
    this.pages = pages;
    this.petslist = pets;
    this.helps = helps;
    this.pets = document.querySelector('.pets');
    this.about = document.querySelector('.about');
    this.help = document.querySelector('.help');
    this.donate = document.querySelector('.donate');
    this.headerContent = document.querySelector('.header__container');
    this.currentPage = this.pages.main;
    this.petTemplate = document.querySelector('#pet-template');
    this.helpTemplate = document.querySelector('#help-template');
    this.petsContainer = document.querySelector('.pets__container');
    this.helpsContainer = document.querySelector('.help__container');
    this.petsButtons = document.querySelectorAll('.petsBtn');
    this.linksToMain = document.querySelectorAll('.linkToMain');
    this.links = document.querySelectorAll('.navbar__menu-link');
    this.header = document.querySelector('.header');
    this.navbarSubtitle = document.querySelector('.navbar__subtitle');
    this.navbarTitle = document.querySelector('.navbar__title');
    this.LinkToMain = document.querySelector('#main-link');
    this.LinkToPets = document.querySelector('#pets-link');
    this.initiate();
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

  renderHelps = () => {
    if (this.helpsContainer.childNodes.length) return;
    this.helps.forEach((h) =>
      this.helpsContainer.append(this.createHelpElement(h))
    );
  };
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

  renderPets = () => {
    this.petsContainer.querySelectorAll('.card').forEach((c) => c.remove());
    const itemsToRender =
      this.currentPage === this.pages.main
        ? this.petslist.slice(0, 3)
        : this.petslist;
    itemsToRender.forEach((p) =>
      this.petsContainer.append(this.createPetElement(p))
    );
  };

  setListeners = () => {
    this.petsButtons.forEach((b) =>
      b.addEventListener('click', () => {
        this.currentPage = this.pages.pets;
        this.render();
      })
    );
    this.linksToMain.forEach((l) => {
      l.addEventListener('click', () => {
        this.currentPage = this.pages.main;
        this.render();
      });
    });
  };

  render = () => {
    switch (this.currentPage) {
      case this.pages.main:
        this.mainOnly.forEach((m) => m.classList.remove('disabled'));
        this.petsOnly.forEach((m) => m.classList.add('disabled'));
        this.header.classList.remove('header_state_pets');
        this.navbarSubtitle.classList.remove('navbar__subtitle_state_pets');
        this.navbarTitle.classList.remove('navbar__title_state_pets');
        this.links.forEach((l) =>
          l.classList.remove('navbar__menu-link_state_pets')
        );
        this.petsContainer.classList.remove('pets__container_state_pets');
        this.pets.classList.remove('pets_state_pets');
        this.LinkToMain.classList.add('navbar__menu-link_state_active');
        this.LinkToPets.classList.remove('navbar__menu-link_state_active');
        this.renderHelps();
        this.renderPets();
        break;
      case this.pages.pets:
        this.mainOnly.forEach((m) => m.classList.add('disabled'));
        this.petsOnly.forEach((m) => m.classList.remove('disabled'));
        this.header.classList.add('header_state_pets');
        this.navbarSubtitle.classList.add('navbar__subtitle_state_pets');
        this.navbarTitle.classList.add('navbar__title_state_pets');
        this.links.forEach((l) =>
          l.classList.add('navbar__menu-link_state_pets')
        );
        this.petsContainer.classList.add('pets__container_state_pets');
        this.pets.classList.add('pets_state_pets');
        this.LinkToMain.classList.remove('navbar__menu-link_state_active');
        this.LinkToPets.classList.add('navbar__menu-link_state_active');
        this.renderPets();
        break;
      default:
        break;
    }
  };
  initiate = () => {
    this.setListeners();
    this.render();
  };
}

const main = new Main(PAGES, PETS, HELPS);

const REQUIREMENTS = `
Проверка верстки +7

верстка страницы валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ . +4
Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований
логотип в хедере состоит из текстовых элементов +1
страница содержит ровно один элемент <h1> +1
добавлен favicon +1
Вёрстка соответствует макету +35

блок <header> +5
блок Not only +5
блок About +5
блок Our Friends +5
блок Help +5
блок In addition +5
блок <footer> +5
Требования к css +6

для позиционирования элементов блока Help использована сеточная верстка (flexbox или grid) +2
при уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине +2
фоновый цвет тянется на всю ширину страницы +2
Интерактивность элементов +12

элемент About the Shelter в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны +2
каждая карточка с питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки +2
плавная прокрутка по якорям +2
выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Main +2
выполнена интерактивность ссылок и кнопок. Интерактивность заключается не только в изменении внешнего вида курсора, например, при помощи свойства cursor: pointer, но и в использовании и других визуальных эффектов, например, изменение цвета фона или цвета шрифта, согласно стайлгайду в макете. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2
обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не влияющее на соседние элементы +2
Страница Pets (40)
Проверка верстки +7

верстка страницы валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ . +4
Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований
логотип в хедере состоит из текстовых элементов +1
страница содержит ровно один элемент <h1> +1
добавлен favicon +1
Вёрстка соответствует макету +15

блок <header> +5
блок Our Friends +5
блок <footer> +5
Требования к css +4

при уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине +2
фоновый цвет тянется на всю ширину страницы +2
Интерактивность элементов +14

элемент Our pets в навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны +2
доступные кнопки пагинации (вправо) активны, недоступные (влево) - неактивны (disabled) +2
каждая карточка с питомцем в блоке Our Friends интерактивна при наведении на любую область этой карточки +2
плавная прокрутка по якорям +2
выполняются все ссылочные связи согласно Перечню ссылочных связей для страницы Pets +2
выполнена интерактивность ссылок и кнопок. Интерактивность заключается не только в изменении внешнего вида курсора, например, при помощи свойства cursor: pointer, но и в использовании и других визуальных эффектов, например, изменение цвета фона или цвета шрифта, согласно стайлгайду в макете. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +2

обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не влияющее на соседние элементы +2'
`;

console.log(REQUIREMENTS);

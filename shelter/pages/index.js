import './index.scss';
import { PAGES } from '../utils/constants';
import { HELPS } from '../utils/constants';
import { PETS } from '../utils/constants';

class Main {
  constructor(pages, pets, helps) {
    this.mainOnly = document.querySelectorAll('.main');
    this.petsOnly = document.querySelectorAll('.for-pets');
    this.pages = pages;
    this.petslist =
      this.currentPage === this.pages.main
        ? pets
        : [...pets, ...pets, ...pets, ...pets];
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
    this.nextPageBtn = document.querySelector('#nextPageBtn');
    this.firstPageBtn = document.querySelector('#firstPageBtn');
    this.lastPageBtn = document.querySelector('#lastPageBtn');
    this.prevPageBtn = document.querySelector('#prevPageBtn');
    this.curPageLabel = document.querySelector('#curPageLabel');
    this.curPage = 2;
    this.initiate();
  }
  createHelpElement = (help) => {
    const helpElement = this.helpTemplate.content
      .cloneNode(true)
      .querySelector('.help__item');
    const img = helpElement.querySelector('.help__img');
    const text = helpElement.querySelector('.help__item-title');
    img.src = help.img;
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
    img.src = pet.img;
    img.alt = pet.name;
    text.textContent = pet.name;
    return petElement;
  };

  renderPets = () => {
    this.petsContainer.querySelectorAll('.card').forEach((c) => c.remove());
    const itemsToRender = this.petslist.slice(
      this.itemsQtyPerScreen * (this.curPage - 1),
      this.itemsQtyPerScreen * this.curPage
    );

    itemsToRender.forEach((p) =>
      this.petsContainer.append(this.createPetElement(p))
    );
  };

  calcPageQty = () => {
    this.pagesQty = Math.ceil(this.petslist.length / this.itemsQtyPerScreen);
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
    window.addEventListener('resize', (e) => {
      const width = e.target.innerWidth;
      this.setItemsQtyPerScreen(width);
      this.calcPageQty();
      this.renderPets();
      console.log(this.itemsQtyPerScreen);
    });
    this.nextPageBtn.addEventListener('click', () => {
      if (this.curPage === this.pagesQty) return;
      this.curPage++;
      this.renderPets();
    });
    this.prevPageBtn.addEventListener('click', () => {
      if (this.curPage === 1) return;
      this.curPage--;
      this.renderPets();
    });
    this.lastPageBtn.addEventListener('click', () => {
      if (this.curPage === this.pagesQty) return;
      this.curPage = this.pagesQty;
      this.renderPets();
    });
    this.prevPageBtn.addEventListener('click', () => {
      if (this.curPage === 1) return;
      this.curPage = 1;
      this.renderPets();
    });
  };

  setItemsQtyPerScreen = (width) => {
    console.log(width);
    if (this.currentPage === this.pages.main) {
      if (width <= 760) {
        this.itemsQtyPerScreen = 1;
      } else if (width <= 1100) {
        this.itemsQtyPerScreen = 2;
      } else {
        this.itemsQtyPerScreen = 3;
      }
    } else if (this.currentPage === this.pages.pets) {
      if (width <= 660) {
        this.itemsQtyPerScreen = 3;
      } else if (width < 1199) {
        this.itemsQtyPerScreen = 6;
      } else {
        this.itemsQtyPerScreen = 8;
      }
    }
  };
  render = () => {
    this.setItemsQtyPerScreen(window.innerWidth);
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
    this.setItemsQtyPerScreen(window.outerWidth);
    this.calcPageQty();
    this.render();
  };
}

const main = new Main(PAGES, PETS, HELPS);

const REQUIREMENTS = `
Требования к вёрстке
Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14
блок <header>: +2
блок Not only: +2
блок About: +2
блок Our Friends: +2
блок Help: +2
блок In addition: +2
блок <footer>: +2
Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14
блок <header>: +2
блок Not only: +2
блок About: +2
блок Our Friends: +2
блок Help: +2
блок In addition: +2
блок <footer>: +2
Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14
блок <header>: +2
блок Not only: +2
блок About: +2
блок Our Friends: +2
блок Help: +2
блок In addition: +2
блок <footer>: +2
Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2
Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2
Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6
блок <header>: +2
блок Our Friends: +2
блок <footer>: +2
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20
нет полосы прокрутки при ширине страницы Main от 1280рх до 768рх: +5
нет полосы прокрутки при ширине страницы Main от 768рх до 320рх: +5
нет полосы прокрутки при ширине страницы Pets от 1280рх до 768рх: +5
нет полосы прокрутки при ширине страницы Pets от 768рх до 320рх: +5
Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8
на странице Main: +4
на странице Pets: +4
При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4
Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется
Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8
`;

// console.log(REQUIREMENTS);

import './index.scss';
import { PAGES } from '../utils/constants';
import { HELPS } from '../utils/constants';
import { PETS } from '../utils/constants';

class Main {
  constructor(pages, pets, helps) {
    this.mainOnly = document.querySelectorAll('.main');
    this.petsOnly = document.querySelectorAll('.for-pets');
    this.pages = pages;
    this.pets = pets;
    this.helps = helps;
    this.petsSection = document.querySelector('.pets');
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

  calculatePetsList = () => {
    this.petsList =
      this.currentPage === this.pages.main
        ? this.pets
        : [...this.pets, ...this.pets, ...this.pets, ...this.pets];
  };
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
    const itemsToRender = this.petsList.slice(
      this.itemsQtyPerScreen * (this.curPage - 1),
      this.itemsQtyPerScreen * this.curPage
    );

    itemsToRender.forEach((p) =>
      this.petsContainer.append(this.createPetElement(p))
    );
  };

  calcPageQty = () => {
    this.pagesQty = Math.ceil(this.petsList.length / this.itemsQtyPerScreen);
  };

  setListeners = () => {
    this.petsButtons.forEach((b) =>
      b.addEventListener('click', () => {
        this.currentPage = this.pages.pets;
        this.curPage = 1;
        this.calculatePetsList();
        this.calcPageQty();
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
    });
    this.nextPageBtn.addEventListener('click', () => {
      if (this.curPage === this.pagesQty) return;
      this.curPage += 1;
      this.renderPageNo();
      this.renderPets();
    });
    this.prevPageBtn.addEventListener('click', () => {
      if (this.curPage === 1) return;
      this.curPage -= 1;
      this.renderPageNo();
      this.renderPets();
    });
    this.lastPageBtn.addEventListener('click', () => {
      if (this.curPage === this.pagesQty) return;
      this.curPage = this.pagesQty;
      this.renderPageNo();
      this.renderPets();
    });
    this.firstPageBtn.addEventListener('click', () => {
      if (this.curPage === 1) return;
      this.curPage = 1;
      this.renderPageNo();
      this.renderPets();
    });
  };

  renderPageNo = () => {
    this.curPageLabel.textContent = this.curPage;
  };
  setItemsQtyPerScreen = (width) => {
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
        this.petsSection.classList.remove('pets_state_pets');
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
        this.petsSection.classList.add('pets_state_pets');
        this.LinkToMain.classList.remove('navbar__menu-link_state_active');
        this.LinkToPets.classList.add('navbar__menu-link_state_active');
        this.calcPageQty();
        this.renderPageNo();
        this.renderPets();
        break;
      default:
        break;
    }
  };
  initiate = () => {
    this.calculatePetsList();
    this.setListeners();
    this.setItemsQtyPerScreen(window.outerWidth);
    this.calcPageQty();
    this.render();
  };
}

const main = new Main(PAGES, PETS, HELPS);

const REQUIREMENTS = ``;

// console.log(REQUIREMENTS);

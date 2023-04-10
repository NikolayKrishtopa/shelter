export default class Pages {
  constructor(pages, pets, helps, createPetCard, openPetPopup, shuffle) {
    this.carouselPrevBtn = document.querySelector('#carouselPrevBtn');
    this.carouselNextBtn = document.querySelector('#carouselNextBtn');
    this.shuffle = shuffle;
    this.createPetCard = createPetCard;
    this.openPetPopup = openPetPopup;
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
    this.curPage = 1;
    this.isSideBarOpen = false;
    this.navbar = document.querySelector('.navbar__nav');
    this.menu = document.querySelector('.navbar__menu');
    this.burgerBtn = document.querySelector('.navbar__burger-btn');
    this.initiate();
  }

  renderSideBar = () => {
    if (this.isSideBarOpen) {
      this.navbar.classList.add('navbar__nav_open');
      this.burgerBtn.classList.add('navbar__burger-btn_open');
    } else {
      this.navbar.classList.remove('navbar__nav_open');
      this.burgerBtn.classList.remove('navbar__burger-btn_open');
    }
  };

  calculatePetsList = () => {
    this.petsList =
      this.currentPage === this.pages.main
        ? this.pets
        : [
            ...this.shuffle(this.pets),
            ...this.shuffle(this.pets),
            ...this.shuffle(this.pets),
            ...this.shuffle(this.pets),
            ...this.shuffle(this.pets),
            ...this.shuffle(this.pets),
          ];
  };

  renderBtnState = () => {
    if (this.curPage === this.pagesQty) {
      this.nextPageBtn.inactive = true;
      this.lastPageBtn.inective = true;
      this.nextPageBtn.classList.add('button_state_inactive');
      this.lastPageBtn.classList.add('button_state_inactive');
      this.prevPageBtn.inactive = false;
      this.firstPageBtn.inective = false;
      this.prevPageBtn.classList.remove('button_state_inactive');
      this.firstPageBtn.classList.remove('button_state_inactive');
    } else if (this.curPage === 1) {
      this.prevPageBtn.inactive = true;
      this.firstPageBtn.inective = true;
      this.prevPageBtn.classList.add('button_state_inactive');
      this.firstPageBtn.classList.add('button_state_inactive');
      this.nextPageBtn.inactive = false;
      this.lastPageBtn.inective = false;
      this.nextPageBtn.classList.remove('button_state_inactive');
      this.lastPageBtn.classList.remove('button_state_inactive');
    } else {
      this.nextPageBtn.inactive = false;
      this.lastPageBtn.inective = false;
      this.nextPageBtn.classList.remove('button_state_inactive');
      this.lastPageBtn.classList.remove('button_state_inactive');
      this.prevPageBtn.inactive = false;
      this.firstPageBtn.inective = false;
      this.prevPageBtn.classList.remove('button_state_inactive');
      this.firstPageBtn.classList.remove('button_state_inactive');
    }
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

  calcRenderList = () => {
    this.itemsToRender = this.petsList.slice(
      this.itemsQtyPerScreen * (this.curPage - 1),
      this.itemsQtyPerScreen * this.curPage
    );
    this.itemsNotRendered = this.petsList.slice(
      this.itemsQtyPerScreen * this.curPage
    );
  };

  slideRight = () => {
    this.petsContainer.style.transform = `translateX(${
      270 * this.itemsQtyPerScreen
    }px)`;
    this.petsContainer.style.opacity = '0';

    const moveTimer = setTimeout(() => {
      this.petsContainer.style.transform = `translateX(-${
        270 * this.itemsQtyPerScreen
      }px)`;
      return clearTimeout(moveTimer);
    }, '100');

    const showTimer = setTimeout(() => {
      this.petsContainer.style.opacity = '100%';
      this.petsContainer.style.transform = `translateX(0)`;
      return clearTimeout(showTimer);
    }, '200');
  };

  slideLeft = () => {
    this.petsContainer.style.transform = `translateX(-${
      270 * this.itemsQtyPerScreen
    }px)`;
    this.petsContainer.style.opacity = '0';
    const moveTimer = setTimeout(() => {
      this.petsContainer.style.transform = `translateX(${
        270 * this.itemsQtyPerScreen
      }px)`;
      return clearTimeout(moveTimer);
    }, '100');

    const hideTimer = setTimeout(() => {
      this.petsContainer.style.opacity = '100%';
      this.petsContainer.style.transform = `translateX(0)`;
      return clearTimeout(hideTimer);
    }, '200');
  };

  handleCarouselNext = () => {
    this.slideLeft();
    switch (this.lastAction) {
      case 'next':
        this.petsList = [
          ...this.shuffle(this.itemsNotRendered),
          ...this.itemsToRender,
        ];
        this.renderPets();
        this.lastAction = 'next';
        break;
      case undefined:
        this.petsList = [
          ...this.shuffle(this.itemsNotRendered),
          ...this.itemsToRender,
        ];
        this.renderPets();
        this.lastAction = 'next';
        break;
      case 'prev':
        this.petsList = [...this.itemsNotRendered, ...this.itemsToRender];
        this.renderPets();
        this.lastAction = 'next';
        break;
      default:
        this.lastAction = 'next';
        break;
    }
  };

  handleCarouselPrev = () => {
    this.slideRight();
    this.petsList = [
      ...this.petsList.slice(this.petsList.length - this.itemsQtyPerScreen),
      ...this.petsList.slice(0, this.petsList.length - this.itemsQtyPerScreen),
    ];
    this.renderPets();
    this.lastAction = 'prev';
  };

  renderPets = () => {
    this.petsContainer.innerHTML = '';
    this.calcRenderList();
    this.itemsToRender.forEach((p) =>
      this.petsContainer.append(this.createPetCard(p, this.openPetPopup))
    );
  };

  calcPageQty = () => {
    this.pagesQty = Math.ceil(this.petsList.length / this.itemsQtyPerScreen);
  };

  lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  unlockScroll = () => {
    document.body.style.overflow = 'auto';
  };

  openSideBar = () => {
    this.isSideBarOpen = true;
    const timer = setTimeout(() => {
      this.menu.style.transform = 'none';
      return clearTimeout(timer);
    }, '0');
    this.lockScroll();
    this.renderSideBar();
  };

  closeSideBar = () => {
    this.menu.style.transform = 'translateX(100%)';
    const timer = setTimeout(() => {
      this.isSideBarOpen = false;
      this.unlockScroll();
      this.renderSideBar();
      return clearTimeout(timer);
    }, '300');
  };

  toggleSideBar = () => {
    this.isSideBarOpen ? this.closeSideBar() : this.openSideBar();
  };

  hideSideBar = () => {
    this.isSideBarOpen = false;
    this.renderSideBar();
  };

  setListeners = () => {
    this.petsButtons.forEach((b) =>
      b.addEventListener('click', () => {
        this.currentPage = this.pages.pets;
        this.curPage = 1;
        this.renderBtnState();
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
      const width = Math.min(e.target.innerWidth, e.target.outerWidth);
      // this.calculatePetsList();
      if (this.curPage > this.pagesQty) {
        this.curPage = this.pagesQty;
      }
      this.setItemsQtyPerScreen(width);
      this.calcPageQty();
      this.renderPets();
      this.hideSideBar();
      this.renderPageNo();
      this.renderBtnState();

      console.log(this.itemsQtyPerScreen);
    });

    this.nextPageBtn.addEventListener('click', () => {
      if (this.curPage === this.pagesQty) return;
      this.curPage += 1;
      this.renderPageNo();
      this.renderPets();
      this.renderBtnState();
    });
    this.prevPageBtn.addEventListener('click', () => {
      if (this.curPage === 1) return;
      this.curPage -= 1;
      this.renderPageNo();
      this.renderPets();
      this.renderBtnState();
    });
    this.lastPageBtn.addEventListener('click', () => {
      if (this.curPage === this.pagesQty) return;
      this.curPage = this.pagesQty;
      this.renderPageNo();
      this.renderPets();
      this.renderBtnState();
    });
    this.firstPageBtn.addEventListener('click', () => {
      if (this.curPage === 1) return;
      this.curPage = 1;
      this.renderPageNo();
      this.renderPets();
      this.renderBtnState();
    });
    this.burgerBtn.addEventListener('click', this.toggleSideBar);
    this.navbar.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('navbar__menu-link') ||
        e.target.classList.contains('navbar__nav')
      ) {
        this.toggleSideBar();
      }
    });
    this.carouselNextBtn.addEventListener('click', this.handleCarouselNext);
    this.carouselPrevBtn.addEventListener('click', this.handleCarouselPrev);
  };

  renderPageNo = () => {
    this.curPageLabel.textContent = this.curPage;
  };

  setItemsQtyPerScreen = (width) => {
    if (this.currentPage === this.pages.main) {
      if (width <= 767) {
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

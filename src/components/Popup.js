export default class Popup {
  constructor(selector) {
    this.popup = document.querySelector(selector);
    this.closeBtn = this.popup.querySelector('.popup__close-btn');
    this.container = this.popup.querySelector('.popup__container');
  }

  lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  unlockScroll = () => {
    document.body.style.overflow = 'auto';
  };

  open() {
    this.popup.classList.add('popup_open');
    this.lockScroll();
    this.setListeners();
  }

  close = () => {
    this.popup.classList.remove('popup_open');
    this.unlockScroll();
    this.unsetListeners();
  };

  setListeners = () => {
    this.popup.addEventListener('click', this.close);
    this.closeBtn.addEventListener('click', this.close);
    this.container.addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('keyup', this.close);
  };

  unsetListeners = () => {
    this.popup.removeEventListener('click', this.close);
    this.closeBtn.removeEventListener('click', this.close);
    this.container.removeEventListener('click', (e) => e.stopPropagation());
    document.removeEventListener('keyup', this.close);
  };
}

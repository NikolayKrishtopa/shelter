(()=>{"use strict";var e="",t=[{id:1,name:"Pet food",img:e+"5bb78a2f1af7d3fc0e35.svg"},{id:2,name:"Transportation",img:e+"804c2a69d91073746905.svg"},{id:3,name:"Toys",img:e+"de0da61f230c46feb2f6.svg"},{id:4,name:"Bowls and cups",img:e+"5a02ed329baa28293625.svg"},{id:5,name:"Shampoos",img:e+"9e8589d176f27a8865f7.svg"},{id:6,name:"Vitamins",img:e+"933ddf6071875aa39045.svg"},{id:7,name:"Medicines",img:e+"42a894b85d842dc1e2b5.svg"},{id:8,name:"Collars / leashes",img:e+"0e97acbf6aca170055e2.svg"},{id:9,name:"Sleeping areas",img:e+"34a8245e988a551acd3b.svg"}],n=[{id:1,name:"Katrine",img:e+"77ed2e1f8ad833831569.png",type:"Cat",breed:"British Shorthair",description:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",facts:{age:"6 months",inoculations:["panleukopenia"],diseases:["none"],parasites:["none"]}},{id:2,name:"Jennifer",img:e+"dd21f2736738a5b57aa9.png",type:"Dog",breed:"Labrador",description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",facts:{age:"2 months",inoculations:["none"],diseases:["none"],parasites:["none"]}},{id:3,name:"Woody",img:e+"419665e3e0ae8def3417.png",type:"Dog",breed:"Golden Retriever",description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",facts:{age:"3 years 6 months",inoculations:["adenovirus","distemper"],diseases:["right back leg mobility reduced"],parasites:["none"]}},{id:4,name:"Sophia",img:e+"1061954c647d4b1e947d.png",type:"Dog",breed:"Shih tzu",description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",facts:{age:"1 month",inoculations:["parvovirus"],diseases:["none"],parasites:["none"]}},{id:5,name:"Timmy",img:e+"2e5cc9362cc741ac669a.png",type:"Cat",breed:"British Shorthair",description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",facts:{age:"2 years 3 months",inoculations:["calicivirus","viral rhinotracheitis"],diseases:["kidney stones"],parasites:["none"]}},{id:6,name:"Charly",img:e+"9e3f07889cb652f02df1.png",type:"Dog",breed:"Jack Russell Terrier",description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",facts:{age:"8 years",inoculations:["bordetella bronchiseptica","leptospirosis"],diseases:["deafness","blindness"],parasites:["lice","fleas"]}},{id:7,name:"Scarlett",img:e+"27ded6623029ed433f53.png",type:"Dog",breed:"Jack Russell Terrier",description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",facts:{age:"3 months",inoculations:["parainfluenza"],diseases:["none"],parasites:["none"]}},{id:8,name:"Freddie",img:e+"2cd395494c18249f0a5a.png",type:"Cat",breed:"British Shorthair",description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",facts:{age:"2 months",inoculations:["rabies"],diseases:["none"],parasites:["none"]}}];function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,n){return(t=l(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}var u=s((function e(t,n,r,a,o,s){var l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"renderSideBar",(function(){l.isSideBarOpen?(l.navbar.classList.add("navbar__nav_open"),l.burgerBtn.classList.add("navbar__burger-btn_open")):(l.navbar.classList.remove("navbar__nav_open"),l.burgerBtn.classList.remove("navbar__burger-btn_open"))})),c(this,"calculatePetsList",(function(){l.petsList=l.currentPage===l.pages.main?l.shuffle(l.pets):[].concat(i(l.shuffle(l.pets)),i(l.shuffle(l.pets)),i(l.shuffle(l.pets)),i(l.shuffle(l.pets)),i(l.shuffle(l.pets)),i(l.shuffle(l.pets)))})),c(this,"renderBtnState",(function(){l.curPage===l.pagesQty?(l.nextPageBtn.inactive=!0,l.lastPageBtn.inective=!0,l.nextPageBtn.classList.add("button_state_inactive"),l.lastPageBtn.classList.add("button_state_inactive"),l.prevPageBtn.inactive=!1,l.firstPageBtn.inective=!1,l.prevPageBtn.classList.remove("button_state_inactive"),l.firstPageBtn.classList.remove("button_state_inactive")):1===l.curPage?(l.prevPageBtn.inactive=!0,l.firstPageBtn.inective=!0,l.prevPageBtn.classList.add("button_state_inactive"),l.firstPageBtn.classList.add("button_state_inactive"),l.nextPageBtn.inactive=!1,l.lastPageBtn.inective=!1,l.nextPageBtn.classList.remove("button_state_inactive"),l.lastPageBtn.classList.remove("button_state_inactive")):(l.nextPageBtn.inactive=!1,l.lastPageBtn.inective=!1,l.nextPageBtn.classList.remove("button_state_inactive"),l.lastPageBtn.classList.remove("button_state_inactive"),l.prevPageBtn.inactive=!1,l.firstPageBtn.inective=!1,l.prevPageBtn.classList.remove("button_state_inactive"),l.firstPageBtn.classList.remove("button_state_inactive"))})),c(this,"createHelpElement",(function(e){var t=l.helpTemplate.content.cloneNode(!0).querySelector(".help__item"),n=t.querySelector(".help__img"),r=t.querySelector(".help__item-title");return n.src=e.img,n.alt=e.name,r.textContent=e.name,t})),c(this,"renderHelps",(function(){l.helpsContainer.childNodes.length||l.helps.forEach((function(e){return l.helpsContainer.append(l.createHelpElement(e))}))})),c(this,"calcRenderList",(function(){l.itemsToRender=l.petsList.slice(l.itemsQtyPerScreen*(l.curPage-1),l.itemsQtyPerScreen*l.curPage),l.itemsNotRendered=l.petsList.slice(l.itemsQtyPerScreen*l.curPage)})),c(this,"slideRight",(function(){l.petsContainer.style.transform="translateX(".concat(270*l.itemsQtyPerScreen,"px)"),l.petsContainer.style.opacity="0";var e=setTimeout((function(){return l.petsContainer.style.transform="translateX(-".concat(270*l.itemsQtyPerScreen,"px)"),clearTimeout(e)}),"100"),t=setTimeout((function(){return l.petsContainer.style.opacity="100%",l.petsContainer.style.transform="translateX(0)",clearTimeout(t)}),"200")})),c(this,"slideLeft",(function(){l.petsContainer.style.transform="translateX(-".concat(270*l.itemsQtyPerScreen,"px)"),l.petsContainer.style.opacity="0";var e=setTimeout((function(){return l.petsContainer.style.transform="translateX(".concat(270*l.itemsQtyPerScreen,"px)"),clearTimeout(e)}),"100"),t=setTimeout((function(){return l.petsContainer.style.opacity="100%",l.petsContainer.style.transform="translateX(0)",clearTimeout(t)}),"200")})),c(this,"handleCarouselNext",(function(){switch(l.slideLeft(),l.lastAction){case"next":case void 0:l.petsList=[].concat(i(l.shuffle(l.itemsNotRendered)),i(l.itemsToRender)),l.renderPets(),l.lastAction="next";break;case"prev":l.petsList=[].concat(i(l.itemsNotRendered),i(l.itemsToRender)),l.renderPets(),l.lastAction="next";break;default:l.lastAction="next"}})),c(this,"handleCarouselPrev",(function(){l.slideRight(),l.petsList=[].concat(i(l.petsList.slice(l.petsList.length-l.itemsQtyPerScreen)),i(l.petsList.slice(0,l.petsList.length-l.itemsQtyPerScreen))),l.renderPets(),l.lastAction="prev"})),c(this,"renderPets",(function(){l.petsContainer.innerHTML="",l.calcRenderList(),l.itemsToRender.forEach((function(e){return l.petsContainer.append(l.createPetCard(e,l.openPetPopup))}))})),c(this,"calcPageQty",(function(){l.pagesQty=Math.ceil(l.petsList.length/l.itemsQtyPerScreen)})),c(this,"lockScroll",(function(){document.body.style.overflow="hidden"})),c(this,"unlockScroll",(function(){document.body.style.overflow="auto"})),c(this,"openSideBar",(function(){l.menu.classList.add("navbar__menu_moved"),l.isSideBarOpen=!0;var e=setTimeout((function(){return l.menu.classList.remove("navbar__menu_moved"),l.burgerBtn.classList.add("navbar__burger-btn_open"),clearTimeout(e)}),"0");l.lockScroll(),l.renderSideBar()})),c(this,"closeSideBar",(function(){l.menu.classList.add("navbar__menu_moved"),l.burgerBtn.classList.remove("navbar__burger-btn_open");var e=setTimeout((function(){return l.isSideBarOpen=!1,l.unlockScroll(),l.renderSideBar(),l.menu.classList.remove("navbar__menu_moved"),clearTimeout(e)}),"300")})),c(this,"toggleSideBar",(function(){l.isSideBarOpen?l.closeSideBar():l.openSideBar()})),c(this,"setListeners",(function(){l.petsButtons.forEach((function(e){return e.addEventListener("click",(function(){l.currentPage=l.pages.pets,l.curPage=1,l.renderBtnState(),l.calculatePetsList(),l.calcPageQty(),l.render()}))})),l.linksToMain.forEach((function(e){e.addEventListener("click",(function(){l.curPage=1,l.currentPage=l.pages.main,l.calculatePetsList(),l.render()}))})),window.addEventListener("resize",(function(e){var t=Math.min(e.target.innerWidth,e.target.outerWidth);l.curPage>l.pagesQty&&(l.curPage=l.pagesQty),l.setItemsQtyPerScreen(t),l.calcPageQty(),l.renderPets(),l.renderPageNo(),l.renderBtnState(),t<767&&l.isSideBarOpen&&l.closeSideBar()})),l.nextPageBtn.addEventListener("click",(function(){l.curPage!==l.pagesQty&&(l.curPage+=1,l.renderPageNo(),l.renderPets(),l.renderBtnState())})),l.prevPageBtn.addEventListener("click",(function(){1!==l.curPage&&(l.curPage-=1,l.renderPageNo(),l.renderPets(),l.renderBtnState())})),l.lastPageBtn.addEventListener("click",(function(){l.curPage!==l.pagesQty&&(l.curPage=l.pagesQty,l.renderPageNo(),l.renderPets(),l.renderBtnState())})),l.firstPageBtn.addEventListener("click",(function(){1!==l.curPage&&(l.curPage=1,l.renderPageNo(),l.renderPets(),l.renderBtnState())})),l.burgerBtn.addEventListener("click",l.toggleSideBar),l.navbar.addEventListener("click",(function(e){l.isSideBarOpen&&(e.target.classList.contains("navbar__menu-link")||e.target.classList.contains("navbar__nav"))&&l.closeSideBar()})),l.carouselNextBtn.addEventListener("click",l.handleCarouselNext),l.carouselPrevBtn.addEventListener("click",l.handleCarouselPrev)})),c(this,"renderPageNo",(function(){l.curPageLabel.textContent=l.curPage})),c(this,"setItemsQtyPerScreen",(function(e){l.currentPage===l.pages.main?l.itemsQtyPerScreen=e<=767?1:e<=1100?2:3:l.currentPage===l.pages.pets&&(l.itemsQtyPerScreen=e<=660?3:e<1199?6:8)})),c(this,"render",(function(){switch(l.setItemsQtyPerScreen(window.innerWidth),l.currentPage){case l.pages.main:l.mainOnly.forEach((function(e){return e.classList.remove("disabled")})),l.petsOnly.forEach((function(e){return e.classList.add("disabled")})),l.header.classList.remove("header_state_pets"),l.navbarSubtitle.classList.remove("navbar__subtitle_state_pets"),l.navbarTitle.classList.remove("navbar__title_state_pets"),l.links.forEach((function(e){return e.classList.remove("navbar__menu-link_state_pets")})),l.petsContainer.classList.remove("pets__container_state_pets"),l.petsSection.classList.remove("pets_state_pets"),l.LinkToMain.classList.add("navbar__menu-link_state_active"),l.LinkToPets.classList.remove("navbar__menu-link_state_active"),l.renderHelps(),l.renderPets();break;case l.pages.pets:l.mainOnly.forEach((function(e){return e.classList.add("disabled")})),l.petsOnly.forEach((function(e){return e.classList.remove("disabled")})),l.header.classList.add("header_state_pets"),l.navbarSubtitle.classList.add("navbar__subtitle_state_pets"),l.navbarTitle.classList.add("navbar__title_state_pets"),l.links.forEach((function(e){return e.classList.add("navbar__menu-link_state_pets")})),l.petsContainer.classList.add("pets__container_state_pets"),l.petsSection.classList.add("pets_state_pets"),l.LinkToMain.classList.remove("navbar__menu-link_state_active"),l.LinkToPets.classList.add("navbar__menu-link_state_active"),l.calcPageQty(),l.renderPageNo(),l.renderPets()}})),c(this,"initiate",(function(){l.calculatePetsList(),l.setListeners(),l.setItemsQtyPerScreen(window.outerWidth),l.calcPageQty(),l.render()})),this.carouselPrevBtn=document.querySelector("#carouselPrevBtn"),this.carouselNextBtn=document.querySelector("#carouselNextBtn"),this.shuffle=s,this.createPetCard=a,this.openPetPopup=o,this.mainOnly=document.querySelectorAll(".main"),this.petsOnly=document.querySelectorAll(".for-pets"),this.pages=t,this.pets=n,this.helps=r,this.petsSection=document.querySelector(".pets"),this.about=document.querySelector(".about"),this.help=document.querySelector(".help"),this.donate=document.querySelector(".donate"),this.headerContent=document.querySelector(".header__container"),this.currentPage=this.pages.main,this.helpTemplate=document.querySelector("#help-template"),this.petsContainer=document.querySelector(".pets__container"),this.helpsContainer=document.querySelector(".help__container"),this.petsButtons=document.querySelectorAll(".petsBtn"),this.linksToMain=document.querySelectorAll(".linkToMain"),this.links=document.querySelectorAll(".navbar__menu-link"),this.header=document.querySelector(".header"),this.navbarSubtitle=document.querySelector(".navbar__subtitle"),this.navbarTitle=document.querySelector(".navbar__title"),this.LinkToMain=document.querySelector("#main-link"),this.LinkToPets=document.querySelector("#pets-link"),this.nextPageBtn=document.querySelector("#nextPageBtn"),this.firstPageBtn=document.querySelector("#firstPageBtn"),this.lastPageBtn=document.querySelector("#lastPageBtn"),this.prevPageBtn=document.querySelector("#prevPageBtn"),this.curPageLabel=document.querySelector("#curPageLabel"),this.curPage=1,this.isSideBarOpen=!1,this.navbar=document.querySelector(".navbar__nav"),this.menu=document.querySelector(".navbar__menu"),this.burgerBtn=document.querySelector(".navbar__burger-btn"),this.initiate()}));function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function f(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},g.apply(this,arguments)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function P(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===h(t)?t:String(t)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(o,e);var t,n,r,i,a=(r=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(i){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,e)});function o(e){var t,n,r,i,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r=b(n=a.call(this,e)),s=function(e){n.card=e,n.fill(),n.renderList(),g((t=b(n),_(o.prototype)),"open",t).call(t)},(i=P(i="open"))in r?Object.defineProperty(r,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[i]=s,n.img=n.popup.querySelector(".popup__photo"),n.title=n.popup.querySelector(".popup__title"),n.subtitle=n.popup.querySelector(".popup__subtitle"),n.text=n.popup.querySelector(".popup__main-text"),n.factTemplate=n.popup.querySelector("#popupFactTemplate").content.querySelector(".popup__fact"),n.list=n.popup.querySelector(".popup__facts"),n}return t=o,(n=[{key:"fill",value:function(){this.title.textContent=this.card.name,this.subtitle.textContent=this.card.type+" - "+this.card.breed,this.text.textContent=this.card.description,this.img.src=this.card.img,this.img.alt=this.card.name}},{key:"generateListItem",value:function(e,t){var n=this.factTemplate.cloneNode(!0),r=n.querySelector(".popup__fact-title"),i=n.querySelector(".popup__fact-text");return r.textContent=e+": ",i.textContent=t,n}},{key:"clearList",value:function(){Array.from(this.list.children).forEach((function(e){return e.remove()}))}},{key:"renderList",value:function(){for(var e in this.clearList(),this.card.facts)this.list.append(this.generateListItem(e,this.card.facts[e]))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),o}(function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"lockScroll",(function(){document.body.style.overflow="hidden"})),f(this,"unlockScroll",(function(){document.body.style.overflow="auto"})),f(this,"close",(function(){n.popup.classList.remove("popup_open"),n.unlockScroll(),n.unsetListeners()})),f(this,"setListeners",(function(){n.popup.addEventListener("click",n.close),n.closeBtn.addEventListener("click",n.close),n.container.addEventListener("click",(function(e){return e.stopPropagation()})),document.addEventListener("keyup",n.close)})),f(this,"unsetListeners",(function(){n.popup.removeEventListener("click",n.close),n.closeBtn.removeEventListener("click",n.close),n.container.removeEventListener("click",(function(e){return e.stopPropagation()})),document.removeEventListener("keyup",n.close)})),this.popup=document.querySelector(t),this.closeBtn=this.popup.querySelector(".popup__close-btn"),this.container=this.popup.querySelector(".popup__container")}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_open"),this.lockScroll(),this.setListeners()}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,k(r.key),r)}}function k(e){var t=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===L(t)?t:String(t)}var B=function(){function e(t,n){var r,i,a,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,a=function(){return o.img.src=o.card.img,o.img.alt=o.card.name,o.text.textContent=o.card.name,o.setEventListeners(),o.cardElement},(i=k(i="generateCard"))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,this.card=t,this.openPetPopup=function(){return n(o.card)},this.cardElement=document.querySelector("#pet-template").content.cloneNode(!0).querySelector(".card"),this.img=this.cardElement.querySelector(".card__img"),this.text=this.cardElement.querySelector(".card__title")}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){this.cardElement.addEventListener("click",this.openPetPopup)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=new S("#popupPet");new u({main:"main",pets:"pets"},n,t,(function(e,t){return new B(e,t).generateCard()}),(function(e){E.open(e)}),(function(e){for(var t=function(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e),n=[],r=0;r<e.length;r++){var i=Math.floor(Math.random()*t.length);n.push(t[i]),t=e.filter((function(e){return!n.includes(e)}))}return n})),console.log("Реализация burger menu на обеих страницах: +26\nпри ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка: +2\nпри нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов: +4\nвысота адаптивного меню занимает всю высоту экрана: +2\nпри повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно: +4\nбургер-иконка создана при помощи html+css, без использования изображений: +2\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню: +2\nпри клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно: +2\nрасположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая: +2\nобласть, свободная от бургер-меню, затемняется: +2\nстраница под бургер-меню не прокручивается: +4\nРеализация слайдера-карусели на странице Main: +36\nпри нажатии на стрелки происходит переход к новому блоку элементов: +4\nсмена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется): +4\nслайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек: +4\nпри переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана (3 для 1280px, 2 для 768px, 1 для 320px): +4\nкаждый новый слайд содержит псевдослучайный набор карточек животных, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:\nв текущем блоке слайда карточки с питомцами не повторяются: +4\nв следующем блоке нет дублирования карточек с текущим блоком. Например в слайдере из 3 элементов, следующий выезжающий слайд будет содержать 3 (из 8 доступных) новых карточки питомца, таких, каких не было среди 3х карточек на предыдущем уехавшем слайде: +4\nсохраняется только одно предыдущее состояние. Т.е. при последовательном переходе два раза влево, а потом два раза вправо, мы получим набор карточек, отличный от исходного: +4\nпри каждой перезагрузке страницы формируется новая последовательность карточек: +2\nгенерация наборов карточек происходит на основе 8 объектов с данными о животных: +2\nпри изменении ширины экрана (от 1280px до 320px и обратно), слайдер перестраивается и работает без перезагрузки страницы (набор карточек при этом может как изменяться, так и оставаться тем же, скрывая лишнюю или добавляя недостающую, и сохраняя при этом описанные для слайдера требования): +4\nРеализация пагинации на странице Pets: +36\nпри перезагрузке страницы всегда открывается первая страница пагинации: +2\nпри нажатии кнопок > или < открывается следующая или предыдущая страница пагинации соответственно: +2\nпри нажатии кнопок >> или << открывается последняя или первая страница пагинации соответственно: +2\nпри открытии первой страницы кнопки << и < неактивны: +2\nпри открытии последней страницы кнопки > и >> неактивны: +2\nв кружке по центру указан номер текущей страницы. При переключении страниц номер меняется на актуальный: +2\nкаждая страница пагинации содержит псевдослучайный набор питомцев, т.е. формируется из исходных объектов в случайном порядке со следующими условиями:\nпри загрузке страницы формируется массив из 48 объектов питомцев. Каждый из 8 питомцев должен встречаться ровно 6 раз: +4\nпри каждой перезагрузке страницы формируется новый массив со случайной последовательностью: +4\nкарточки питомцев не должны повторяться на одной странице: +4\nпри переключении страницы данные меняются (для >1280px меняется порядок карточек, для остальных - меняется набор и порядок карточек): +4\nпри неизменных размерах области пагинации, в том числе размерах окна браузера, и без перезагрузки страницы, возвращаясь на страницу под определенным номером, контент на ней всегда будет одинаков. Т.е. карточки питомцев будут в том же расположении, что и были до перехода на другие страницы: +2\nобщее количество страниц при ширине экрана 1280px - 6, при 768px - 8, при 320px - 16 страниц: +2\nпри изменении ширины экрана (от 1280px до 320px и обратно), пагинация перестраивается и работает без перезагрузки страницы (страница может оставаться той же или переключаться, при этом сформированный массив - общая последовательность карточек - не обновляется, сохраняются все остальные требования к пагинации): +4\nРеализация попап на обеих страницах: +12\nпопап появляется при нажатии на любое место карточки с описанием конкретного животного: +2\nчасть страницы вне попапа затемняется: +2\nпри открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным: +2\nпри нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается, при этом при нажатии на сам попап ничего не происходит: +2\nкнопка с крестиком интерактивная: +2\nокно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом: +2")})();
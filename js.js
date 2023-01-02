/* accessible burger menu */

const burger = document.getElementById('burger');
const nav = document.getElementById('header-nav-items');

burger.addEventListener('click', toggleBurger);
burger.addEventListener('keydown', handleKeyBoardBurger);

nav.addEventListener('click', toggleBurger);
nav.addEventListener('keydown', handleKeyBoardBurger);

function toggleBurger(){
  if(nav.classList.contains('open')) {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    nav.lastElementChild.firstElementChild.removeEventListener('keydown', burgerTrapFocus);
  } else {
    nav.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    nav.firstElementChild.firstElementChild.focus();
    const lastItem = nav.lastElementChild.firstElementChild;
    lastItem.addEventListener('keydown', burgerTrapFocus);
  }
}

function burgerTrapFocus(event){
  if(event.code === 'Tab') {
    event.preventDefault();
    burger.focus();
  }
};

function closeBurgerWithFocus(){
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.focus();
}

function handleKeyBoardBurger(event){
  switch(event.code){
    case 'Enter':
    case 'Space':
      event.preventDefault();
      toggleBurger();
      if(event.target.getAttribute('href')){
        const [, linkId] = event.target.getAttribute('href').split('#');
        const menuTarget = document.getElementById(linkId);
        menuTarget.scrollIntoView();
        menuTarget.focus();
      }
      return;

    case 'Escape':
      event.preventDefault();
      closeBurgerWithFocus();
      return;
    default:
      return;
  }
}


/* accessible accordion */

const accordionTriggers = document.querySelectorAll('.accordion__trigger');
const accordionPanels = document.querySelectorAll('.accordion__panel');

Array.from(accordionTriggers).forEach((item) => item.addEventListener('click', openAccordion));
Array.from(accordionTriggers).forEach((item) => item.addEventListener('keydown', handleKeyBoardAccordion));

function openAccordion(event){
  const button = event.target.closest('button');
  const panelID = button.getAttribute('aria-controls').slice('panel'.length);

  Array.from(accordionPanels).forEach((item, index) => {
    const respectiveTrigger = Array.from(accordionTriggers)[index];

    if(String(index) !== panelID) {
      item.classList.remove('open');
      respectiveTrigger.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('open');
      respectiveTrigger.setAttribute('aria-expanded', 'true');
    }
  })
}

function handleKeyBoardAccordion(event){
  switch(event.code){
    case 'Enter':
    case 'Space':
      event.preventDefault();
      openAccordion(event);
      return;
    default:
      return;
  }
}


/* accessible drop-down menu */

const addressMenuWrapper = document.getElementById('address-menu-wrapper');

addressMenuWrapper.addEventListener('click', handleMenu);
addressMenuWrapper.addEventListener('keydown', handleKeyBoardAddress);
addressMenuWrapper.firstElementChild.addEventListener('focus', focusWhenAlreadyOpen);

function handleMenu(event){
  const wrapper = event.target.closest('.wrapper');
  const el = wrapper.lastElementChild;

  if(el.classList.contains('open')){
    el.classList.remove('open');
    wrapper.firstElementChild.setAttribute('aria-expanded', 'false');
    wrapper.firstElementChild.focus();
  } else {
    el.classList.add('open');
    el.firstElementChild.focus();
    wrapper.firstElementChild.setAttribute('aria-expanded', 'true');
  }

  if(event.target.role === 'menuitem'){
    const id = event.target.getAttribute('aria-controls');
    const contactAddresses = document.getElementById('contact-addresses').children;
    Array.from(contactAddresses).forEach((item) => {
      item.classList.remove('open');
      if(item.id === id) {
        item.style.display = 'grid';
      } else {
        item.style.display = 'none';
      }
    }
    )
  }
}

function closeMenuWithFocus(event){
  const wrapper = event.target.closest('.wrapper');
  const el = wrapper.lastElementChild;
  el.classList.remove('open');
  wrapper.firstElementChild.setAttribute('aria-expanded', 'false');
  wrapper.firstElementChild.focus();
}

function handleKeyBoardAddress(event){
  switch (event.code) {
    case 'Enter':
    case 'Space':
      event.preventDefault();
      handleMenu(event);
      return;

    case 'ArrowDown':
      event.preventDefault();
      const nextOption = event.target.nextElementSibling;
      nextOption.focus();
      return;

    case 'ArrowUp':
      event.preventDefault();
      const prevOption = event.target.previousElementSibling;
      prevOption.focus();
      return;

    case 'Escape':
      event.preventDefault();
      closeMenuWithFocus(event);
      return;

    default:
      return;
  }
}

function focusWhenAlreadyOpen(event){
  const wrapper = event.target.closest('.wrapper');
  if(wrapper.firstElementChild.getAttribute('aria-expanded') === 'true') {
    wrapper.lastElementChild.firstElementChild.focus();
  }
}

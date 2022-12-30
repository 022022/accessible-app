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
      handleMenu(event);
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
      openAccordion(event);
      return;
    default:
      return;
  }

}

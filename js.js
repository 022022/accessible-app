/* accessible drop-down menu */

const addressMenuWrapper = document.getElementById('address-menu-wrapper');

addressMenuWrapper.addEventListener('click', handleMenu);
addressMenuWrapper.addEventListener('keydown', handleKeyBoard);
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

function handleKeyBoard(event){
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

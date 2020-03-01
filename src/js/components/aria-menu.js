const navState = {
  toggled: false,
  subnav: false,
};

const navbar = document.getElementById('site-header');

export default function toggleNavigation(event) {

  const { target } = event;
  const activeSubnav = navbar.querySelector('.menu-item-link[aria-expanded="true"]');

  if (target.classList.contains('navbar-burger') || target.parentNode.classList.contains('navbar-burger')) {

    const burger = navbar.querySelector('.navbar-burger');
    if (navState.toggled) {
      navState.toggled = false;
      burger.setAttribute('aria-expanded', false);

      if (navState.subnav === true) {
        activeSubnav.setAttribute('aria-expanded', false);
        document.querySelector('body').classList.remove('subnav-active');
        navState.subnav = false;
      }

      document.querySelector('body').classList.remove('nav-active');
    } else {
      navState.toggled = true;
      document.querySelector('body').classList.add('nav-active');
      burger.setAttribute('aria-expanded', true);
    }
  }

  if (target.classList.contains('menu-item-link') && target.getAttribute('aria-haspopup') || target.parentNode.classList.contains('menu-item-link')) {
  // if (target.nodeName === 'BUTTON' && target.parentNode.classList.contains('menu-item-link')) {
    console.log(target);
    let activeNode;
    if (target.nodeName === 'BUTTON') {
      activeNode = target.parentNode;
    } else {
      activeNode = target;
    }
    event.preventDefault();

    console.log( target === activeSubnav );
    if (navState.subnav === false) {
      navState.subnav = true;
      activeNode.setAttribute('aria-expanded', true);
      document.querySelector('body').classList.add('subnav-active');
    } else if (target === activeSubnav) {
      activeSubnav.setAttribute('aria-expanded', false);
      navState.subnav = false;
      document.querySelector('body').classList.remove('subnav-active');
    } else {
      activeSubnav.setAttribute('aria-expanded', false);
      activeNode.setAttribute('aria-expanded', true);
    }

  }

};

navbar.addEventListener('click', event => toggleNavigation(event));

navbar.addEventListener('keypress', (event) => {
  const key = event.which || event.keyCode;
  if (key === 13) toggleNavigation(event);
});

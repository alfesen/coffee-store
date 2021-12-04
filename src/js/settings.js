export const select = {
  containerOf: {
    homePage: '#home-page',
    about: '#about',
    pages: '#pages',
  },
  templateof: {
    homePage: '#template-home-page',
    about: '#template-about',
  },
  sectionOf: {
    about: '.about',
    products: '#products',
    contact: '#contact',
  },
  buttons: {
    navLinks: '.navbar-nav a',
    home: '.home-btn',
    products: '.product-btn',
    contact: '.contact-btn',
  },
  classNames: {
    active: 'active',
    post: 'post',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost'? ':3131' : ''),
    products: 'products',
    about: 'about',
  },
};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateof.homePage).innerHTML),
  aboutSection: Handlebars.compile(document.querySelector(select.templateof.about).innerHTML),
};


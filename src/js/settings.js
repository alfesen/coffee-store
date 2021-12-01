export const select = {
  containerOf: {
    homePage: '#home-page',
    about: '#about',
  },
  templateof: {
    homePage: '#template-home-page',
    about: '#template-about',
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


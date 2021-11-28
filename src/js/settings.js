export const select = {
  containerOf: {
    homePage: '#home-page',
    about: '#about',
    aboutUs: '#about-us',
  },
  templateof: {
    homePage: '#template-home-page',
    about: '#template-about',
  },
  product: {
    name: '.name',
    description: '.description',
    intensity: '.intensity',
    roasting: '.roasting',
    image: '.product-image',
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost'? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateof.homePage).innerHTML),
  about: Handlebars.compile(document.querySelector(select.templateof.about).innerHTML),
};


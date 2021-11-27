export const select = {
  containerOf: {
    homePage: '#home-page',
  },
  templateof: {
    homePage: '#template-home-page'
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
};


import {
  settings
} from './settings.js';
import Product from './components/Product.js';

export const app = {

  initData: function () {
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;

    fetch(url) // fetch(połącz się), zapytanie(request) pod podany adres endpointu(url)
      .then(function (rawResponse) { // odpowiedź w formacie JSON
        return rawResponse.json(); // konwersja odpowiedzi na obiekt JS-owy
      })
      .then(function (parsedResponse) { // kolejny krok algorytmu
        console.log('parsedResponse: ', parsedResponse);

        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;


        for (let productData in thisApp.data.products) {
          new Product(thisApp.data.products[productData].id, thisApp.data.products[productData].data);
        }

      });

    console.log('thisApp.data', JSON.stringify(thisApp.data));
  },



  initProduct: function () {
    const thisApp = this;

    thisApp.products = new Product();
  },

  init: function () {
    const thisApp = this;

    thisApp.initProduct();
    thisApp.initData();
  },




};

app.init();
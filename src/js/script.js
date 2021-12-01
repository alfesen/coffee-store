import {
  settings
} from './settings.js';
import Product from './components/Product.js';
import About from './components/About.js';

export const app = {

  initData: function () {
    const thisApp = this;

    thisApp.data = {};
    const productsUrl = settings.db.url + '/' + settings.db.products;
    
    fetch(productsUrl) // fetch(połącz się), zapytanie(request) pod podany adres endpointu(url)
      .then(function (rawResponse) { // odpowiedź w formacie JSON
        return rawResponse.json(); // konwersja odpowiedzi na obiekt JS-owy
      })
      .then(function (parsedResponse) { // kolejny krok algorytmu
        console.log('parsedResponse: ', parsedResponse);

        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;


        for (let productData in thisApp.data.products[0]) {
          console.log('data1: ',  thisApp.data.products[0], productData);
          new Product(thisApp.data.products[0][productData].id, thisApp.data.products[0][productData]);
        }

      });

    const aboutUrl = settings.db.url + '/' + settings.db.about;
    fetch(aboutUrl)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        console.log('response: ', parsedResponse);

        thisApp.data.about = parsedResponse;

        for (let aboutData in thisApp.data.about[0]) {
          console.log('data2: ', thisApp.data.about[0], aboutData);
          new About(thisApp.data.about[0][aboutData].id, thisApp.data.about[0][aboutData]);
        }
      });
    
    console.log('about: ', aboutUrl);

    
    console.log('thisApp.data', JSON.stringify(thisApp.data));
  },


  init: function () {
    const thisApp = this;

    thisApp.initData();
  },




};

app.init();
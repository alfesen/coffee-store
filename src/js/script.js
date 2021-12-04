import {
  settings,
  select
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
          console.log('data1: ', thisApp.data.products[0], productData);
          new Product(thisApp.data.products[0][productData].id, thisApp.data.products[0][productData]);
        }

      });

    const aboutUrl = settings.db.url + '/' + settings.db.about;
    fetch(aboutUrl)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
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
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.buttons.navLinks);
    console.log('navlinks:', thisApp.navLinks);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break; //this line stops iteration
      }
      for (let link of thisApp.navLinks) {
        if (link.id == idFromHash) {
          pageMatchingHash = link.id;
          break;
        }
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;

        event.preventDefault();
        /* get page id from href attribute*/
        /* = delete # from href to get id */
        const id = clickedElement.getAttribute('href').replace('#', ''); // replace # with an empty string
        /* run thisApp.activatePage(id) */
        thisApp.activatePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id; // slash prevents skipping to div with this id
      });
    }

  },

  activatePage: function (pageId) {
    const thisApp = this;
    /* add class "active" to matching pages, remove from non-matching */
    for (let page of thisApp.pages) {
      page.classList.toggle(select.classNames.active, page.id == pageId);
    }
  },

  initActive: function () {
    const thisApp = this;

    thisApp.homeBtn = document.querySelector(select.buttons.home);
    thisApp.productsBtn = document.querySelector(select.buttons.products);
    thisApp.contactBtn = document.querySelector(select.buttons.contact);
    thisApp.about = document.querySelector(select.sectionOf.about);

    thisApp.homeSection = document.querySelectorAll(select.sectionOf.home);
    console.log('thisApp.homeSection', thisApp.homeSection);
    thisApp.productsSection = document.querySelector(select.sectionOf.products);
    thisApp.contactSection = document.querySelector(select.sectionOf.contact);
    const post = select.classNames.post;

    thisApp.productsBtn.addEventListener('click', function () {
      if (!thisApp.about.classList.contains(post)) {
        thisApp.about.classList.add(post);
      } 
      if (thisApp.productsSection.classList.contains(post)) {
        thisApp.productsSection.classList.remove(post);
      }
    });
    thisApp.homeBtn.addEventListener('click', function () {
      if (thisApp.about.classList.contains(post)) {
        thisApp.about.classList.remove(post);
      } 
      if (thisApp.productsSection.classList.contains(post)) {
        thisApp.productsSection.classList.remove(post);
      }
    });
    thisApp.contactBtn.addEventListener('click', function () {
      if (!thisApp.about.classList.contains(post)) {
        thisApp.about.classList.add(post);
      }
    });

    thisApp.contactBtn.addEventListener('click', function () {
      if (!thisApp.productsSection.classList.contains(post)) {
        thisApp.productsSection.classList.add(post);
      }
    });



  },

  init: function () {
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
    thisApp.initActive();
  },




};

app.init();
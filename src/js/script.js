import { settings } from './settings.js';
import Home from './components/Home.js';

const app = {
  initData: function() {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },

  
  initHome: function() {
    const thisApp = this;
    
    thisApp.home = new Home();
  },
  
  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initHome();
  },
  
};

app.init();
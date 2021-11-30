import {select, templates} from '../settings.js';
import {utils} from '../utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;

    thisProduct.data = data;
    thisProduct.id = id;

    thisProduct.render();
    
  }

  render() {
    const thisProduct = this;

    /* generate HTML based on template */
    const generateHTML = templates.homePage(thisProduct.data);
    /* create element using utils.createElementFromHTML */
    const html = utils.createDOMFromHTML(generateHTML);
    /* find menu container */
    const menuContainer = document.querySelector(select.containerOf.homePage);
    /* add element to menu */
    menuContainer.appendChild(html);
  }

    
}

export default Product;
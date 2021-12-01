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
    thisProduct.element = utils.createDOMFromHTML(generateHTML);
    /* find menu container */
    console.log(thisProduct.element);
    const menuContainer = document.querySelector(select.containerOf.homePage);
    /* add element to menu */
    menuContainer.appendChild(thisProduct.element);
  }

    
}

export default Product;
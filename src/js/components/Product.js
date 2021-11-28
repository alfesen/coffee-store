import {select, templates} from '../settings.js';
import {utils} from '../utils.js';

class Product {
  constructor() {
    const thisProduct = this;

    thisProduct.render();
  }

  render() {
    const thisProduct = this;

    const productsGenerateHTML = templates.homePage();
    thisProduct.element = utils.createDOMFromHTML(productsGenerateHTML);
    const productsContainer = document.querySelector(select.containerOf.homePage);
    productsContainer.appendChild(thisProduct.element);

    const aboutGenerateHTML = templates.about();
    thisProduct.element = utils.createDOMFromHTML(aboutGenerateHTML);
    const aboutSection = document.querySelector(select.containerOf.about);
    aboutSection.appendChild(thisProduct.element);
  }

  
  

  
}

export default Product;
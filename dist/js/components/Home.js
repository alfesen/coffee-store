import {select, templates} from '../settings.js';
import {utils} from '../utils.js';

class Home {
  constructor() {
    const thisHome = this;

    thisHome.render();
  }

  render() {
    const thisHome = this;

    const generateHTML = templates.homePage();
    thisHome.element = utils.createDOMFromHTML(generateHTML);
    const homeContainer = document.querySelector(select.containerOf.homePage);
    homeContainer.appendChild(thisHome.element);

    
  }
}

export default Home;
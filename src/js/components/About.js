import {select, templates} from '../settings.js';
import {utils} from '../utils.js';


class About {
  constructor(id, data) {
    const thisAbout = this;

    thisAbout.data = data;
    thisAbout.id = id;

    thisAbout.render();
    
  }

  render() {
    const thisAbout = this;

    /* generate HTML based on template */
    const generateHTML = templates.aboutSection(thisAbout.data);
    /* create element using utils.createElementFromHTML */
    thisAbout.element = utils.createDOMFromHTML(generateHTML);
    /* find menu container */
    console.log(thisAbout.element);
    const aboutContainer = document.querySelector(select.containerOf.about);
    /* add element to menu */
    aboutContainer.appendChild(thisAbout.element);
  }

    
}

export default About;
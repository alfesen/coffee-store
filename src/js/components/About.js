import { select, templates } from '../settings.js'
import { utils } from '../utils.js'

class About {
  constructor(id, data) {
    const thisAbout = this

    thisAbout.data = data
    thisAbout.id = id

    thisAbout.render()
  }

  render() {
    const thisAbout = this

    const generateHTML = templates.aboutSection(thisAbout.data)
    thisAbout.element = utils.createDOMFromHTML(generateHTML)
    const aboutContainer = document.querySelector(select.containerOf.about)
    aboutContainer.appendChild(thisAbout.element)
  }
}

export default About

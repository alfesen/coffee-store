import { select, templates } from '../settings.js'
import { utils } from '../utils.js'

class Product {
  constructor(id, data) {
    const thisProduct = this

    thisProduct.data = data
    thisProduct.id = id

    thisProduct.render()
  }

  render() {
    const thisProduct = this

    const generateHTML = templates.homePage(thisProduct.data)
    thisProduct.element = utils.createDOMFromHTML(generateHTML)
    const menuContainer = document.querySelector(select.containerOf.homePage)
    menuContainer.appendChild(thisProduct.element)
  }
}

export default Product

import { settings, select } from './settings.js'
import Product from './components/Product.js'
import About from './components/About.js'

export const app = {
  initData: function () {
    const thisApp = this

    thisApp.data = {}
    const productsUrl = settings.db.url + '/' + settings.db.products

    fetch(productsUrl, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(function (rawResponse) {
        return rawResponse.json()
      })
      .then(function (parsedResponse) {
        thisApp.data.products = parsedResponse

        for (let productData in thisApp.data.products[0]) {
          new Product(
            thisApp.data.products[0][productData].id,
            thisApp.data.products[0][productData]
          )
        }
      })

    const aboutUrl = settings.db.url + '/' + settings.db.about
    fetch(aboutUrl)
      .then(function (rawResponse) {
        return rawResponse.json()
      })
      .then(function (parsedResponse) {
        thisApp.data.about = parsedResponse

        for (let aboutData in thisApp.data.about[0]) {
          new About(
            thisApp.data.about[0][aboutData].id,
            thisApp.data.about[0][aboutData]
          )
        }
      })
  },
  initPages: function () {
    const thisApp = this

    thisApp.pages = document.querySelector(select.containerOf.pages).children
    thisApp.navLinks = document.querySelectorAll(select.buttons.navLinks)

    const idFromHash = window.location.hash.replace('#/', '')

    let pageMatchingHash = thisApp.pages[0].id

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id
        break
      }
      for (let link of thisApp.navLinks) {
        if (link.id == idFromHash) {
          pageMatchingHash = link.id
          break
        }
      }
    }

    thisApp.activatePage(pageMatchingHash)

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this

        event.preventDefault()
        const id = clickedElement.getAttribute('href').replace('#', '')

        thisApp.activatePage(id)

        window.location.hash = '#/' + id
      })
    }
  },

  activatePage: function (pageId) {
    const thisApp = this
    for (let page of thisApp.pages) {
      page.classList.toggle(select.classNames.active, page.id == pageId)
    }
  },

  initActive: function () {
    const thisApp = this

    thisApp.homeBtn = document.querySelector(select.buttons.home)
    thisApp.productsBtn = document.querySelector(select.buttons.products)
    thisApp.contactBtn = document.querySelector(select.buttons.contact)
    thisApp.about = document.querySelector(select.sectionOf.about)

    thisApp.homeSection = document.querySelectorAll(select.sectionOf.home)
    thisApp.productsSection = document.querySelector(select.sectionOf.products)
    thisApp.contactSection = document.querySelector(select.sectionOf.contact)
    const post = select.classNames.post

    thisApp.productsBtn.addEventListener('click', function () {
      if (!thisApp.about.classList.contains(post)) {
        thisApp.about.classList.add(post)
      }
      if (thisApp.productsSection.classList.contains(post)) {
        thisApp.productsSection.classList.remove(post)
      }
    })
    thisApp.homeBtn.addEventListener('click', function () {
      if (thisApp.about.classList.contains(post)) {
        thisApp.about.classList.remove(post)
      }
      if (thisApp.productsSection.classList.contains(post)) {
        thisApp.productsSection.classList.remove(post)
      }
    })
    thisApp.contactBtn.addEventListener('click', function () {
      if (!thisApp.about.classList.contains(post)) {
        thisApp.about.classList.add(post)
      }
    })

    thisApp.contactBtn.addEventListener('click', function () {
      if (!thisApp.productsSection.classList.contains(post)) {
        thisApp.productsSection.classList.add(post)
      }
    })
  },

  init: function () {
    const thisApp = this

    thisApp.initData()
    thisApp.initPages()
    thisApp.initActive()
  },
}

app.init()

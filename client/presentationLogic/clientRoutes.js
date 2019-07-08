'use strict'

// Import links
const Home = () =>
  import(/* webpackChunkName: "Home" */ '../view/components/home/home.vue')

const Vision = () =>
  import(/* webpackChunkName: "Vision" */ '../view/components/infoPages/vision.vue')
const Loneliness = () =>
  import(/* webpackChunkName: "Loneliness" */ '../view/components/infoPages/loneliness.vue')
const About = () =>
  import(/* webpackChunkName: "About" */ '../view/components/infoPages/about.vue')
const Philosophy = () =>
  import(/* webpackChunkName: "Philosophy" */ '../view/components/infoPages/philosophy.vue')
const Business = () =>
  import(/* webpackChunkName: "Business" */ '../view/components/infoPages/business.vue')


const Contact = () =>
  import(
    /* webpackChunkName: "Contact" */ '../view/components/contact/contact.vue'
  )

// Import General LInks
const PageNotFound = () =>
  import(
    /* webpackChunkName: "PageNotFound" */ '../view/components/general/pageNotFound.vue'
  )

export const routes = [
  { path: '', name: 'Home', component: Home },
  { path: '/vision', name: 'Vision', component: Vision },
  { path: '/loneliness', name: 'Loneliness', component: Loneliness },
  { path: '/about', name: 'About', component: About },
  { path: '/philosophy', name: 'Philosophy', component: Philosophy },
  { path: '/business', name: 'Business', component: Business },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '*', name: 'PageNotFound', component: PageNotFound }
]

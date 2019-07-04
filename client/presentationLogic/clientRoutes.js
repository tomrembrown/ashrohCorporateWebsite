'use strict'

// Import links
const Home = () =>
  import(/* webpackChunkName: "Home" */ '../view/components/home/home.vue')
const About = () =>
  import(
    /* webpackChunkName: "About" */ '../view/components/about/about.vue'
  )
const Values = () =>
  import(
    /* webpackChunkName: "Values" */ '../view/components/values/values.vue'
  )
const Websites = () =>
  import(
    /* webpackChunkName: "Websites" */ '../view/components/websites/websites.vue'
  )
const Contact = () =>
  import(
    /* webpackChunkName: "ContactUs" */ '../view/components/contact/contact.vue'
  )

// Import General LInks
const PageNotFound = () =>
  import(
    /* webpackChunkName: "PageNotFound" */ '../view/components/general/pageNotFound.vue'
  )

export const routes = [
  { path: '', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/values', name: 'Values', component: Values },
  { path: '/websites', name: 'Websites', component: Websites },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '*', name: 'PageNotFound', component: PageNotFound }
]

import Vue from 'vue'
// Import the components as Vue plugins
import { Card, Table } from 'bootstrap-vue/es/components'
import Router from 'vue-router'
import Meta from 'vue-meta'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'

// Import custom components
import Home from '@/components/Home'
import Factories from '@/components/Factories'
import About from '@/components/About'
import AdminFactories from '@/components/Admin/Factories'
import Overview from '@/components/Admin/Overview'

// Add the plugins to Vue
Vue.use(Card)
Vue.use(Table)
Vue.use(VeeValidate)
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  tagIDKeyName: 'name' // the property name that vue-meta uses to determine whether to overwrite or append a tag
  // ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/factories',
      name: 'Factories',
      component: Factories
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Overview
    },
    {
      path: '/admin/factories',
      name: 'AdminFactories',
      component: AdminFactories
    }]
})

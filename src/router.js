import Vue from 'vue'
import VueRouter from 'vue-router'

import WorldInfo from './routes/WorldInfo'
import JsonEditor from './routes/JsonEditor'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'WorldInfo', component: WorldInfo  },
  { path: '/json-editor', name: 'JsonEditor', component: JsonEditor  }
]

const router = new VueRouter({
  routes
})


export default router
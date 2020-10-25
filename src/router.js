import Vue from 'vue'
import VueRouter from 'vue-router'

import WorldInfo from './routes/WorldInfo'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'WorldInfo', component: WorldInfo  },
]

const router = new VueRouter({
  routes
})


export default router
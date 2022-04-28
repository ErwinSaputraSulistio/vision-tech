import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'
import Private from "../views/Private.vue"
import Error from "../views/Error.vue"
import store from "../store"

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: "/private",
    name: "Private",
    component: Private,
    beforeEnter: () => {
      if(store.state.user === null) {
        router.push("/error")
      }
    }
  },
  {
    path: "/error",
    name: "Error",
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

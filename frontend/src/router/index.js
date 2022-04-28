import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'
import Private from "../views/Private.vue"
import Error from "../views/Error.vue"
import NotFound from "../views/NotFound.vue"
import store from "../store"

const checkLogin = () => {
  if(store.state.user !== null) {
    router.push("/private")
  }
}

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    beforeEnter: checkLogin
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
    component: Error,
    beforeEnter: checkLogin
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component:  NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

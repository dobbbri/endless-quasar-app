import { createRouter, createWebHashHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
import routes from '@/router/routes'
import { store } from '@/stores/store'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to, from) => {
  if (import.meta.env.DEV) console.info(`navigating from ${from.path} to ${to.path}`)

  const auth = getAuth()

  if (to.meta.requiresAuth && !auth.currentUser) return '/signIn'

  const fromRootPath = `/${from.path.split('/')[1]}`
  const toRootPath = `/${to.path.split('/')[1]}`

  if (fromRootPath !== toRootPath) {
    store.setUsePageTransition(false)
  } else {
    store.setUsePageTransition(true)
    if (from.path === to.path && to.path !== toRootPath) router.push(toRootPath)
  }

  // const navItemIndex = store.state.navItems.findIndex((navItem) => navItem.root === toRootPath)
  // if (navItemIndex >= 0) store.state.navItems[navItemIndex].to = to.path
})

export default router

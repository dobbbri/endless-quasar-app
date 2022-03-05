import MainLayout from 'src/layouts/MainLayout.vue'
import SignInPage from 'src/pages/auth/SignInPage.vue'
import SignUpPage from 'src/pages/auth/SignUpPage.vue'
import Home from 'src/pages/Home.vue'
import CategoriesPage from 'src/pages/category/CategoriesPage.vue'
import CategoryPage from 'src/pages/category/CategoryPage.vue'
import PaymentMethodsPage from 'src/pages/paymentMethod/PaymentMethodsPage.vue'
import PaymentMethodPage from 'src/pages/paymentMethod/PaymentMethodPage.vue'
import CustomersPage from 'src/pages/customers/CustomersPage.vue'
import CustomerPage from 'src/pages/customers/CustomerPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: '/signin' },
      { path: '/signin', component: SignInPage },
      { path: '/signup', component: SignUpPage },
      { path: '/home', component: Home },
      {
        path: '/categories',
        meta: { requiresAuth: true },
        component: CategoriesPage,
        children: [
          { path: '/categories/category', name: 'category', meta: { requiresAuth: true }, component: CategoryPage }
        ]
      },
      {
        path: '/paymentMethods',
        meta: { requiresAuth: true },
        component: PaymentMethodsPage,
        children: [
          {
            path: '/paymentMethods/paymentMethod',
            name: 'paymentMethod',
            meta: { requiresAuth: true },
            component: PaymentMethodPage
          }
        ]
      },
      {
        path: '/customers',
        meta: { requiresAuth: true },
        component: CustomersPage,
        children: [
          { path: '/customers/customer', name: 'customer', meta: { requiresAuth: true }, component: CustomerPage }
        ]
      }
    ]
  },

  // Always leave this as last one, but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/Error404.vue')
  }
]

export default routes

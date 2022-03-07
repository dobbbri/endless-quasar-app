import MainLayout from 'src/layouts/MainLayout.vue'
import SignInPage from 'src/pages/auth/SignInPage.vue'
import SignUpPage from 'src/pages/auth/SignUpPage.vue'
import Home from 'src/pages/Home.vue'
import CategoriesPage from 'src/pages/categories/CategoriesPage.vue'
import CategoryPage from 'src/pages/categories/CategoryPage.vue'
import PaymentMethodsPage from 'src/pages/paymentMethods/PaymentMethodsPage.vue'
import PaymentMethodPage from 'src/pages/paymentMethods/PaymentMethodPage.vue'
import CustomersPage from 'src/pages/customers/CustomersPage.vue'
import CustomerPage from 'src/pages/customers/CustomerPage.vue'
import ProductsPage from 'src/pages/products/ProductsPage.vue'
import ProductPage from 'src/pages/products/ProductPage.vue'

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
      },
      {
        path: '/products',
        meta: { requiresAuth: true },
        component: ProductsPage,
        children: [
          { path: '/products/product', name: 'product', meta: { requiresAuth: true }, component: ProductPage }
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

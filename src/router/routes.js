import MainLayout from '@/layouts/MainLayout.vue'
import SignInSignUpPage from '@/pages/auth/SignInSignUpPage.vue'
import Home from '@/pages/Home.vue'
import SalePage from '@/pages/sale/SalePage.vue'
import CategoriesPage from '@/pages/categories/CategoriesPage.vue'
import CategoryPage from '@/pages/categories/CategoryPage.vue'
import CustomersPage from '@/pages/customers/CustomersPage.vue'
import CustomerPage from '@/pages/customers/CustomerPage.vue'
import ProductsPage from '@/pages/products/ProductsPage.vue'
import ProductPage from '@/pages/products/ProductPage.vue'
import ProductMovementPage from '@/pages/products/ProductMovementPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: '/signin' },
      { path: '/signin', component: SignInSignUpPage },
      { path: '/home', meta: { requiresAuth: true }, component: Home },
      { path: '/sale', meta: { requiresAuth: true }, component: SalePage },
      {
        path: '/categories',
        meta: { requiresAuth: true },
        component: CategoriesPage,
        children: [
          {
            path: '/categories/category',
            name: 'category',
            meta: { requiresAuth: true },
            component: CategoryPage
          }
        ]
      },
      {
        path: '/customers',
        meta: { requiresAuth: true },
        component: CustomersPage,
        children: [
          {
            path: '/customers/customer',
            name: 'customer',
            meta: { requiresAuth: true },
            component: CustomerPage
          }
        ]
      },
      {
        path: '/products',
        meta: { requiresAuth: true },
        component: ProductsPage,
        children: [
          {
            path: '/products/product',
            name: 'product',
            meta: { requiresAuth: true },
            component: ProductPage,
            children: [
              {
                path: '/products/movement',
                name: 'ProductMovement',
                meta: { requiresAuth: true },
                component: ProductMovementPage
              }
            ]
          }
        ]
      }
    ]
  },

  // Always leave this as last one, but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/Error404.vue')
  }
]

export default routes

export const store = reactive({
  // state
  isSidebarOpen: false,
  usePageTransition: false,
  iosBrowserSwipingBack: false,

  service: {},
  services: [],
  product: {},
  products: [],
  customer: {},
  customers: [],
  category: {},
  categories: [],
  user: {},

  itemsType: ['Produto', 'Serviço'],

  // actions
  setIsOpenSidebar(value) { this.isSidebarOpen = value },
  setUsePageTransition(value) { this.usePageTransition = value },
  setIosBrowserSwipingBack(value) { this.iosBrowserSwipingBack = value },

  setUser(value) { this.user = value },
  logout() { this.user = null },

  setService(value) { this.service = value },
  setServices(values) { this.services = values },

  setProduct(value) { this.product = value },
  setProducts(values) { this.products = values },

  setCustomer(value) { this.customer = value },
  setCustomers(values) { this.customers = values },

  setCategory(value) { this.category = value },
  setCategories(values) { this.categories = values },
})


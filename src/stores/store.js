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

  // actions
  setIsOpenSidebar(value) { this.isSidebarOpen = value },
  setUsePageTransition(value) { this.usePageTransition = value },
  setIosBrowserSwipingBack(value) { this.iosBrowserSwipingBack = value },

  setUser(value) { this.user = value },
  logout() { this.user = null },

  setService(value) { this.service = value },
  setServices(values) { this.services = values },

  setNewProduct() {
    this.product = {
      name: '',
      description: '',
      categoryId: '',
      salesUnityId: 'un',
      userId: '',
      price: { toSell: 0, toBuy: 0 },
      stock: { isAutomatic: false, quantity: 0, minimum: 0 },
      code: { bar: '', internal: '' },
      image: { url: null, path: '' },
      file: null
    }
  },
  setProduct(value) { this.product = value },
  setProducts(values) { this.products = values },

  setNewCustomer() {
    this.customer = {
      name: '',
      phone: { cell: '', landline: '' },
      document: { typeId: 'CPF', number: '' },
      email: '',
      comments: '',
    }
  },
  setCustomer(value) { this.customer = value },
  setCustomers(values) { this.customers = values },

  setNewCategory() {
    this.category = {
      name: '',
      inactive: false
    }
  },
  setCategory(value) { this.category = value },
  setCategories(values) { this.categories = values },
})


export const store = reactive({
  // state
  isSidebarOpen: false,
  usePageTransition: false,
  iosBrowserSwipingBack: false,
  service: null,
  product: null,
  customer: null,
  paymentMethod: null,
  category: null,
  categories: [],
  user: null,
  itemsType: ['Produto', 'Serviço'],
  documentTypes: ['CPF', 'CNPJ', 'CI'],

  // getters
  isAuthenticated() { return this.user !== null },

  // actions
  setIsOpenSidebar(value) { this.isSidebarOpen = value },
  setUsePageTransition(value) { this.usePageTransition = value },
  setIosBrowserSwipingBack(value) { this.iosBrowserSwipingBack = value },
  setUser(value) { this.user = value },
  logout() { this.user = null },
  setService(value) { this.service = value },
  setProduct(value) { this.product = value },
  setCustomer(value) { this.customer = value },
  setPaymentMethod(value) { this.paymentMethod = value },
  setCategories(values) { this.categories = values },
  setCategory(value) { this.category = value },
})


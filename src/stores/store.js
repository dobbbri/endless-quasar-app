export const useStore = defineStore({
  id: 'store',

  state: () => ({
    service: null,
    product: null,
    customer: null,
    paymentMethod: null,
    category: null,
    categories: null,
    user: null,
    //
    itemType: ['Produto', 'Servoço'],
    documentTypes: ['CPF', 'CNPJ', 'CI'],
    //
    isSidebarOpen: false,
    usePageTransition: false,
    iosBrowserSwipingBack: false
  }),

  getters: {
    isAuthenticated: (state) => state.user !== null
  },

  actions: {
    setService(value) {
      this.service = value
    },
    setProduct(value) {
      this.product = value
    },
    setCustomer(value) {
      this.customer = value
    },
    setPaymentMethod(value) {
      this.paymentMethod = value
    },
    setCategories(values) {
      this.categories = values
    },
    setCategory(value) {
      this.category = value
    },
    setUser(value) {
      this.user = value
    },
    logout() {
      this.user = null
    },
    //
    setIsOpenSidebar(value) {
      this.isSidebarOpen = value
    },
    setUsePageTransition(value) {
      this.usePageTransition = value
    },
    setIosBrowserSwipingBack(value) {
      this.iosBrowserSwipingBack = value
    }
  }
})

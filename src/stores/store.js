export const store = reactive({
  // state
  isSidebarOpen: false,
  usePageTransition: false,
  iosBrowserSwipingBack: false,
  user: {},
  category: {},
  customer: {},
  product: {},
  service: {},

  // actions
  setIsOpenSidebar(value) {
    this.isSidebarOpen = value
  },
  setUsePageTransition(value) {
    this.usePageTransition = value
  },
  setIosBrowserSwipingBack(value) {
    this.iosBrowserSwipingBack = value
  },
  setUser(value) {
    this.user = value
  },
  setService(value) {
    this.service = value
  },
  setProduct(value) {
    this.product = value
  },
  setCustomer(value) {
    this.customer = value
  },
  setCategory(value) {
    this.category = value
  }
})

export const store = reactive({
  // state
  isSidebarOpen: false,
  usePageTransition: false,
  iosBrowserSwipingBack: false,

  // actions
  setIsOpenSidebar(value) { this.isSidebarOpen = value },
  setUsePageTransition(value) { this.usePageTransition = value },
  setIosBrowserSwipingBack(value) { this.iosBrowserSwipingBack = value },
})


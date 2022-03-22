export const dbStore = reactive({
  // state
  user: {},
  category: {},
  categories: [],
  customer: {},
  customers: [],
  documentTypes: [],
  paymentMethods: [],
  product: {},
  products: [],
  salesUnit: [],
  service: {},
  services: [],
  servicesUnity: [],

  setUser(value) {
    this.user = value
  },
  logout() {
    this.user = null
  },

  setService(value) {
    this.service = value
  },
  setServices(values) {
    this.services = values
  },

  setNewProduct() {
    this.product = {
      name: '',
      description: '',
      categoryRef: '',
      saleUnityRef: 'salesUnity/un',
      price: { toSell: 0, toBuy: 0 },
      stock: { isAutomatic: false, quantity: 0, minimum: 0 },
      code: { bar: '', internal: '' },
      image: { url: null, path: '' },
      userId: '',
      file: null
    }
  },
  setProduct(value) {
    this.product = value
  },
  setProducts(values) {
    this.products = values
  },

  setNewCustomer() {
    this.customer = {
      name: '',
      phone: { cell: '', landline: '' },
      document: { typeId: 'CPF', number: '' },
      email: '',
      comments: ''
    }
  },
  setCustomer(value) {
    this.customer = value
  },
  setCustomers(values) {
    this.customers = values
  },

  setNewCategory() {
    this.category = {
      name: '',
      inactive: false
    }
  },
  setCategory(value) {
    this.category = value
  },
  setCategories(values) {
    this.categories = values
  },

  setDocumentTypes(values) {
    this.documentTypes = values
  },

  setSalesUnit(values) {
    this.salesUnit = values
  },

  setServicesUnity(values) {
    this.servicesUnity = values
  },

  setPaymentMethods(values) {
    this.paymentMethods = values
  },

  documentTypes: [
    { id: 'CI', name: 'CI' },
    { id: 'CPF', name: 'CPF' },
    { id: 'CNPJ', name: 'CNPJ' }
  ],
  salesUnity: [
    { id: 'un', name: 'Unitário' },
    { id: 'kg', name: 'Kilograma' },
    { id: 'l', name: 'Litro' },
    { id: 'm', name: 'Metro' },
    { id: 'm2', name: 'Metro Quadrado' },
    { id: 'm3', name: 'Metro Cubico' }
  ],
  servicesUnity: [
    { id: 'un', name: 'Valor Base' },
    { id: 'h', name: 'Hora' },
    { id: 'd', name: 'Dia' },
    { id: 'm', name: 'Metro' },
    { id: 'm2', name: 'Metro Quadrado' },
    { id: 'm3', name: 'Metro Cubico' }
  ],
  paymentMethods: [
    { id: 'Dinheiro', name: 'Dinheiro', inactive: false },
    { id: 'Debito', name: 'Cartão de Débito', inactive: false },
    { id: 'Credito', name: 'Cartão de Crédito', inactive: false },
    { id: 'Pix', name: 'Pix', inactive: false },
    { id: 'Cheque', name: 'Cheque', inactive: false },
    { id: 'Boleto', name: 'Boleto', inactive: true },
    { id: 'Transferencia', name: 'Transferência Bancária', inactive: true },
    { id: 'Fiado', name: 'Fiado', inactive: false },
    { id: 'Outro', name: 'Outro', inactive: false }
  ]
})

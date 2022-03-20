export const dbStore = reactive({
  // state
  service: {},
  services: [],
  customer: {},
  customers: [],
  category: {},
  categories: [],
  user: {},

  setUser(value) { this.user = value },
  logout() { this.user = null },

  setService(value) { this.service = value },
  setServices(values) { this.services = values },

  product: {},
  products: [],
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

  documentTypes: [
    { id: 'CI', name: 'CI', disabled: false },
    { id: 'CPF', name: 'CPF', disabled: false },
    { id: 'CNPJ', name: 'CNPJ', disabled: false },
  ],
  salesUnit: [
    { id: 'un', name: 'Unitário', disabled: false },
    { id: 'kg', name: 'Kilograma', disabled: false },
    { id: 'l', name: 'Litro', disabled: false },
    { id: 'm', name: 'Metro', disabled: false },
    { id: 'm2', name: 'Metro Quadrado', disabled: false },
    { id: 'm3', name: 'Metro Cubico', disabled: false },
  ],
  servicesUnity: [
    { id: 'un', name: 'Valor Base', disabled: false },
    { id: 'h', name: 'Hora', disabled: false },
    { id: 'd', name: 'Dia', disabled: false },
    { id: 'm', name: 'Metro', disabled: false },
    { id: 'm2', name: 'Metro Quadrado', disabled: false },
    { id: 'm3', name: 'Metro Cubico', disabled: false },
  ],
  paymentMethods: [
    { id: 'Dinheiro', name: 'Dinheiro', disabled: false },
    { id: 'Débito', name: 'Cartão de Débito', disabled: false },
    { id: 'Crédito', name: 'Cartão de Crédito', disabled: false },
    { id: 'Pix', name: 'Pix', disabled: false },
    { id: 'Cheque', name: 'Cheque', disabled: false },
    { id: 'Boleto', name: 'Boleto', disabled: true },
    { id: 'Transferência', name: 'Transferência Bancária', disabled: true },
    { id: 'Fiado', name: 'Fiado', disabled: false },
    { id: 'Outro', name: 'Outro', disabled: false },
  ],
})


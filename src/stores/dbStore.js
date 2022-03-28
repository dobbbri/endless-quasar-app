export const dbStore = reactive({
  // state
  categories: [],
  customers: [],
  products: [],
  services: [],
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
    { id: 'dinheiro', name: 'Dinheiro' },
    { id: 'crédito', name: 'Cartão de Crédito' },
    { id: 'débito', name: 'Cartão de Débito' },
    { id: 'pix', name: 'Pix' },
    { id: 'cheque', name: 'Cheque' },
    { id: 'boleto', name: 'Boleto' },
    { id: 'fiado', name: 'Fiado' },
    { id: 'transferência', name: 'Transferência Bancária' },
    { id: 'outro', name: 'Outro' }
  ],

  // actions
  setServices(values) {
    this.services = values
  },
  setProducts(values) {
    this.products = values
  },
  setCustomers(values) {
    this.customers = values
  },
  setCategories(values) {
    this.categories = values
  }
})

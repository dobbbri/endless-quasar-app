export const dbStore = reactive({
  // state
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


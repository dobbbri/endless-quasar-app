<script setup>
import { useGetCustomers } from '@/composables/customer'

const { searchQuery, loading, customers } = useGetCustomers()

const { ADD, EDIT } = inject('constants')
const store = inject('store')

const router = useRouter()

const showAddPage = () => {
  const doc = {
    name: '',
    cellPhone: '',
    phone: '',
    documentType: 'CPF',
    documentNumber: '',
    email: '',
    comments: ''
  }
  store.setCustomer(doc)
  router.push({ name: 'customer', params: { action: ADD } })
}

const showUpdatePage = async (doc) => {
  store.setCustomer(doc)
  router.push({ name: 'customer', params: { action: EDIT } })
}
</script>

<template>
  <page>
    <page-header>
      <template #buttons-left>
        <btn-close to="/home" />
      </template>
      <template #title>Clientes</template>
      <template #buttons-right>
        <btn-add @click="showAddPage" />
      </template>
    </page-header>

    <page-body>
      <expansion-box :expanded="true" :no-header="true">
        <search-field v-model="searchQuery" />

        <q-inner-loading
          :showing="loading"
          color="primary"
          label="obtendo registros..."
          label-class="text-grey-6"
        />

        <list separator>
          <item
            v-for="(customer, index) in customers"
            :key="index"
            @click="showUpdatePage(customer)"
          >
            <item-section class="column">
              <item-section-label class="text-bold">{{ customer.name }}</item-section-label>

              <item-section-label
                v-if="customer.documentNumber"
              >{{ customer.documentType }}: {{ customer.documentNumber }}</item-section-label>
            </item-section>

            <item-section class="column text-right">
              <span v-if="customer.cellPhone">{{ customer.cellPhone }}</span>
              <span v-if="customer.phone">{{ customer.phone }}</span>
            </item-section>
          </item>
        </list>
      </expansion-box>
    </page-body>
  </page>
</template>

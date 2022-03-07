<script setup>
import { useGetCustomers } from 'src/composables/customer'
import { ADD, EDIT } from 'src/constants'
import { useStore } from 'src/stores/store'

const { searchQuery, loading, customers } = useGetCustomers()

const store = useStore()
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
  store.setCustomer(JSON.parse(JSON.stringify(doc)))
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
      <q-inner-loading
        :showing="loading"
        color="primary"
        label="obtendo registros..."
        label-class="text-grey-6"
      />

      <div v-if="customers" class="box">
        <search-field v-model="searchQuery" />
        <list separator>
          <item
            v-for="(customer, index) in customers"
            :key="index"
            @click="showUpdatePage(customer)"
          >
            <item-section class="column">
              <item-section-label class="text-medium">{{ customer.name }}</item-section-label>

              <item-section-label
                v-if="customer.cellPhone || customer.phone"
                class="column"
              >{{ customer.cellPhone }} {{ customer.phone }}</item-section-label>
            </item-section>

            <item-section
              v-if="customer.documentNumber"
              class="text-right"
            >{{ customer.documentType }}: {{ customer.documentNumber }}</item-section>

            <item-section avatar>
              <btn-forward />
            </item-section>
          </item>
        </list>
      </div>
    </page-body>
  </page>
</template>

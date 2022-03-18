<script setup>
import { useGetCustomers } from '@/composables/customer'

const { searchQuery, loading, customers } = useGetCustomers()

const { ADD, EDIT } = inject('constants')
const store = inject('store')

const router = useRouter()

const showAddPage = () => {
  store.setNewCustomer()
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
                v-if="customer.document.number"
              >{{ customer.document.type }}: {{ customer.document.number }}</item-section-label>
            </item-section>

            <item-section class="column text-right">
              <span v-if="customer.phone.cell">{{ customer.phone.cell }}</span>
              <span v-if="customer.phone.landline">{{ customer.phone.landline }}</span>
            </item-section>
          </item>
        </list>
      </expansion-box>
    </page-body>
  </page>
</template>

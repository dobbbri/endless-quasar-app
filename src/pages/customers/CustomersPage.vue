<script setup>
import { ionPeopleOutline } from '@quasar/extras/ionicons-v6'
import { useGetCustomers } from 'src/composables/customer'
import { ADD, EDIT } from 'src/constants'
import { useStore } from 'src/stores'

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
      <q-inner-loading :showing="loading" color="primary" label="obtendo registros..." label-class="text-grey-6" />

      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div v-if="customers" class="box">
          <search-field v-model="searchQuery" />
          <list separator>
            <item v-for="(customer, index) in customers" :key="index" clickable @click="showUpdatePage(customer)">
              <item-section avatar>
                <icon :name="ionPeopleOutline" size="md" />
              </item-section>

              <item-section>
                <item-section-label class="row">
                  <span class="text-medium">{{ customer.name }}</span>

                  <span v-if="customer.cellPhone || customer.phone">{{ customer.cellPhone }} {{ customer.phone }}</span>

                  <span v-if="customer.documentNumber">{{ customer.documentType }}: {{ customer.documentNumber }}</span>
                </item-section-label>
              </item-section>

              <item-section avatar>
                <btn-forward />
              </item-section>
            </item>
          </list>
        </div>
      </transition>

      <!-- <not-found -->
      <!--   v-if="!customers && !loading" -->
      <!--   title="Cadastro de Clientes" -->
      <!--   message="nenhuma cliente cadastrada" -->
      <!--   btn-text="ADICIONAR CATEGORIA" -->
      <!--   @add="showAddPage" -->
      <!-- /> -->
    </page-body>
  </page>
</template>

<script setup>
import { ionWalletOutline } from '@quasar/extras/ionicons-v6'
import { useGetPaymentMethods } from 'src/composables/paymentMethod'
import { ADD, EDIT } from 'src/constants'
import { useStore } from 'src/stores'

const { searchQuery, loading, paymentMethods } = useGetPaymentMethods()

const store = useStore()
const router = useRouter()

const showAddPage = () => {
  const doc = {
    name: '',
    disabled: false
  }
  store.setPaymentMethod(doc)
  router.push({ name: 'paymentMethod', params: { action: ADD } })
}

const showUpdatePage = async (doc) => {
  store.setPaymentMethod(JSON.parse(JSON.stringify(doc)))
  router.push({ name: 'paymentMethod', params: { action: EDIT } })
}
</script>

<template>
  <page>
    <page-header>
      <template #buttons-left>
        <btn-close to="/home" />
      </template>
      <template #title>Método de pagamentos</template>
      <template #buttons-right>
        <btn-add @click="showAddPage" />
      </template>
    </page-header>

    <page-body>
      <q-inner-loading :showing="loading" color="primary" label="obtendo registros..." label-class="text-grey-6" />

      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div v-if="paymentMethods" class="box">
          <search-field v-model="searchQuery" />
          <list separator>
            <item
              v-for="(paymentMethod, index) in paymentMethods"
              :key="index"
              clickable
              @click="showUpdatePage(paymentMethod)"
            >
              <item-section avatar>
                <icon :name="ionWalletOutline" size="md" />
              </item-section>

              <item-section>
                <item-section-label>
                  {{ paymentMethod.name }}
                  <chip v-if="paymentMethod.disabled" color="negative" style="margin: 0">oculto</chip>
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
      <!--   v-if="!paymentMethods && !loading" -->
      <!--   title="Cadastro de Método de pagamentos" -->
      <!--   message="nenhum método de pagamento cadastrada" -->
      <!--   btn-text="ADICIONAR CATEGORIA" -->
      <!--   @add="showAddPage" -->
      <!-- /> -->
    </page-body>
  </page>
</template>

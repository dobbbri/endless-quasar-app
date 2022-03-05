<script setup>
import { useCustomer } from 'src/composables/customer'
import { ADD, EDIT } from 'src/constants'
import { useStore } from 'src/stores'

const { rules, error, loading, addCustomer, editCustomer, deleteCustomer } = useCustomer()

const store = useStore()
const route = useRoute()
const router = useRouter()

const onSubmit = async () => {
  if (route.params.action === ADD) {
    await addCustomer(store.customer)
  } else if (route.params.action === EDIT) {
    let { id, userId, ...customer } = store.customer
    await editCustomer(customer, store.customer.id)
  }
  if (!error.value) router.go(-1)
}

const onDelete = async () => {
  await deleteCustomer(store.customer.id)
  if (!error.value) router.go(-1)
}

const action = computed(() => (route.params.action === ADD ? 'Novo' : ''))
</script>

<template>
  <page>
    <q-form @submit="onSubmit">
      <page-header>
        <template #buttons-left>
          <btn-back />
        </template>
        <template #title>{{ action }} Cliente</template>
        <template #buttons-right>
          <btn-delete
            v-if="route.params.action === EDIT"
            title="Excluir cliente"
            :loading="loading"
            @delete="onDelete"
          />
        </template>
      </page-header>

      <page-body>
        <div class="box">
          <!-- // -->
          <text-field
            v-model="store.customer.name"
            label="Nome*"
            placeholder="Informe o nome do cliente"
            :rules="[rules.isRequired()]"
          />

          <phone-field
            v-model="store.customer.cellPhone"
            label="Celular"
            placeholder="Informe o número do celular do cliente"
          />

          <phone-field
            v-model="store.customer.phone"
            label="Telefone"
            placeholder="Informe o número do telefone do cliente"
          />

          <select-text
            v-model="store.customer.documentType"
            label="Tipo de documento"
            :options="store.documentTypes"
            placeholder="Selecione o tipo de documento"
          />

          <text-field
            v-model="store.customer.documentNumber"
            label="Número do documento"
            placeholder="Informe o número do documento do cliente"
          />

          <text-field v-model.trim="store.customer.email" type="email" label="Email" placeholder="Email do cliente" />

          <text-area v-model="store.customer.comments" label="Observações" placeholder="Observações" />
        </div>

        <page-footer>
          <div class="row q-ma-md">
            <btn-cancel :loading="loading" class="col" />
            <q-space class="q-ml-md" />
            <btn-save type="submit" :loading="loading" class="col" />
          </div>
        </page-footer>
      </page-body>
    </q-form>
  </page>
</template>

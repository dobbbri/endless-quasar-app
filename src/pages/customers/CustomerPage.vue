<script setup>
import { useCustomer } from '@/composables/customer'

const { rules, error, loading, addCustomer, editCustomer, deleteCustomer } = useCustomer()

const { ADD, EDIT } = inject('constants')
const store = inject('store')
const { documentTypes } = inject('dbStore')

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
            title="Excluir este cliente?"
            :loading="loading"
            @delete="onDelete"
          />
        </template>
      </page-header>

      <page-body>
        <expansion-box label="Campos obrigatórios" :expanded="true">
          <text-field
            v-model="store.customer.name"
            label="Nome"
            title="Informe o nome do cliente"
            :rules="[rules.isRequired()]"
            autofocus
          />
        </expansion-box>

        <expansion-box label="Contato" :expanded="true">
          <phone-field
            v-model="store.customer.phone.cell"
            label="Celular / Whatsapp"
            title="Informe o número do celular do cliente"
          />

          <phone-field
            v-model="store.customer.phone.landline"
            label="Telefone fixo"
            title="Informe o número do telefone fixo do cliente"
          />

          <text-field
            v-model.trim="store.customer.email"
            type="email"
            label="Email"
            title="Email do cliente"
          />
        </expansion-box>

        <expansion-box label="Avançado" :expanded="false">
          <select-field
            v-model="store.customer.document.Type"
            label="Tipo de documento"
            :options="documentTypes"
            title="Selecione o tipo de documento"
          />

          <text-field
            v-model="store.customer.document.number"
            label="Número do documento"
            title="Informe o número do documento"
          />

          <text-area
            v-model="store.customer.comments"
            label="Observações"
            title="Adicione as observações do cliente"
          />
        </expansion-box>

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

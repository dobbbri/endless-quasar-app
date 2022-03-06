<script setup>
import { usePaymentMethod } from 'src/composables/paymentMethod'
import { ADD, EDIT } from 'src/constants'
import { useStore } from 'src/stores'

const { rules, error, loading, addPaymentMethod, editPaymentMethod, deletePaymentMethod } = usePaymentMethod()

const store = useStore()
const route = useRoute()
const router = useRouter()

const onSubmit = async () => {
  if (route.params.action === ADD) {
    await addPaymentMethod(store.paymentMethod)
  } else if (route.params.action === EDIT) {
    let { id, userId, ...paymentMethod } = store.paymentMethod
    await editPaymentMethod(paymentMethod, store.paymentMethod.id)
  }
  if (!error.value) router.go(-1)
}

const onDelete = async () => {
  await deletePaymentMethod(store.paymentMethod.id)
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
        <template #title>{{ action }} Método de pagamento</template>
        <template #buttons-right>
          <btn-delete
            v-if="route.params.action === EDIT"
            title="Excluir método de pagamento"
            :loading="loading"
            @delete="onDelete"
          />
        </template>
      </page-header>

      <page-body>
        <box>
          <text-field
            v-model="store.paymentMethod.name"
            label="Nome*"
            placeholder="Informe o nome do método de pagamento"
            :rules="[rules.isRequired()]"
            autofocus
          />
        </box>

        <box>
          <check-box
            v-model="store.paymentMethod.disabled"
            label="Ocultar este método de pagamento"
          />
        </box>

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

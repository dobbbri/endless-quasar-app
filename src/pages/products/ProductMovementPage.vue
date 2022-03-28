<script setup>
const store = inject('store')

const onSubmit = async () => {
  router.go(-1)
}

const action = computed(() => (route.params.action === ADD ? 'Novo' : ''))
</script>

<template>
  <page>
    <q-form @submit="onSubmit">
      <!-- -- -->
      <page-header>
        <template #buttons-left>
          <btn-back />
        </template>
        <template #title>Calcular Valor de Venda</template>
      </page-header>

      <page-body>
        <expansion-box
          label="Campos obrigatórios"
          :expanded="true"
        >
          <money-field
            v-model="store.product.price.toBuy"
            label="Valor de compra"
            title="Informe o valor de compra do produto"
            :rules="[rules.isRequired()]"
          />

          <money-field
            v-model="store.product.price.toSell"
            label="Valor de venda"
            title="Informe o valor da venda do produto"
            :rules="[rules.isRequired()]"
          />
        </expansion-box>

        <page-footer>
          <div class="row q-ma-md">
            <btn-cancel
              :loading="loading"
              class="col"
            />
            <q-space class="q-ml-md" />
            <btn-save
              type="submit"
              :loading="loading"
              class="col"
            />
          </div>
        </page-footer>
      </page-body>
      <!-- -- -->
    </q-form>
  </page>
</template>

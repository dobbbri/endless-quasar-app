<script setup>
import { useProduct } from '@/composables/product'

const { rules, error, loading, addProduct, editProduct, deleteProduct } = useProduct()

const { ADD, EDIT } = inject('constants')
const store = inject('store')

const route = useRoute()
const router = useRouter()

const onSubmit = async () => {
  if (route.params.action === ADD) {
    let { file, ...product } = store.product
    await addProduct(product, file)
  } else if (route.params.action === EDIT) {
    let { id, userId, file, ...product } = store.product
    await editProduct(product, store.product.file, store.product.id)
  }
  if (!error.value) router.go(-1)
}

const onDelete = async () => {
  await deleteProduct(store.product.id)
  if (!error.value) router.go(-1)
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
        <template #title>{{ action }} Produto</template>
        <template #buttons-right>
          <btn-delete
            v-if="route.params.action === EDIT"
            title="Excluir produto"
            :loading="loading"
            @delete="onDelete"
          />
        </template>
      </page-header>

      <page-body>
        <box>
          <text-field
            v-model="store.product.name"
            label="Nome*"
            title="Informe o nome do produto"
            :rules="[rules.isRequired()]"
            autofocus
          />

          <money-field
            v-model="store.product.salePrice"
            label="Valor de venda*"
            title="Informe o valor da venda do produto"
            :rules="[rules.isRequired()]"
          />

          <select-field
            v-model="store.product.categoryId"
            label="Categoria*"
            :options="store.categories"
            title="Selecione a categoria do produto"
            :rules="[rules.isRequired()]"
          />
        </box>

        <expansion-box label="Estoque">
          <!--     -- -->
          <!-- gerenciar estoque > -->
          <!--   estoque automático (sim/nao) -->
          <!--     quantidade em estoque  (numero) -->
          <!--     estoque minimo (numero888) -->
          <!-- movimentacoes > -->
          <!--   lista de movimentacoes -->

          <toggle-field
            v-model="store.product.disableStockContol"
            :label="store.product.disableStockContol ? 'Não contolar o estoque' : 'Contolar o estoque'"
          />

          <integer-field
            v-if="!store.product.disableStockContol"
            v-model="store.product.quantityInStock"
            label="Quantidade"
            title="Informe o quatidade do produto"
          />
        </expansion-box>

        <expansion-box label="Avançado">
          <!-- -- -->
          <!-- unidade de venda -->

          <money-field
            v-model="store.product.purchasePrice"
            label="Valor de compra"
            title="Informe o valor de compra do produto"
          />

          <text-field
            v-model="store.product.barCode"
            label="Código do Produto / Código de barra"
            title="Informe o código de barra do produto"
          />

          <text-area
            v-model="store.product.description"
            label="Descrição"
            title="Informe a descrição do produto"
          />
        </expansion-box>

        <expansion-box label="Foto">
          <file-picker label v-model:file="store.product.file" :url="store.product.image.url" />
        </expansion-box>

        <page-footer>
          <div class="row q-ma-md">
            <btn-cancel :loading="loading" class="col" />
            <q-space class="q-ml-md" />
            <btn-save type="submit" :loading="loading" class="col" />
          </div>
        </page-footer>
      </page-body>
      <!-- -- -->
    </q-form>
  </page>
</template>

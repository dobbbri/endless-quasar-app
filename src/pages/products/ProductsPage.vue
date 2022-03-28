<script setup>
import { useGetProducts } from '@/composables/product'

const { searchQuery, loading, products } = useGetProducts()
const { ADD, EDIT } = inject('constants')
const store = inject('store')
const router = useRouter()

const showAddPage = () => {
  let doc = {
    name: '',
    description: '',
    categoryRef: '',
    saleUnityId: 'un',
    price: { toSell: 0, toBuy: 0 },
    stock: { isAutomatic: false, quantity: 0, minimum: 0 },
    code: { bar: '', internal: '' },
    image: { url: null, path: '' },
    userId: '',
    file: null
  }
  store.setProduct(doc)
  router.push({ name: 'product', params: { action: ADD } })
}

const showUpdatePage = async (doc) => {
  let { ref, ...product } = doc
  product.categoryRef = product.categoryRef.path.split('/')[1]
  console.log('product -> ', product)
  store.setProduct(product)
  router.push({ name: 'product', params: { action: EDIT } })
}
</script>

<template>
  <page>
    <page-header>
      <template #buttons-left>
        <btn-close to="/home" />
      </template>
      <template #title>Produtos</template>
      <template #buttons-right>
        <btn-add @click="showAddPage" />
      </template>
    </page-header>

    <page-body>
      <expansion-box
        :expanded="true"
        :no-header="true"
      >
        <search-field v-model="searchQuery" />

        <q-inner-loading
          :showing="loading"
          color="primary"
          label="obtendo registros..."
          label-class="text-grey-6"
        />

        <list separator>
          <item
            v-for="(product, index) in products"
            :key="index"
            @click="showUpdatePage(product)"
          >
            <item-section text-color="secondary">
              <item-section-label class="row text-subtitle2 text-weight-medium">
                {{ product.name }}
              </item-section-label>
              <item-section-label
                class="row text-body2"
                style="height: 16px"
              >
                <span class="col">
                  <chip>{{ product.ref.category.name }}</chip>
                </span>
                <span
                  v-if="product.stock.isAutomatic"
                  class="col"
                >
                  {{ product.stock.quantity }} {{ product.saleUnityId }}
                </span>
                <span class="col text-right">R$ {{ product.price.toSell }}</span>
              </item-section-label>
            </item-section>
          </item>
        </list>
      </expansion-box>
    </page-body>
  </page>
</template>

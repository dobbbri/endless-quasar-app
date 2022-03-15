<script setup>
import { useGetCategories } from '@/composables/category'
import { useGetProducts } from '@/composables/product'

const { ADD, EDIT } = inject('constants')
const store = inject('store')

const { documents } = useGetCategories(true)
store.setCategories(documents)

const { searchQuery, loading, products } = useGetProducts()

const router = useRouter()

const showAddPage = () => {
  const doc = {
    categoryId: '',
    name: '',
    quantityInStock: 0,
    salePrice: 0,
    purchasePrice: 0,
    barCode: '',
    description: '',
    disableStockContol: false,
    image: { url: null, path: '' },
    file: null
  }
  store.setProduct(doc)
  router.push({ name: 'product', params: { action: ADD } })
}

const showUpdatePage = async (doc) => {
  store.setProduct(doc)
  // store.setProduct(JSON.parse(JSON.stringify(doc)))
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
      <q-inner-loading
        :showing="loading"
        color="primary"
        label="obtendo registros..."
        label-class="text-grey-6"
      />

      <div v-if="products" class="box">
        <search-field v-model="searchQuery" />
        <list separator>
          <item v-for="(product, index) in products" :key="index" @click="showUpdatePage(product)">
            <item-section>
              <item-section-label class="row text-subtitle1 text-weight-medium">{{ product.name }}</item-section-label>
              <item-section-label class="row text-body2" style="height:16px">
                <span class="col">{{ product.quantityInStock }} disponivel</span>
                <span class="col text-right">R$ {{ product.salePrice }}</span>
              </item-section-label>
            </item-section>
          </item>
        </list>
      </div>
    </page-body>
  </page>
</template>

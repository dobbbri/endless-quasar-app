<script setup>
import { useGetCategoriesForSelect } from '@/composables/category'
import { useGetProducts } from '@/composables/product'

const { ADD, EDIT } = inject('constants')
const store = inject('dbStore')

const { categories } = useGetCategoriesForSelect()
store.setCategories(categories)

const { searchQuery, loading, products } = useGetProducts()
console.log(products)

const router = useRouter()

const showAddPage = () => {
  store.setNewProduct()
  router.push({ name: 'product', params: { action: ADD } })
}

const showUpdatePage = async (doc) => {
  console.log(doc)
  store.setProduct(doc)
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
      <expansion-box :expanded="true" :no-header="true">
        <search-field v-model="searchQuery" />

        <q-inner-loading
          :showing="loading"
          color="primary"
          label="obtendo registros..."
          label-class="text-grey-6"
        />

        <list separator>
          <item v-for="(product, index) in products" :key="index" @click="showUpdatePage(product)">
            <item-section>
              <item-section-label class="row text-subtitle1 text-weight-medium">{{ product.name }}</item-section-label>
              <item-section-label class="row text-body2" style="height:16px">
                <span class="col">{{ product.stock.quantity }} disponivel</span>
                <span class="col text-right">R$ {{ product.price.toSell }}</span>
              </item-section-label>
            </item-section>
          </item>
        </list>
      </expansion-box>
    </page-body>
  </page>
</template>

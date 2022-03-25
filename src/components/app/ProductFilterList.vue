<script setup>
import { useGetProducts } from '@/composables/product'

const { searchQuery, products } = useGetProducts()
const categoryStore = inject('categoryStore')

const productsFiltered = computed(() => {
  if (categoryStore.state.category.id != undefined) {
    return products.value.filter((product) => {
      return product.categoryId == categoryStore.state.category.id
    })
  } else {
    return products.value
  }
})
</script>

<template>
  <!-- search -->
  <z-input-search
    v-model="searchQuery"
    placeholder="Pesquisar produto"
  />
  <!-- category filter -->
  <div class="flex justify-center">
    <category-filter-list />
  </div>
  <!-- product list -->
  <div
    v-if="products"
    class="q-col-gutter-md row items-start"
  >
    <div
      v-for="(product, index) in productsFiltered"
      :key="index"
      class="col-sm-4 col-xs-6"
    >
      <!-- product -->
      <div
        clickable
        ripple
        class="rounded-borders overflow-hidden bg-white text-subtitle2 shadow-2"
      >
        <q-img
          :src="product.image.url"
          :ratio="4 / 3"
          class="rounded-borders"
        >
          <div class="absolute-top-left">R$ {{ product.salePrice }}</div>
          <div class="absolute-bottom">{{ product.name }}</div>
        </q-img>
      </div>
      <!-- --- -->
    </div>
  </div>
</template>

<style lang="scss">
.q-img__content > div {
  padding: 4px 8px;
  line-height: 12px;
}
</style>

<script setup>
import { useGetCollectionForSelect } from '@/composables'

const store = inject('dbStore')

const { documents: categories } = useGetCollectionForSelect('categories')
store.setCategories(categories)
console.log('categories -> ', categories)

const { documents: salesUnity } = useGetCollectionForSelect('salesUnity')
store.setSalesUnity(salesUnity)
console.log('salesUnity -> ', salesUnity)
</script>

<template>
  <page>
    <page-header>
      <template #buttons-left>
        <btn-menu />
      </template>
      <template #title>Home</template>
    </page-header>
    <page-body></page-body>
  </page>
  <!-- <page-footer /> -->
</template>

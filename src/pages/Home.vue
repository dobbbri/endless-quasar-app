<script setup>
import { useGetCollectionForSelect } from '@/composables'

const store = inject('dbStore')

const { documents } = useGetCollectionForSelect('categories')
store.setCategories(documents)
console.log('categories -> ', store.categories)
console.log('salesUnity -> ', store.salesUnity)
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

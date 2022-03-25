<script setup>
import { useGetCategories } from '@/composables/category'

const { categories } = useGetCategories()
const categoryStore = inject('categoryStore')
categoryStore.setCategories(categories)

const router = useRouter()
const showCategoryPage = () => router.push({ path: '/listCategories' })

const btnActive = ref(0)

const selectAll = () => {
  btnActive.value = 0
  categoryStore.clearCategory()
}
const selectOne = (index, category) => {
  btnActive.value = index + 1
  categoryStore.setCategory(category)
}
</script>

<template>
  <div
    class="q-py-sm q-px-xs hide-scrollbar"
    style="height: 56px"
  >
    <q-btn
      rounded
      label="todas"
      class="q-mx-xs"
      :class="{ 'bg-primary text-white': btnActive == 0 }"
      @click="selectAll"
    />
    <q-btn
      v-for="(category, index) in categories"
      :key="index"
      rounded
      class="q-mx-xs"
      :class="{ 'bg-primary text-white': btnActive == index + 1 }"
      :label="category.name"
      v-show="!category.disabled"
      @click="selectOne(index, category)"
    />
    <q-btn
      rounded
      icon="las la-plus-circle"
      label="Categoria"
      class="q-mx-xs"
      color="warning"
      @click="showCategoryPage"
    />
  </div>
</template>

<style
  lang="scss"
  scoped
>
div {
  overflow: auto;
  white-space: nowrap;
}

div q-btn {
  display: inline-block;
}
</style>

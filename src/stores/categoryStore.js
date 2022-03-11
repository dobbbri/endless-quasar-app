export const categoryStore = reactive({
  category: {},
  categories: [],

  setCategory(value) { this.category = value },
  setCategories(values) { this.categories = values }
})


<script setup>
import { useGetCategories } from '@/composables/category'

const { searchQuery, loading, categories } = useGetCategories()
const { ADD, EDIT } = inject('constants')
const store = inject('store')
const router = useRouter()

const showAddPage = () => {
  let doc = {
    name: '',
    inactive: false
  }
  store.setCategory(doc)
  router.push({ name: 'category', params: { action: ADD } })
}

const showUpdatePage = async (doc) => {
  store.setCategory(doc)
  router.push({ name: 'category', params: { action: EDIT } })
}
</script>

<template>
  <page>
    <page-header>
      <template #buttons-left>
        <btn-close to="/home" />
      </template>
      <template #title>Categorias</template>
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
            v-for="(category, index) in categories"
            :key="index"
            @click="showUpdatePage(category)"
          >
            <item-section>
              <item-section-label>
                {{ category.name }}
                <chip v-if="category.inactive">Oculta</chip>
              </item-section-label>
            </item-section>
          </item>
        </list>
      </expansion-box>

      <!-- <not-found -->
      <!--   v-if="!categories && !loading" -->
      <!--   title="Cadastro de Categorias" -->
      <!--   message="nenhuma categoria cadastrada" -->
      <!--   btn-text="ADICIONAR CATEGORIA" -->
      <!--   @add="showAddPage" -->
      <!-- /> -->
    </page-body>
  </page>
</template>

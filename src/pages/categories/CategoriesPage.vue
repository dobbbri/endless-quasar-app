<script setup>
import { useGetCategories } from '@/composables/category'
import { ADD, EDIT } from '@/constants'
import { useStore } from '@/stores/store'

const { searchQuery, loading, categories } = useGetCategories()

const store = useStore()
const router = useRouter()

const showAddPage = () => {
  const doc = {
    name: '',
    disabled: false
  }
  store.setCategory(doc)
  router.push({ name: 'category', params: { action: ADD } })
}

const showUpdatePage = async (doc) => {
  store.setCategory(JSON.parse(JSON.stringify(doc)))
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
      <q-inner-loading
        :showing="loading"
        color="primary"
        label="obtendo registros..."
        label-class="text-grey-6"
      />

      <div v-if="categories" class="box">
        <search-field v-model="searchQuery" />
        <list separator>
          <item
            v-for="(category, index) in categories"
            :key="index"
            @click="showUpdatePage(category)"
          >
            <item-section>
              <item-section-label>
                {{ category.name }}
                <chip v-if="category.disabled" color="negative" style="margin: 0">oculta</chip>
              </item-section-label>
            </item-section>

            <item-section avatar>
              <btn-forward />
            </item-section>
          </item>
        </list>
      </div>

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

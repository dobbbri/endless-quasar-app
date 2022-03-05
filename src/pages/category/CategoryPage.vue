<script setup>
import { useCategory } from 'src/composables/category'
import { ADD, EDIT } from 'src/constants'
import { useStore } from 'src/stores'

const { rules, error, loading, addCategory, editCategory, deleteCategory } = useCategory()

const store = useStore()
const route = useRoute()
const router = useRouter()

const onSubmit = async () => {
  if (route.params.action === ADD) {
    await addCategory(store.category)
  } else if (route.params.action === EDIT) {
    let { id, userId, ...category } = store.category
    await editCategory(category, store.category.id)
  }
  if (!error.value) router.go(-1)
}

const onDelete = async () => {
  await deleteCategory(store.category.id)
  if (!error.value) router.go(-1)
}

const action = computed(() => (route.params.action === ADD ? 'Nova' : ''))
</script>

<template>
  <page>
    <q-form @submit="onSubmit">
      <page-header>
        <template #buttons-left>
          <btn-back />
        </template>
        <template #title>{{ action }} Categoria</template>
        <template #buttons-right>
          <btn-delete
            v-if="route.params.action === EDIT"
            title="Excluir categoria"
            :loading="loading"
            @delete="onDelete"
          />
        </template>
      </page-header>

      <page-body>
        <box label="Documentos" :expanded="true">
          <text-field
            v-model="store.category.name"
            label="Nome*"
            placeholder="Informe o nome da categoria"
            :rules="[rules.isRequired()]"
          />
        </box>

        <box :expanded="true">
          <check-box v-model="store.category.disabled" label="Ocultar esta categoria" />
        </box>

        <page-footer>
          <div class="row q-ma-md">
            <btn-cancel :loading="loading" class="col" />
            <q-space class="q-ml-md" />
            <btn-save type="submit" :loading="loading" class="col" />
          </div>
        </page-footer>
      </page-body>
    </q-form>
  </page>
</template>

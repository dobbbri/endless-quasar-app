<script setup>
import opts from '@/components/ui/options'

const props = defineProps({
  title: String,
  loading: Boolean
})

const emit = defineEmits(['delete'])

const $q = useQuasar()

const confirm = () => {
  $q.dialog({
    title: props.title,
    message: 'Essa ação não pode ser desfeita.',
    ok: { label: 'Excluir', padding: 'sm xl', flat: true, color: 'negative', class: 'q-mb-sm q-mr-sm' },
    cancel: { label: 'Cancelar', padding: 'sm lg', flat: true, color: 'dark', class: 'q-mb-sm q-mr-sm' },
    persistent: true
  }).onOk(() => emit('delete'))
}
</script>

<template>
  <q-btn
    v-bind="opts.btns.icon"
    color="negative"
    icon="delete_forever"
    :loading="loading"
    :disable="loading"
    @click="confirm"
  />
</template>

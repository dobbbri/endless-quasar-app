<script setup>
import { ionReaderOutline, ionAlertCircle } from '@quasar/extras/ionicons-v6'

defineProps({
  icon: String,
  title: String,
  message: String,
  btnText: String
})

defineEmits(['add'])
</script>

<template>
  <div class="text-blue-grey-5 absolute-center">
    <div class="q-mb-sm text-center">
      <q-icon
        :name="ionReaderOutline"
        size="54px"
        color="blue-grey-3"
      />
      <q-icon
        :name="ionAlertCircle"
        size="md"
        color="blue-grey-6"
        style="margin-left: -27px"
      />
    </div>
    <div class="q-mb-md text-center text-weight-medium text-body">{{ title }}</div>
    <div class="q-mb-lg text-center text-weight-medium text-body2">Você ainda não tem {{ message }}.</div>
    <btn
      :label="btnText"
      class="full-width"
      @click="$emit('add')"
    />
  </div>
</template>

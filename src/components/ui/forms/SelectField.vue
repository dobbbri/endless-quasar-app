<script setup>
import opts from 'src/components/ui/options'

const props = defineProps({
  label: String,
  options: Array
})

const selectOptions = ref(options)

const filter = (val, update, abort) => {
  update(() => {
    const needle = val.toLowerCase()
    selectOptions.value = options.filter((v) => v.toLowerCase().indexOf(needle) > -1)
  })
}
</script>

<template>
  <q-select
    v-bind="opts.forms.input"
    :options="selectOptions"
    @filter="filter"
    option-value="id"
    option-label="name"
    option-disable="disabled"
    emit-value
    map-options
    options-dense
    label-slot
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">Sem resultados</q-item-section>
      </q-item>
    </template>

    <template #label>
      <text-label :label="props.label" />
    </template>
  </q-select>
</template>

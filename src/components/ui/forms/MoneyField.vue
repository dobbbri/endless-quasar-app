<script setup>
import { useCurrencyInput } from "vue-currency-input"
import opts from '@/components/ui/options'

const props = defineProps({
  modelValue: [Number, String],
})

const { inputRef, formattedValue } = useCurrencyInput({
  locale: "pt-BR",
  currency: "BRL",
  currencyDisplay: "hidden",
  hideCurrencySymbolOnFocus: true,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: false,
  autoDecimalDigits: true,
  autoSign: true,
  useGrouping: true,
  accountingSign: false
})
</script>

<template>
  <q-input
    type="tel"
    ref="inputRef"
    :modelValue="formattedValue"
    v-bind="opts.forms.input"
  />
</template>

<script setup>
const store = inject('store')
</script>

<template>
  <q-layout view="lHh Lpr lFf" :class="{ 'ios-browser-swiping-back': store.iosBrowserSwipingBack }">
    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
    <sidebar />
  </q-layout>
</template>

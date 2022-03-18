<script setup>
const store = inject('store')
</script>

<template>
  <q-layout view="hHh Lpr lFf" :class="{ 'ios-browser-swiping-back': store.iosBrowserSwipingBack }">
    <sidebar />
    <q-page-container>
      <router-view :key="$route.fullPath" v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

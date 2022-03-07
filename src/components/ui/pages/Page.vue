<script setup>
import opts from 'src/components/ui/options'
import useGoBack from 'src/composables/useGoBack'
import { useStore } from 'src/stores/store'

const store = useStore()

const emit = defineEmits(['pageActivated', 'pageDeactivated'])

let $q = useQuasar()
let hasActiveChildPage = ref(false)

onActivated(() => {
  emit('pageActivated')
})

onDeactivated(() => {
  emit('pageDeactivated')
  if (isIosBrowser.value) {
    store.setIosBrowserSwipingBack(false)
  }
})

const handleSwipeRight = () => {
  if (isIosBrowser.value) {
    store.setIosBrowserSwipingBack(true)
  } else {
    useGoBack()
  }
}

const isIosBrowser = computed(() => {
  if ($q.platform.is.ios && !$q.platform.is.cordova && !$q.platform.is.capacitor) {
    return true
  }
  return false
})
</script>

<template>
  <main v-bind="opts.pages.page">
    <section
      v-touch-swipe.mouse.right="handleSwipeRight"
      class="page-nudger fit"
      :class="{ 'nudge-left': hasActiveChildPage }"
    >
      <slot />
    </section>

    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        :css="store.usePageTransition && !store.iosBrowserSwipingBack"
      >
        <keep-alive>
          <component
            @pageActivated="hasActiveChildPage = true"
            @pageDeactivated="hasActiveChildPage = false"
            :is="Component"
          />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>

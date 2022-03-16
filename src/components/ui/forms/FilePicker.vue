<script>
import { ref } from 'vue'

export default {
  props: ['file', 'url', 'label'],
  emits: ['update:file'],

  setup(props, { emit }) {
    const file = ref(null)
    const image = ref(props.url)

    const updateThumbnail = () => {
      if (file.value) {
        image.value = URL.createObjectURL(file.value)
        emit('update:file', file.value)
      }
    }

    return {
      file,
      image,
      updateThumbnail
    }
  }
}
</script>

<template>
  <label class="column">
    <q-img
      class="img-size bg-white rounded-borders cursor-pointer q-uploader--bordered"
      :ratio="1"
      spinner-color="primary"
      spinner-size="82px"
      v-ripple
      @click="$refs.fileInput.pickFiles()"
      :src="image"
    >
      <div class="absolute-bottom text-caption text-center q-ma-xs">Adicionar foto/imagem</div>
      <template v-slot:error>
        <div class="absolute-full flex flex-center bg-negative text-white">Erro!</div>
      </template>
    </q-img>
    <q-file
      class="hidden"
      ref="fileInput"
      accept="image/jpeg"
      max-files="1"
      v-model="file"
      @update:model-value="updateThumbnail"
    />
    <!-- ---------------------------- -->
  </label>
</template>

<style scoped>
.img-size {
  width: 100%;
  height: 150px;
}
.q-img__content > div {
  padding: 8px;
  border-radius: 3px;
}
.label {
  font-weight: 700;
  font-size: 13px;
  margin: 10px 0 2px 8px;
}
</style>

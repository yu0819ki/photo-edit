<template>
  <div class="Upload">
    <vue-croppa
      class="canvas"
      v-model="image"
      :width="400"
      :height="400"
      :show-loading="true"
      :loading-size="100"
      remove-button-color="#666"
      :prevent-white-space="true"
      :quality="4"
    />
  </div>
</template>

<script>
import { component as VueCroppa} from 'vue-croppa';

export default {
  name: 'Upload',
  components: {
    VueCroppa,
  },
  data() {
    return {
      image: {},
    }
  },
}
</script>

<style src="vue-croppa/dist/vue-croppa.css">
</style>
<style scoped>
.Upload {
  display: flex;
}

.canvas {
  display: block;
}
</style>

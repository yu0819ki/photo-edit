<template>
  <div class="Upload">
    <div
      class="wrapper"
      :class="{useAutoSizing}"
    >
      <vue-croppa
        class="canvas"
        v-model="image"
        :width="400"
        :height="400"
        :auto-sizing="useAutoSizing"
        :show-loading="true"
        :loading-size="100"
        remove-button-color="#666"
        :prevent-white-space="true"
        :quality="4"
        @init="init"
        @draw="init"
      />
      <div class="controller">
        <button type="button" @click="fitContainer">Fit</button>
      </div>
    </div>
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
      useAutoSizing: false,
    };
  },
  methods: {
    fitContainer() {
      this.useAutoSizing = !this.useAutoSizing;
    },
    init() {
      if (this.useAutoSizing) {
        this.image.realHeight = this.image.realWidth;
      }
    },
  },
}
</script>

<style src="vue-croppa/dist/vue-croppa.css">
</style>
<style scoped>
.Upload {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.wrapper {
  margin: auto;
}

.wrapper.useAutoSizing {
  margin: 0;
}

.canvas {
  position: relative;
  display: block;
}

@media (max-width: 480px) {
  .wrapper {
    margin: 0;
  }

  .canvas {
    width: 100%;
    height: auto;
  }
}
</style>

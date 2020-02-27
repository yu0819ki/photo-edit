<template>
  <div class="Upload">
    <div
      class="wrapper"
      :class="{useAutoSizing}"
    >
      <div class="controller">
        <button type="button" @click="fitContainer">{{fitButtonText}}</button>
        <b-field label="Contrast">
          <b-slider v-model="contrast" :min="0" :max="200" :custom-formatter="val => (val - 100) + '%'" lazy @change="applyFilter" ></b-slider>
        </b-field>
        <b-field label="Brightness">
          <b-slider v-model="brightness" :min="0" :max="200" :custom-formatter="val => (val - 100) + '%'" lazy @change="applyFilter" ></b-slider>
        </b-field>
      </div>
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
    </div>
  </div>
</template>

<script>
import { component as VueCroppa} from 'vue-croppa';
import BField from "buefy/src/components/field/Field";

export default {
  name: 'Upload',
  components: {
    BField,
    VueCroppa,
  },
  data() {
    return {
      image: {},
      useAutoSizing: false,
      contrast: 100,
      brightness: 100,
    };
  },
  computed: {
    fitButtonText() {
      return this.useAutoSizing ? 'Unfit' : 'Fit';
    },
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
    applyFilter() {
      const ctx = this.image.ctx;
      ctx.filter = `contrast(${this.contrast}%) brightness(${this.brightness}%)`;
      this.image._draw();
    }
  },
}
</script>

<style src="vue-croppa/dist/vue-croppa.css">
</style>
<style src="buefy/dist/buefy.css">
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

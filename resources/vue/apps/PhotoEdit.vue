<template>
  <div class="PhotoEdit">
    <upload/>
  </div>
</template>>
<script>
import Hello from "./Hello";
import Upload from '../components/Upload';

export default {
  name: 'PhotoEdit',
  components: {
    Hello,
    Upload,
  },
};
</script>
<style scoped>
.PhotoEdit {
  display: flex;
  margin: 20px auto;
  width: 960px;
  justify-content: center;
}
</style>

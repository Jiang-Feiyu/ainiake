<template>
  <div>
    <vue-json-editor
      v-model="curValue"
      :expandedOnStart="false"
      mode="text"
      :show-btns="true"
      @json-save="onJsonChange"
    />
  </div>
</template>
<script>
import vueJsonEditor from 'vue-json-editor';

export default {
  components: {
    vueJsonEditor,
  },
  props: {
    value: {
      type: String,
      require: true,
      default: "",
    },
    options: {
      type: Array,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      curValue: this.value,
    };
  },
  methods: {
    onJsonChange(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style>

</style>

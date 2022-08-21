<template>
    <div
      class="text-box"
      :style="boxStyle"
      @click="clickEvent"
    >
    </div>
</template>
<script>
// 按钮矩形组件
export default {
  props: {
    data: {
      type: Object,
      require: true,
      default: null,
    },
  },
  components: {
  },
  computed: {
    boxStyle() {
      const {
        fourBorderRadius,
      } = this.options;
      const {
        left,
        right,
        top,
        bottom,
      } = fourBorderRadius;
      const { bgcolor } = this.data;
      return {
        backgroundColor: bgcolor,
        borderRadius: `${top}px ${right}px ${bottom}px ${left}px`,
      };
    },
    options() {
      return this.data.data.componentData;
    },
  },
  mounted() {
  },
  data() {
    return {
    };
  },
  methods: {
    clickEvent(){
      eval(this.options.rectData)
    }
  },
};
</script>
<style lang="less" scoped>
.text-box {
  caret-color: transparent;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>

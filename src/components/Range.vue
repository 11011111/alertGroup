<template>
  <div>
    <div class="justify-center">
      <input
        class="input-custom"
        v-model="params.min"
      />
      -
      <input
        class="input-custom"
        v-model="params.max"
      />
    </div>
    <q-range
      color="primary"
      :min="values.min"
      :max="values.max"
      class="row my-custom"
      v-model="params"
      @change="changeParams"
      track-size="2px"
      track-color="secondary"
      thumb-size="24px"
    />
  </div>
</template>

<script>
export default {
  name: 'Range',
  props: {
    values: Object,
  },
  watch: {
    params: {
      handler() {
        this.$emit('input', this.params);
      },
      deep: true,
    },
  },
  mounted() {
    this.params = this.values;
  },
  methods: {
    changeParams(val) {
      this.$emit('input', val);
    },
  },
  data() {
    return {
      params: {
        min: 0,
        max: 0,
      },
    };
  },
};
</script>

<style scoped lang="scss">
.my-custom ::v-deep {
  path {
    stroke: white;
    fill: $primary;
  }

  .q-slider__thumb:active {
    transform: scale(0.9) translate(-50%, -50%);
  }
}
</style>

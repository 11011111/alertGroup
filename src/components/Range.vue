<template>
  <div>
    <div class="justify-center">
      <input
        class="input-custom"
        v-model="propModel.min"
      />
      -
      <input
        class="input-custom"
        v-model="propModel.max"
      />
    </div>
    <q-range
      color="primary"
      :min="values.min"
      :max="values.max"
      class="row my-custom"
      v-model="propModel"
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


  computed: {
    propModel: {
      get () { return this.value },
      set (value) { this.$emit('update:value', value) },
    },
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
    console.log(this.values)
    this.params = this.value;
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
  margin-top: 5px;
  margin-bottom: 5px;

  path {
    stroke: white;
    fill: $primary;
  }

  .q-slider__thumb:active {
    transform: scale(0.9) translate(-50%, -50%);
  }
}
</style>

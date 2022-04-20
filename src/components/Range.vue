<template>
<div>
  <div class="justify-center">
    <input
      class="input-custom"
      v-model="minValue"
    />
    -
    <input
      class="input-custom"
      v-model="maxValue"
    />

  </div>
  <q-range
    color="primary"
    :min="min"
    :max="max"
    class="row my-custom"
    v-model="propModel"
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
    value: Object,   // то что пришло из v-model (Vue2), если Vue3 - modelValue
    min: Number,
    max: Number,
  },
  mounted() {
    console.log(this.value)
  },

  computed: {
    propModel: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    minValue: {
      get() {
        return this.value.min
      },
      set(val) {
        this.propModel = {
          min: val,
          max: this.value.max
        }
      },
    },
    maxValue: {
      get() {
        return this.value.max
      },
      set(val) {
        this.propModel = {
          min: val,
          max: this.value.max
        }
      },
    },
  },
}
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

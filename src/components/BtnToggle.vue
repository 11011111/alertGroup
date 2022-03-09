<template>
  <div class="row btn-toggle">
    <div v-for="(item, idx) in items" :key="idx" >
      <input
        :id="rand+idx"
        type="radio"
        v-model="active"
        :value="item"
      >
      <label :for="rand+idx" >{{ item }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnToggle',
  props: {
    value: String,
    items: Array,
  },
  watch: {
    active() {
      this.$emit('input', this.active);
    },
    value() { // Для повторного использования компонента с привязкой к одним и тем же данным
      this.active = this.value;
    },
  },
  mounted() {
    this.active = this.value;
    this.rand = Date.now().toString(36) + Math.random().toString(36).substring(2); // Генератор ID
  },
  data() {
    return {
      active: '',
      rand: '',
    };
  },
};
</script>

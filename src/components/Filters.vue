<template>
  <div>
    <div class="row justify-between filters ">
      <div class="item">
        <div class="title">Комнаты</div>
        <q-btn-toggle
          v-model="model"
          :options="rooms"
          unelevated
          spread
          stretch
          no-caps
          text-color="dark"
          toggle-text-color="grey-1"
          padding="7px 14px"
          class="my-custom-toggle btn-toggle"
        />
      </div>
      <q-separator vertical inset/>
      <div class="item">
        <div class="title">Этаж</div>
        <Range
          :values="floor" />
      </div>
      <q-separator vertical inset/>
      <div class="item">
        <div class="title">Площадь, <span class="text-lowercase">м<sup>2</sup></span></div>
        <Range :values="area" />
      </div>
      <q-separator vertical inset/>
      <div class="item">
        <div class="title">Стоимость, <span class="text-lowercase">млн. р.</span></div>
        <Range :values="price" />
      </div>
      <q-separator vertical inset/>
      <div class="item text-center items-end row">
        <div>
          <q-btn
            label="Применить"
            class="btn"
            unelevated
          />
          <a href="#">Сбросить фильтр</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Range from 'components/Range';

export default {
  name: 'Filters',
  components: { Range },
  data() {
    return {
      rooms: [
        { label: 'S', value: 'S' },
        { label: '1к', value: '1' },
        { label: '2к', value: '2' },
        { label: '3к', value: '3' },
      ],
      model: '1',
      floor: {
        min: 1,
        max: 13,
      },
      area: {
        min: 1,
        max: 100,
      },
      price: {
        min: 9.9,
        max: 99.9,
      },
    };
  },
};
</script>

<style scoped lang="scss">
.my-custom-toggle ::v-deep button {
  border: 1px solid $secondary;
  margin: 0 2px;
  background: $light-on-dark;
  border-radius: 5px!important;
  display: block;
}
.my-custom-toggle ::v-deep button.bg-primary {
  border: 1px solid transparent;
}
</style>

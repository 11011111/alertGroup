<template>
  <div>
    <div class="row justify-between filters ">
      <div class="item">
        <div class="title">Комнаты</div>
        <BtnToggle v-model="rooms.selected" :items="rooms.items"/>

        <!--        Использование компонента от quasar     -->
        <!--        <q-btn-toggle-->
        <!--          v-model="model"-->
        <!--          :options="rooms"-->
        <!--          unelevated-->
        <!--          spread-->
        <!--          stretch-->
        <!--          no-caps-->
        <!--          text-color="dark"-->
        <!--          toggle-text-color="grey-1"-->
        <!--          padding="7px 14px"-->
        <!--          class="my-custom-toggle "-->
        <!--        />-->
        <!--        End QBtnToggle      -->
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
        <Range :values="area"/>
      </div>
      <q-separator vertical inset/>
      <div class="item">
        <div class="title">Стоимость, <span class="text-lowercase">млн. р.</span></div>
        <Range :values="price"/>
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
import BtnToggle from 'components/BtnToggle';
import Range from 'components/Range';

export default {
  name: 'Filters',
  components: {Range, BtnToggle},
  watch: {
    // floor(val) {
    //   console.log(val)
    // },
  },
  computed: {
    // floor: {
    //   get() {
    //     return this.$store.getters["apartment/getFloor"]
    //   },
    //   set(val) {
    //     console.log('23423423', val)
    //     this.$store.commit('apartment/FLOOR_MUTATION', val)
    //   }
    // },

  },
  data() {
    return {
      rooms: {
        selected: '1к',
        name: 'rooms',
        items: ['S', '1к', '2к', '3к'],
      },
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
      model: '1',
    };
  },
  methods: {
    // onFilter() {
    //   function floorFilter(flats) {
    //     for (let item in flats) {
    //       if (item === 'floor') {
    //         console.log(flats[item])
    //       }
    //     }
    //   }
    //
    //   let arrApartments = this.$store.state.apartment.apartments
    //   arrApartments.filter(floorFilter)
    // },
  },
};
</script>

<style scoped lang="scss">
//Стили для компонента quasar
//.my-custom-toggle ::v-deep button {
//  border: 1px solid $secondary;
//  margin: 0 2px;
//  background: $light-on-dark;
//  border-radius: 5px!important;
//  display: block;
//}
//.my-custom-toggle ::v-deep button.bg-primary {
//  border: 1px solid transparent;
//}
//End
</style>

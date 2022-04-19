<template>
  <div class="row">
    <div class="col-12 q-my-lg">
      <div class="apartments row justify-between">
        <div class="col-3 q-px-md q-py-md"
             v-for="(item, idx) in getApartments"
             :key="idx"
        >
          <div class="item q-px-sm q-py-sm">
            <div class="header row justify-between items-center q-px-sm q-py-sm">
              <div class="floor">{{ item.floor }} этаж</div>
              <div class="title">{{ item.rooms }} комната - {{ item.square }} м<sup>2</sup></div>
            </div>
            <div class="body">
              <div class="row justify-end ">
                <div class="number q-px-sm">№{{ item.number }}</div>
              </div>
              <img src="../assets/img/img1.png" :alt="item.building_name">
              <div class="q-px-sm q-py-sm">
                <div class="row justify-end"></div>
                <div class="price row justify-end">{{ item.price.toLocaleString('ru') }} р.</div>
                <div class="price-square row justify-end">{{ Math.floor(item.price / item.square).toLocaleString('ru') }} р. за м<sup>2</sup></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Apartment',
  props: {
    getApartments: {
      type: Array,
      required: null
    }
  }
};
</script>

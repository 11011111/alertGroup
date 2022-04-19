<template>
  <q-page class="row bg justify-center">
    <div class="container">
      <div class="head row flex-center">
        <h1>{{ heading }}</h1>
      </div>
      <Filters />
      <Apartment :getApartments="getApartments"/>

    </div>
  </q-page>
</template>

<script>
import Filters from 'components/Filters';
import Apartment from 'components/Apartment';

export default {
  name: 'PageIndex',
  components: { Filters, Apartment },
  computed: {
    getApartments() {
      return this.$store.getters['apartment/getApartments']
    }
  },
  beforeCreate() {
    return this.$store.dispatch('apartment/apartAction', {})
  },
  data() {
    return {
      heading: 'Lorem ipsum dolor sit',
    };
  },
};
</script>

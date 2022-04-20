<template>
  <q-page class="row bg justify-center">
    <div class="container">
      <div class="head row flex-center">
        <h1>{{ heading }}</h1>
      </div>
      <Filters />
      <Apartment :value="apartments"/>
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
    apartments() {
      return this.$store.getters['apartment/getApartments']
    }
  },
  mounted() {
    return this.$store.dispatch('apartment/apartAction', {})
  },
  data() {
    return {
      heading: 'Lorem ipsum dolor sit',
    };
  },
};
</script>

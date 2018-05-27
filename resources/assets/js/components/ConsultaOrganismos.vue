<template>
<div class="consultaOrganismosStyle">

  <FormularioBusquedaOrganismo />

  <br>

  <div class="row">

    <OrganismoCard v-for="organismo in organismos" :organismo="organismo" :key="organismo.id" />

  </div>


</div>

</div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

import FormularioBusquedaOrganismo from './FormularioBusquedaOrganismo';
import OrganismoCard from './OrganismoCard';

export default {

  components: {
    FormularioBusquedaOrganismo,
    OrganismoCard
  },

  computed: mapGetters({
    organismos: 'allOrganismos'
  }),

  methods: {


  },

  mounted() {

  }


}
</script>

<style>
.consultaOrganismosStyle{
  margin-top: 10px;
}
</style>

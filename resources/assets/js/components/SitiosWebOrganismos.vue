<template>
<div>

  <div class="row">

    <div class="col-sm-4"></div>
    <div class="col-sm-4">

      <input type="text" class="form-control" v-model="filtro_organismo" placeholder="Filtre por organismo ...">

    </div>

  </div>

  <br>

  <div class="row">

    <OrganismoCard
     v-for="organismo in organismosFiltrados"
     :organismo="organismo"
     />

  </div>

</div>
</template>

<script>
import OrganismoCard from './OrganismoCard'

export default {
  components: {
    OrganismoCard
  },

  data: function() {
    return {
      organismos: [{
          nombre: 'Biblioteca Provincial',
          url: 'https://www.entrerios.gov.ar/biper'
        },
        {
          nombre: 'Consejo de la Magistratura',
          url: 'https://www.entrerios.gov.ar/magistratura'
        },
        {
          nombre: 'Consejo General de Educación',
          url: 'http://cge.entrerios.gov.ar/'
        },
        {
          nombre: 'Delta Sustentable',
          url: 'https://www.entrerios.gov.ar/deltasustentable'
        },
        {
          nombre: 'Dirección de Desarrollo Eléctrico',
          url: 'https://www.entrerios.gov.ar/desarrolloelectrico'
        },
        {
          nombre: 'Dirección General de Informática',
          url: 'https://www.entrerios.gov.ar/dgin'
        },
        {
          nombre: 'Escribanía Mayor de Gobierno',
          url: 'http://www.entrerios.gov.ar/escribaniamayor/'
        },
        {
          nombre: 'Fiscalía de Estado',
          url: 'https://www.entrerios.gov.ar/fiscalia'
        },
        {
          nombre: 'IPRODI - Instituto Provincial de Discapacidad',
          url: 'http://www.iprodi.gob.ar/'
        },
        {
          nombre: 'La Vieja Usina',
          url: 'https://www.entrerios.gov.ar/viejausina'
        },
        {
          nombre: 'Oficina Anticorrupción y Ética Pública',
          url: 'https://www.entrerios.gov.ar/anticorrupcion'
        },
        {
          nombre: 'Programa Provincial de Educación Ambiental',
          url: 'https://www.entrerios.gov.ar/pea'
        },
        {
          nombre: 'Representación del Gobierno de Entre Ríos en Capital Federal',
          url: 'http://www.casadeentrerios.gov.ar/'
        },
        {
          nombre: 'Secretaría de Ambiente',
          url: 'https://www.entrerios.gov.ar/ambiente'
        },
        {
          nombre: 'Secretaría de Cultura',
          url: 'http://cultura.entrerios.gov.ar/'
        },
        {
          nombre: 'Secretaría de Energía',
          url: 'https://www.entrerios.gov.ar/secretariadeenergia'
        },
      ],

      filtro_organismo: ''

    }
  },
  computed: {
    organismosFiltrados: function() {
      const {
        filtro_organismo
      } = this;
      return this.organismos.filter(function(organismo) {
        return (organismo.nombre.toLowerCase().indexOf(filtro_organismo) > -1)
      })

    }
  }
}
</script>

<style>
.card-organismos {
  background-color: #c0cc9c;
}
</style>

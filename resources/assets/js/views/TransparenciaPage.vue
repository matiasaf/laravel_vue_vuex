<template>
<div class="transparenciaPageContainer">

  <Parallax urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_DUb4GJ48c4jzHQ8jFy8y9FZ5y3nGUdGBza4F3TRLnxkShiP" />


  <!-- <NavbarLateral /> -->

  <div class="card">
    <div class="card-header">
      Información de finanzas
    </div>
    <div class="card-body">

      <div class="row">

        <LinksCards v-for="link in linksFinanzas" :link="link" id="link.id" />

      </div>

    </div>
  </div>

  <div class="card">
    <div class="card-header">
      Información de licitaciones
    </div>
    <div class="card-body">
      <div class="row">

        <LinksCards v-for="link in linksLicitaciones" :link="link" />

      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      Información de estadísticas y censos
    </div>
    <div class="card-body">

      <div class="row">

        <LinksCards v-for="link in linksEstadisticasCensos" :link="link" />

      </div>

    </div>
  </div>

  <BotonSubir />

</div>
</template>

<script>
import Parallax from '../components/Parallax';
import NavbarLateral from '../components/NavbarLateral';
import BotonSubir from '../components/BotonSubir';
import LinksCards from '../components/LinksCards';

export default {
  components: {
    Parallax,
    BotonSubir,
    LinksCards
  },
  data: function() {
    return {
      linksFinanzas: [{
          id: 1 + 'tagFinanzas',
          nombre: 'Presupuesto general anual.',
          url: 'https://www.entrerios.gov.ar/minecon/index.php?codigo=76&codsubmenu=85&menu=menu&modulo=indetalle1'
        },
        {
          id: 2 + 'tagFinanzas',
          nombre: 'Presupuesto plurianual.',
          url: 'https://www.entrerios.gov.ar/minecon/index.php?codigo=76&codsubmenu=86&menu=menu&modulo=indetalle2'
        },
        {
          id: 3 + 'tagFinanzas',
          nombre: 'Ingresos públicos.',
          url: 'https://www.entrerios.gov.ar/minecon/index.php?codigo=76&codsubmenu=87&menu=menu&modulo=indetalle3'
        },
      ],
      linksLicitaciones: [{
          id: 1 + 'tagLicitaciones',
          nombre: 'Licitaciones - Dirección General de Contrataciones.',
          url: 'http://www.entrerios.gov.ar/contrataciones/index.php?codigo=76&item=&menu=menu&modulo=licitacion&accion='
        },

      ],
      linksEstadisticasCensos: [{
          id: 1 + 'tagEstadisticas',
          nombre: 'Población de Gobiernos Locales (segun censo 2010).',
          url: 'https://www.entrerios.gov.ar/dgec/censo2010/'
        },
        {
          id: 2 + 'tagEstadisticas',
          nombre: 'Producto Bruto Provincial (cuadros)',
          url: 'https://www.entrerios.gov.ar/dgec/pbg/'
        },
        {
          id: 3 + 'tagEstadisticas',
          nombre: 'Comercio exterior (series estadísticas)',
          url: 'https://www.entrerios.gov.ar/dgec/comercio-exterior-series/'
        },
        {
          id: 4 + 'tagEstadisticas',
          nombre: 'Encuesta permanente de hogares',
          url: 'https://www.entrerios.gov.ar/dgec/trabajoeingresos/'
        },
        {
          id: 5 + 'tagEstadisticas',
          nombre: 'Otros indicadores económicos y sociales.',
          url: 'https://www.entrerios.gov.ar/dgec/prensa/'
        },
      ],
    }
  }

}
</script>

<style>
.transparenciaPageContainer {

  /*background-color: white;*/
  font-weight: 600;
}

/*.titulo {

  font-size: 2em;
  color: #0fb3f0;
  margin:2%;


}*/
</style>

<template>

<div class="transparenciaPageContainer">

  <Parallax urlImage="https://www.entrerios.gov.ar/portal/img/enca_transparencia.png" />


  <!-- <NavbarLateral /> -->

  <div class="card">
    <div class="card-header">
      Información de finanzas
    </div>
    <div class="card-body">

      <LinksCards />

    </div>
  </div>

  <div class="card">
    <div class="card-header">
      Información de licitaciones
    </div>
    <div class="card-body">

      <LinksCards />

    </div>
  </div>

  <div class="card">
    <div class="card-header">
      Información de estadísticas y censos
    </div>
    <div class="card-body">

      <LinksCards />

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
  }

}
</script>

<style>
.transparenciaPageContainer{

  /*background-color: white;*/
  font-weight: 600;
}

/*.titulo {

  font-size: 2em;
  color: #0fb3f0;
  margin:2%;


}*/
</style>

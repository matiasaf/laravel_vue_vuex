<template lang="html">

  <div class="footer">

    <div class="row">

      <div class="col-sm-3">

        <div class="contenedor_icono_footer">

          <img class="imagen_footer"src="https://www.entrerios.gov.ar/portal/img/isologoER_Gob_pie.png" alt="" />

        </div>

      </div>

      <div class="col-sm-3">

        <RedesSociales />

      </div>

      <div class="col-sm-3">

        <Ministerios />

      </div>

      <div class="col-sm-3">

        <AccesosDirectos />

      </div>

    </div>

  </div>

</template>

<script>
import RedesSociales from './RedesSociales';
import Ministerios from './Ministerios';
import AccesosDirectos from './AccesosDirectos';

export default {

  components: {

    RedesSociales,
    Ministerios,
    AccesosDirectos,

  }
}
</script>

<style lang="css">
.footer{
  background-color: #2b2b2b;
}
.imagen_footer{
  margin: 15%;
}
.contenedor_icono_footer{
  margin: 10% auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

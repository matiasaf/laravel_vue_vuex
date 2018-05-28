<template>
  <div class="col-sm-4">
    <div class="card cardss" :id="link.id">
      <div class="card-body">
        <a class="fontCards" :href="link.url">
          {{link.nombre}}
        </a>
      </div>
    </div>
  </div>
  <!-- <div class="col-sm-4">
    <div class="card cardss" id="card2">
      <div class="card-body">
        <a class="fontCards" href="https://www.entrerios.gov.ar/minecon/index.php?codigo=76&codsubmenu=86&menu=menu&modulo=indetalle2">
          Presupuesto plurianual.
        </a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card cardss" id="card3">
      <div class="card-body">
        <a class="fontCards" href="https://www.entrerios.gov.ar/minecon/index.php?codigo=76&codsubmenu=87&menu=menu&modulo=indetalle3">
          Ingresos públicos.
        </a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card cardss" id="card4">
      <div class="card-body">
        <a class="fontCards" href="https://www.entrerios.gov.ar/contaduria/index.php">
          Información fiscal.
        </a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card cardss" id="card5">
      <div class="card-body">
        <a class="fontCards" href="https://www.entrerios.gov.ar/minecon/index.php?codigo=76&codsubmenu=89&menu=menu&modulo=indetalle5">
          Nómina de personal.
        </a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card cardss" id="card6">
      <div class="card-body">
        <a class="fontCards" href="https://www.entrerios.gov.ar/minecon/index.php?codigo=76&codsubmenu=90&menu=menu&modulo=indetalle6">
          Planta de personal.
        </a>
      </div>
    </div>
  </div> -->

</template>

<script>
export default {

  props: ['link'],

  methods: {


    jqueryFunctions: function() {

      let that = this;

      $(`#${this.link.id}`).mouseover(function() {
        $(`#${that.link.id}`).addClass('animated pulse');
      })

      $(`#${this.link.id}`).mouseleave(function() {
        $(`#${that.link.id}`).removeClass('animated pulse');
      })

    }
  },

  mounted() {

    this.jqueryFunctions();

  }

}
</script>

<style lang="css">
.cardss{

  background-color: #90af71;

  margin:5%;

  -webkit-box-shadow: -1px 6px 18px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 6px 18px -7px rgba(0,0,0,0.75);
  box-shadow: -1px 6px 18px -7px rgba(0,0,0,0.75);

}
.fontCards{
  font-size: 2em;
  color:white;
}

</style>

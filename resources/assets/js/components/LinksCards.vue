<template>
<div class="row">
  <div class="col-sm-4">
    <div class="card cardss" id="card1">
      <div class="card-body">
        <a class="fontCards" href="https://www.entrerios.gov.ar/minecon/index.php?codigo=76&codsubmenu=85&menu=menu&modulo=indetalle1">
          Presupuesto general anual.
        </a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
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
  </div>


</div>
</template>

<script>
export default {

  props: ['src_img'],

  methods :{

      jqueryFunctions : function(){
        $('#card1').mouseover(function(){
          $('#card1').addClass('animated pulse');
        })

        $('#card1').mouseleave(function(){
          $('#card1').removeClass('animated pulse');
        })
        $('#card2').mouseover(function(){
          $('#card2').addClass('animated pulse');
        })

        $('#card2').mouseleave(function(){
          $('#card2').removeClass('animated pulse');
        })

        $('#card3').mouseover(function(){
          $('#card3').addClass('animated pulse');
        })
        $('#card3').mouseleave(function(){
          $('#card3').removeClass('animated pulse');
        })

        $('#card4').mouseover(function(){
          $('#card4').addClass('animated pulse');
        })

        $('#card4').mouseleave(function(){
          $('#card4').removeClass('animated pulse');
        })

        $('#card5').mouseover(function(){
          $('#card5').addClass('animated pulse');
        })
        $('#card5').mouseleave(function(){
          $('#card5').removeClass('animated pulse');
        })

        $('#card6').mouseover(function(){
          $('#card6').addClass('animated pulse');
        })
        $('#card6').mouseleave(function(){
          $('#card6').removeClass('animated pulse');
        })
      }
  },

  mounted () {

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
  font-size: 2.5em;
  color:white;
}

</style>

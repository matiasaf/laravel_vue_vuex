<template>
<div class="poderJudicialStyle">
  <b>Autoridades del Poder Judicial</b>
  <br>
  <br> El Poder Judicial es uno de los tres poderes que conforman la provincia de Entre Ríos consagrados mediante el principio que establece el art. 1 de la Constitución Provincial: “La Provincia de Entre Ríos, como parte integrante de la Nación Argentina,
  organiza su gobierno bajo la forma republicana representativa(…)”
  <br>
  <br> El Poder Judicial es ejercido por un Superior Tribunal de Justicia y demás tribunales o jurados establecidos por ley.
  <br>
  <br> Según establece la Constitución de Entre Ríos, el Superior Tribunal se compondrá por un número impar de miembros que no podrá ser inferior a cinco. Los miembros del Superior Tribunal serán inamovibles mientras dure su buena conducta y sólo podrán
  ser removidos mediante el juicio político. (art 187, 189)
  <br>
  <br> Actualmente el Superior Tribunal está compuesto por 9 integrantes. Las atribuciones y disposiciones generales del Poder Judicial se encuentran definidas en la Constitución Provincial en la Sección VI, Capítulo II desde el art. 203 al 206.
  <br>
  <br>
  <b>Ministerio Público.</b>
  <br>
  <br> El Ministerio Público es un órgano autónomo integrante del Poder Judicial. Está compuesto por dos órganos independientes: Ministerio Público Fiscal, dirigido por el Procurador General y el Ministerio Público de Defensa dirigido por el Defensor
  General. Sus competencias se encuentran definidas en la Constitución Provincial en la Sección VI, Capítulo III, artículos 207 y 208.

  <br>
  <br>

  <button class="btn btn-success botonJudicial" @click="iraSitioJudicial">Ir a sitio web</button>


</div>
</template>

<script>
export default {

  methods: {
    iraSitioJudicial: function() {
      location.href = "http://www.jusentrerios.gov.ar/";
    }
  }

}
</script>

<style>
.poderJudicialStyle {

  text-align: justify;

}

.btn-success {
    color: #fff;
    background-color: #7da258;
    border-color: #cddbc2;
}

.botonJudicial {
  text-align: center;
}
</style>

<template>

<div class="flex-container">

  <button class="boton shadow"><span class="fuente">Autoridades</span></button>
  <button class="boton shadow"><span class="fuente">Transparencia</span></button>
  <button class="boton shadow"><span class="fuente">Noticias</span></button>

</div>

</template>

<script>

export default {

mounted : function(){
  console.log('monto componente')
}

}
</script>

<style lang="css">

.flex-container {
  display: flex;
  justify-content: center;
  height: 25%;
}

.boton {
  height: 60px;
  width: 20%;
  background-color: #00a8e1;
  margin: 5%;
}

.fuente {
  font-size: 2.3vw;
  font-weight: bolder;
  color: white;
  text-align: center;
}

.shadow {
   -moz-box-shadow:    inset 0 0 15px #000000;
   -webkit-box-shadow: inset 0 0 15px #000000;
   box-shadow:         inset 0 0 15px #000000;
}
</style>

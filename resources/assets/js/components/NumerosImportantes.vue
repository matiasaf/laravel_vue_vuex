<template lang="html">

<div class="row bloque">

  <div class="col-sm-2 contenedores" >

    <div class="fuente_numeros">911 Emergencias</div>

  </div>

  <div class="col-sm-2 contenedores">

    <span class="fuente_numeros">100 Bomberos</span>

  </div>
  <div class="col-sm-3 contenedores">

    <span class="fuente_numeros">107 Emergencias médicas</span>

  </div>
  <div class="col-sm-2 contenedores">

    <span class="fuente_numeros">103 Defensa civi</span>

  </div>
  <div class="col-sm-2 contenedores">

    <span class="fuente_numeros">102 Ayuda al niño</span>

  </div>
  <div class="col-sm-2">


  </div>

</div>


</template>

<script>
export default {}
</script>

<style lang="css">

.contenedores{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

}

.bloque{
  background-color: #47a1bf;
  height: 25%;
}
.fuente_numeros{

  color:white;
  font-weight: bold;
  font-size: 2em;
  margin: 5%;
}
.fuente_descripcion{

  font-size: 2em;
}
</style>

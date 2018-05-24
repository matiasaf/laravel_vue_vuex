<template>
<div class="row noticiasabm">

  <div class="col-sm-6">

    <FormularioNuevaNoticia />

  </div>
  <div class="col-sm-6">

    <NoticiasLista />

  </div>

</div>
</template>

<script>

import FormularioNuevaNoticia from '../components/admin/FormularioNuevaNoticia'
import NoticiasLista from '../components/admin/NoticiasLista'

export default {

  components: {
    FormularioNuevaNoticia,
    NoticiasLista
  }

}
</script>

<style>
.noticiasabm{

  margin-top:10%;
  background-color:white;

}
</style>

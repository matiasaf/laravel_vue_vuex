<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light navbarstyle fixed-top">
  <a class="navbar-brand" href="#">
    <img class="logo" src="https://www.entrerios.gov.ar/portal/img/isologoER_Gob.png" alt="" />
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">

        <router-link class="linksfont" :to="{ name: 'main' }">Inicio</router-link>

        <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">

        <router-link class="linksfont" :to="{ name: 'gobierno' }">Gobierno</router-link>

      </a>
      <a class="nav-item nav-link" href="#">

        <router-link class="linksfont" :to="{ name: 'provincia' }">La provincia</router-link>

      </a>
      <a class="nav-item nav-link disabled" href="#">

        <router-link class="linksfont" :to="{ name: 'transparencia' }">Transparencia</router-link>

      </a>
      <a class="nav-item nav-link disabled" href="#">

        <router-link class="linksfont" :to="{ name: 'main' }">Contactanos</router-link>

      </a>

      <a class="nav-item nav-link disabled pull-right" href="#">

        <router-link class="linksfont" :to="{ name: 'admin' }">Administración</router-link>

      </a>

    </div>
  </div>
</nav>

</template>


<script>
export default {

  data: function() {
    return {

    }
  }
}
</script>

<style>
.navbarstyle {

  background-color: #cecece;

  -webkit-box-shadow: -1px 2px 18px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 2px 18px -7px rgba(0,0,0,0.75);
  box-shadow: -1px 2px 18px -7px rgba(0,0,0,0.75);

}

.logo {
  height: 40px;
}

.linksfont {
  padding: 15px;
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5vm;
}
</style>

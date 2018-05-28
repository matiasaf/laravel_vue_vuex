<template>
<div>

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

  <header>
    <button class="toggle-nav">
          <span>
            <i class="fas fa-chevron-right"></i></span>
		  </button>
    <ul class="nav">
      <li class="loud"><a href="#">911 - Emergencias</a></li>
      <li class="loud"><a href="#">100 - Bomberos</a></li>
      <li class="loud"><a href="#">107 - Emergencias médicas</a></li>
      <li class="loud"><a href="#">103 - Defensa civil</a></li>
      <li class="loud"><a href="#">102 - Ayuda al niño</a></li>
    </ul>
  </header>

</div>
</template>


<script>
export default {


  mounted: function() {

    $(document).ready(function() {

      var header = $('header'),
        btn = $('button.toggle-nav');

      btn.on('click', function() {
        header.toggleClass('active');
      });

    });

  }

}
</script>

<style>
.navbarstyle {

  background-color: #cecece;

  -webkit-box-shadow: -1px 2px 18px -7px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 18px -7px rgba(0, 0, 0, 0.75);
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

/* General styles */

/*body {
  font: 400 20px 'Droid Sans', sans-serif;
  line-height: 1.5em;
  background-color: #fff;
  color: #c0c5ce;
}*/

/* Style for header */

header {
  position: relative;
  background-color: #2c353a;
  z-index: 5000;
  position: fixed;
  /* Set the navbar to fixed position */
  top: -11px;
  /* Position the navbar at the top of the page */
  width: 100%;
  /* Full width */
}

header ul.nav {
  overflow: hidden;
}

header ul.nav li {
  position: relative;
  float: left;
  width: 20%;
}

header ul.nav li a {
  display: block;

  height: 50px;
  opacity: 0;
  font: 400 1.8em 'Allan', serif;
  line-height: 50px;
  color: #848e92;
  text-decoration: none;
  text-align: center;

  margin-top: 45px;
  margin-bottom: -25px;

  cursor: default;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  &:hover {
    color: #fff;
    background-color: #222b2f;
  }
}

@media screen and (max-width: 600px) {
  header ul.nav li {
    float: none;
    width: 100%;
  }
  header ul.nav li a {
    height: 0;
  }
}

/* Style for header with active class name */

header.active ul.nav li a {
  height: 120px;
  opacity: 1;
  line-height: 120px;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  header.active ul.nav li a {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #222b2f;
  }
}

/* Style for the plus button */

button.toggle-nav {
  position: absolute;
  top: 78px;
  left: calc(50% - 30px);
  width: 60px;
  height: 35px;
  background-color: #00afef;
  font: 400 1.2em 'Allan', serif;
  color: #fff;
  border: none;
  line-height: 30px;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
}

button.toggle-nav:hover {
  height: 50px;
}

button.toggle-nav span {
  display: block;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
}

/* Style for the plus button when header has active classe name */

header.active button.toggle-nav {
  top: 140px;
  background-color: #256f6f;
}

header.active button.toggle-nav span {
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
}

@media screen and (max-width: 600px) {
  button.toggle-nav {
    top: 0;
    left: 15px;
  }
  header.active button.toggle-nav {
    top: 305px;
  }
}

.navbar {
  z-index: 8000;
  /*height: 70px;*/
}
</style>

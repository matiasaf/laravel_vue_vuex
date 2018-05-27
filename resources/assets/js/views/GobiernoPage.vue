<template>

<div class="gobiernoPageContainer">

  <Parallax urlImage="https://www.publicdomainpictures.net/pictures/70000/velka/natural-green-background-1389459704YWX.jpg" />

  <NavbarLateralGobierno />

  <BotonSubir />

</div>

</template>

<script>

import Parallax from '../components/Parallax';
import NavbarLateralGobierno from '../components/NavbarLateralGobierno';
import BotonSubir from '../components/BotonSubir';

export default {
  components: {
    Parallax,
    NavbarLateralGobierno,
    BotonSubir
  }

}
</script>

<style>
.gobiernoPageContainer{
  background-color: white;
}
</style>

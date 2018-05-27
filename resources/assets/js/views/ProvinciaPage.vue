<template>

<div class="gobiernoPageContainer">

  <Parallax urlImage="http://kb4images.com/images/green-hd-wallpaper/37518744-green-hd-wallpaper.jpg" />

  <NavbarLateral />

  <BotonSubir />

</div>

</template>

<script>

import Parallax from '../components/Parallax';
import NavbarLateral from '../components/NavbarLateral';
import BotonSubir from '../components/BotonSubir';

export default {
  components: {
    Parallax,
    NavbarLateral,
    BotonSubir
  }

}
</script>

<style>
.gobiernoPageContainer{
  background-color: white;
}
</style>

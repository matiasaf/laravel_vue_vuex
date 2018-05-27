<template>
<div class="micontainer">

  <Navbar />


    <router-view></router-view>

    <vue-snotify></vue-snotify>

</div>
</template>
<script>

import Navbar from '../components/Navbar'

export default {

  components: {
    Navbar
  }

}
</script>
<style >
  .micontainer{
    /*background-color: #cecece;*/
  }
</style>

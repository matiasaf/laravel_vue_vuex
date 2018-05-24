<template>
  
<div class="flyers">
  <div class="card bg-dark text-white">
    <img class="card-img" v-bind:src="src_img" alt="Card image">
  </div>
</div>

</template>

<script>
export default {

  props: ['src_img'],

}
</script>

<style lang="css">
.flyers{

  margin:5%;
  -webkit-box-shadow: -1px 6px 18px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 6px 18px -7px rgba(0,0,0,0.75);
  box-shadow: -1px 6px 18px -7px rgba(0,0,0,0.75);

}
</style>

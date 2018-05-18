<template>
<div>

  <div class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h4 class="text-white">
          <router-link :to="{ name: 'posts' }">Posts</router-link>
          <router-link :to="{ name: 'hello' }">Hello World</router-link>
        </h4>

      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </nav>
  </div>

  <div class="flex-center position-ref full-height">

    <router-view></router-view>

    <vue-snotify></vue-snotify>

  </div>
</div>
</template>
<script>
export default {}
</script>

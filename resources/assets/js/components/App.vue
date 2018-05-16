<template>

  <div>

    <h1>Listado de posts</h1>

    <AddPost />

    <PostList />

  </div>

</template>

<script>

import AddPost from './AddPost.vue';
import PostList from './PostList.vue';

export default {

  components: { AddPost, PostList}

}

</script>

<template>
<div>

  <AddPost />
  <PostList />

</div>
</template>

<script>

import AddPost from '../components/AddPost.vue';
import PostList from '../components/PostList.vue';

export default {

  components: {
    AddPost,
    PostList
  }

}
</script>

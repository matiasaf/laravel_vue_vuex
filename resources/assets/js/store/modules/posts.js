import api from '../../api'


// initial state
const state = {
  all: [],
}

// getters
const getters = {
  allPosts: state => state.all,
  countPosts: state => state.all.length
}

// actions
const actions = {
  getAllPosts({commit}) {
    api.getPosts().then(posts => commit('setPosts', posts))
  },
  addPost({
    commit
  }, post) {
    api.addPost(post).then(_post => commit('postAdded', _post))
  },
  deletePost({
    commit
  }, id) {
    api.deletePost(id).then(post => commit('postDeleted', post.id))
  },

  updatePost({
    commit
  }, post) {
    api.updatePost(post).then(post => commit('postEdited', post))
  }
}

// mutations
const mutations = {
  setPosts(state, posts) {
    state.all = posts
  },
  postAdded(state, post) {
    state.all = [
      ...state.all,
      post
    ]
  },
  postDeleted(state, id) {
    state.all = state.all.filter(post => post.id !== id)
  },

  postEdited(state, post) {

    state.all = state.all.map(item => {
      if (item.id === post.id)
        return post;
      else
        return item;
      }
    );
  }
}

export default {state, getters, actions, mutations}

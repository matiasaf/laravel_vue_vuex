import api from '../../api'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allPosts: state => state.all,
  allPostWithID1 : state => state.all.filter(post => post.id == 1)
}

// actions
const actions = {
  getAllPosts({commit}){

    api.getPosts().then( posts => commit('setPosts', posts) )

  },
  addPost({commit}, post){

    api.addPost(post).then( _post => commit('postAdded', _post))

  }
}

// mutations
const mutations = {
  setPosts(state, posts) {
    state.all = posts
  },
  postAdded(state,post){
    state.all = [...state.all, post]
  }
}

export default {state, getters, actions, mutations}

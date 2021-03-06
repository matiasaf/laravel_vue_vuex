import api from '../../api'


// initial state
const state = {
  all: [],
}

// getters
const getters = {
  allNoticias: state => state.all
}

// actions
const actions = {
  getAllNoticias({commit}) {
    api.getNoticias().then(noticias => commit('setNoticias', noticias))
  },
  addNoticia({
    commit
  }, noticia) {
    api.addNoticia(noticia).then(_noticia => commit('noticiaAdded', _noticia))
  },
  deleteNoticia({
    commit
  }, id) {
    api.deleteNoticia(id).then(post => commit('noticiaDeleted', post.id))
  },

  updateNoticia({
    commit
  }, noticia) {
    api.updateNoticia(noticia).then(noticia => commit('noticiaEdited', noticia))
  }
}

// mutations
const mutations = {
  setNoticias(state, noticias) {
    state.all = noticias
  },
  noticiaAdded(state, noticia) {
    state.all = [
      ...state.all,
      noticia
    ]
  },
  noticiaDeleted(state, id) {
    state.all = state.all.filter(noticia => noticia.id !== id)
  },

  noticiaEdited(state, noticia) {

    state.all = state.all.map(item => {
      if (item.id === noticia.id)
        return noticia;
      else
        return item;
      }
    );
  }
}

export default {state, getters, actions, mutations}

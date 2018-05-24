export default {

  getNoticias () {
    return axios.get('/api/noticias').then(res => res.data)
  },
  addNoticia (noticia) {
    return axios.post('/api/noticias', noticia).then(res => res.data)
  },
  deleteNoticia(id){
    return axios.delete(`/api/noticias/${id}`).then(res => res.data)
  },
  updateNoticia(noticia){
    return axios.put(`/api/noticias/${noticia.id}`, noticia ).then(res => res.data)
  },

}

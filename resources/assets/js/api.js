export default {

  getPosts () {
    return axios.get('/api/posts').then(res => res.data)
  },
  addPost (post) {
    return axios.post('/api/posts', {
      name: post.name
    }).then(res => res.data)
  },
  deletePost(id){
    return axios.delete(`/api/posts/${id}`).then(res => res.data)
  },
  updatePost(post){
    return axios.put(`/api/posts/${post.id}`, post ).then(res => res.data)
  },


}

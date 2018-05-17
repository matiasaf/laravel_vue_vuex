export default {

  getPosts () {
    return axios.get('/api/posts').then(res => res.data)
  },
  addPost (post) {
    return axios.post('/api/post', {
      name: post.name
    }).then(res => res.data)
  }

}

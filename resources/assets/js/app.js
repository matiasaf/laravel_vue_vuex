
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


// window.Vue = require('vue');
//
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
// Vue.component('main-app', require('./components/App.vue'));
//


import Vue from 'vue'
import VueRouter from 'vue-router'

import Snotify from 'vue-snotify';
// You also need to import the styles. If you're using webpack's css-loader, you can do so here:
import 'vue-snotify/styles/dark.css'; // or dark.css or simple.css

import store from './store'


Vue.use(VueRouter)

Vue.use(Snotify);


import App from './views/App'
import PostsPage from './views/PostsPage'
import PostList from './components/PostList'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'posts',
            component: PostsPage
        },
        {
            path: '/hello',
            name: 'hello',
            component: PostList,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,

});

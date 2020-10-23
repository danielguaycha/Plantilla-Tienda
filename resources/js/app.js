require('./bootstrap');
window.Vue = require('vue');

import App from './pages/App';
import Router from './plugins/routes'
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router: Router
});

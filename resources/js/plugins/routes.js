import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () =>
            import ('../components/services/ListServices'),
    },
    {
        path: '/:slug',
        name: 'service',
        component: () => import('./../components/services/ShowService')
    }

]

const router = new VueRouter({
    routes
})


export default router

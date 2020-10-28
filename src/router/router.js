import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    mode: "hash",
    // mode: 'history',
    routes: [{
        path: '*',
        redirect: '/index/login'
    },{
        path: '/index/login',
        name: 'login',
        meta: {
            title: '登录',
            IsPath: false
        },
        component: () => import('@/view/index/login')
    },{
        path: '/index/register',
        name: 'register',
        meta: {
            title: '注册',
            IsPath: false
        },
        component: () => import('@/view/index/register')
    },{
        path: '/index/forget',
        name: 'forget',
        meta: {
            title: '忘记密码',
            IsPath: false
        },
        component: () => import('@/view/index/forget')
    },{
        path: '/index/home',
        name: 'home',
        redirect: '/index/home/homeindex',
        meta: {
            title: '底部导航',
            IsPath: false
        },
        component: () => import('@/view/index/home'),
        children:[
            {
                path: '/index/home/homeindex',
                name: 'homeindex',
                meta: {
                    title: '主页',
                    IsPath: false
                },
                component: () => import('@/view/home/homeindex')
            },
            {
                path: '/index/home/shopCart',
                name: 'shopCart',
                meta: {
                    title: '购物车',
                    IsPath: false
                },
                component: () => import('@/view/home/shopCart')
            },
            {
                path: '/index/home/my',
                name: 'my',
                meta: {
                    title: '我的',
                    IsPath: false
                },
                component: () => import('@/view/home/my')
            }
        ]
    }]
})
// router.beforeEach((to, from, next) => {
//     next()
// })
export default router;
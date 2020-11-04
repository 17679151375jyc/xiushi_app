import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    mode: "hash",
    // mode: 'history',
    routes: [{
        path: '*',
        redirect: '/index/login'
    }, {
        path: '/index/login',
        name: 'login',
        meta: {
            title: '登录',
            IsPath: false
        },
        component: () => import('@/view/index/login')
    }, {
        path: '/index/register',
        name: 'register',
        meta: {
            title: '注册',
            IsPath: false
        },
        component: () => import('@/view/index/register')
    }, {
        path: '/index/forget',
        name: 'forget',
        meta: {
            title: '忘记密码',
            IsPath: false
        },
        component: () => import('@/view/index/forget')
    }, {
        path: '/index/home',
        name: 'home',
        redirect: '/index/home/homeindex',
        meta: {
            title: '底部导航',
            IsPath: false
        },
        component: () => import('@/view/index/home'),
        children: [
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
    }, {
        path: '/distribution/distribution',
        name: 'distribution',
        meta: {
            title: '外卖列表',
            IsPath: false
        },
        component: () => import('@/view/distribution/distribution')
    }, {
        path: '/reserve/reserve',
        name: 'reserve',
        meta: {
            title: '预订',
            IsPath: false
        },
        component: () => import('@/view/reserve/reserve')
    }, {
        path: '/purchasingAgent/purchasingAgent',
        name: 'purchasingAgent',
        meta: {
            title: '代购',
            IsPath: false
        },
        component: () => import('@/view/purchasingAgent/purchasingAgent'),
        children: [{
            path: '/purchasingAgent/purchasingList',
            name: 'purchasingList',
            meta: {
                title: '代购清单',
                IsPath: false
            },
            component: () => import('@/view/purchasingAgent/purchasingList'),
        }]
    }, {
        path: '/takeAtaxi/takeAtaxi',
        name: 'takeAtaxi',
        meta: {
            title: '找车',
            IsPath: false
        },
        component: () => import('@/view/takeAtaxi/takeAtaxi')
    }, {
        path: '/wechatMoments/wechatMoments',
        name: 'wechatMoments',
        meta: {
            title: '秀市圈',
            IsPath: false
        },
        component: () => import('@/view/wechatMoments/wechatMoments')
    }, {
        path: '/personalCenter/coupon',
        name: 'coupon',
        meta: {
            title: '优惠券',
            IsPath: false
        },
        component: () => import('@/view/personalCenter/coupon')
    }, {
        path: '/personalCenter/address',
        name: 'address',
        meta: {
            title: '收货地址',
            IsPath: false
        },
        component: () => import('@/view/personalCenter/address'),
        children: [{
            path: '/personalCenter/addressAdd',
            name: 'addressAdd',
            meta: {
                title: '编辑地址',
                IsPath: false
            },
            component: () => import('@/view/personalCenter/addressAdd'),
        }]
    }, {
        path: '/personalCenter/collection',
        name: 'collection',
        meta: {
            title: '我的收藏',
            IsPath: false
        },
        component: () => import('@/view/personalCenter/collection')
    }, {
        path: '/personalCenter/rule',
        name: 'rule',
        meta: {
            title: '平台规则',
            IsPath: false
        },
        component: () => import('@/view/personalCenter/rule')
    }, {
        path: '/personalCenter/history',
        name: 'history',
        meta: {
            title: '浏览历史',
            IsPath: false
        },
        component: () => import('@/view/personalCenter/history')
    }, {
        path: '/personalCenter/aboutUs',
        name: 'aboutUs',
        meta: {
            title: '关于我们',
            IsPath: false
        },
        component: () => import('@/view/personalCenter/aboutUs')
    }, {
        path: '/personalCenter/setUp',
        name: 'setUp',
        meta: {
            title: '设置',
            IsPath: false
        },
        component: () => import('@/view/personalCenter/setUp')
    }, {
        path: '/order/order',
        name: 'order',
        meta: {
            title: '订单列表',
            IsPath: false
        },
        component: () => import('@/view/order/order')
    }, {
        path: '/order/orderDetail',
        name: 'orderDetail',
        meta: {
            title: '订单详情',
            IsPath: false
        },
        component: () => import('@/view/order/orderDetail')
    }, {
        path: '/order/orderDetail',
        name: 'orderDetail',
        meta: {
            title: '商品详情',
            IsPath: false
        },
        component: () => import('@/view/order/orderDetail')
    }, {
        path: '/order/commodityDetail',
        name: 'commodityDetail',
        meta: {
            title: '商品详情',
            IsPath: false
        },
        component: () => import('@/view/order/commodityDetail')
    }, {
        path: '/order/shopDeteil',
        name: 'shopDeteil',
        meta: {
            title: '店铺主页',
            IsPath: false
        },
        component: () => import('@/view/order/shopDeteil')
    }, {
        path: '/personalData/personalData',
        name: 'personalData',
        meta: {
            title: '我的资料',
            IsPath: false
        },
        component: () => import('@/view/personalData/personalData')
    }]
})
// router.beforeEach((to, from, next) => {
//     next()
// })
export default router;
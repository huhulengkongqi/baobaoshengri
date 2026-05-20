import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue'; // 首页
import Page1 from '@/views/Page1.vue';      // 页面 1
import Page2 from '@/views/Page2.vue';      // 页面 2
import Page3 from '@/views/Page3.vue';      // 页面 3
import Page4 from '@/views/Page4.vue';      // 520解密游戏
import Page5 from '@/views/Page5.vue';      // 520秘密信件

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/page1',
            name: 'Page1',
            component: Page1,
        },
        {
            path: '/page2',
            name: 'Page2',
            component: Page2,
        },
        {
            path: '/page3',
            name: 'Page3',
            component: Page3,
        },
        {
            path: '/page4',
            name: 'Page4',
            component: Page4,
        },
        {
            path: '/page5',
            name: 'Page5',
            component: Page5,
        },
    ],
});

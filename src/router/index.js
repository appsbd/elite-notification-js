import {createRouter, createWebHashHistory} from 'vue-router';
import dashboard from "@/modules/dashboard/dashboard";
import SettingModule from '../modules/settings/SettingModule';
import AllSource from "@/modules/source/AllSource";
import AllVideos from "@/modules/video/AllVideos";
import AllNotification from "@/modules/notification/AllNotification";




const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: dashboard,
    },
    {
        path: '/setting',
        name: 'setting',
        component: SettingModule,
    } ,
    {
        path: '/source',
        name: 'source',
        component: AllSource,
    },
    {
        path: '/video',
        name: 'video',
        component: AllVideos,
    },
    {
        path: '/dummy_notification',
        name: 'notification',
        component: AllNotification,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "apbd-active",
    linkExactActiveClass: "apbd-exact-active",
})

export default router

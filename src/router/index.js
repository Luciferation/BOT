import VueRouter from "vue-router";

export default new VueRouter({
    routes:[
        {
        path: '/',
        component: () => import("@/pages/homepage.vue")
        }
    ]

})
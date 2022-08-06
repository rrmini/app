import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/Pages/Home.vue";
import Login from "@/Pages/Auth/Login.vue";
import Register from "@/Pages/Auth/Register.vue";
import Dashboard from "@/Pages/Admin/Dashboard.vue";
// import UserEdit from "../views/layouts/UserEdit";
// import Permissions from "../views/layouts/Permissions";
// import EditPermissions from "../views/layouts/EditPermissions";
// import Management from "../views/layouts/Management";
// import ManagementEdit from "../views/layouts/ManagementEdit";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/user/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/user/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/user/dashboard',
        name: 'Dashboard',
        component: Dashboard

    },
    // {
    //     path: '/user/permissions',
    //     name: 'Permissions',
    //     component: Permissions
    //
    // },
    // {
    //     path: '/user/management',
    //     name: 'Management',
    //     component: Management
    //
    // },
    // {
    //     path: '/management/:id',
    //     name: 'ManagementEdit',
    //     component: ManagementEdit
    //
    // },
    // {
    //     path: '/user/:id',
    //     name: 'UserEdit',
    //     component: UserEdit
    //
    // },
    // {
    //     path: '/permissions/:id',
    //     name: 'EditPermissions',
    //     component: EditPermissions
    //
    // },

]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x-token')

    if(!token) {
        if (to.name === 'Login' || to.name === 'Registration') {
            return next()
        } else {
            return next ({
                name: 'Login'
            })
        }
    }
    if (to.name === 'Login' || to.name === 'Registration' && token) {
        return next({
            name: 'Home'
        })
    }
    next()
})

export default router

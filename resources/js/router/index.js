import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/Pages/Home.vue";
import Login from "@/Pages/Auth/Login.vue";
import Register from "@/Pages/Auth/Register.vue";
import ForgotPassword from "@/Pages/Auth/ForgotPassword.vue";
import Dashboard from "@/Pages/Admin/Dashboard.vue";
import UserEdit from "@/layouts/UserEdit.vue";
import Permissions from "@/Layouts/Permissions.vue";
import EditPermissions from "@/Layouts/EditPermissions.vue";
import Roles from "@/layouts/Roles.vue";
import RoleEdit from "@/layouts/RoleEdit.vue";
import Users from "@/Layouts/Users.vue";
import UserProfile from "@/Layouts/UserProfile.vue";
import ResetPassword from "@/Pages/Auth/ResetPassword.vue";

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
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword,
    },
    {   path: '/reset-password/:token',
        name: 'ResetPassword',
        component: ResetPassword,
    },
    {
        path: '/user/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        children: [
            {
                path: 'users',
                component: Users,
                name: 'UsersList'
            },
            {
                path: 'userprofile',
                name: 'UserProfile',
                component: UserProfile

            },
            {
                path: '/user/:id',
                name: 'UserEdit',
                component: UserEdit

            },
            {
                path: 'roles',
                name: 'Roles',
                component: Roles
            },
            {
                path: '/role/:id',
                name: 'RoleEdit',
                component: RoleEdit

            },
            {
                path: 'permissions',
                name: 'Permissions',
                component: Permissions
            },
            {
                path: '/permissions/:id',
                name: 'EditPermissions',
                component: EditPermissions

            },
        ],
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x-token')

    if(!token) {
        if (to.name === 'Login' || to.name === 'Register' || to.name === 'ForgotPassword' || to.name === 'ResetPassword') {
            return next()
        } else {
            return next ({
                name: 'Login'
            })
        }
    }
    if (to.name === 'Login' || to.name === 'Register' && token) {
        return next({
            name: 'Home'
        })
    }
    next()
})

export default router

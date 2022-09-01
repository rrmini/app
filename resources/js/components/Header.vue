<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
<!--                <a class="navbar-brand" href="#">Hidden brand</a>-->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link v-if="!token" :to="'/user/login'" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="!token" :to="'/user/register'" class="nav-link">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  :to="'/user/dashboard'" class="nav-link">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" v-if="token" @click.prevent="logout" class="nav-link">logout</a>
                    </li>
                </ul>
<!--                <form class="d-flex" role="search">-->
<!--                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">-->
<!--                    <button class="btn btn-outline-success" type="submit">Search</button>-->
<!--                </form>-->
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            token: null,
        }
    },
    mounted() {
        this.getToken()
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout', this.user)
        },
        getToken() {
            this.token = localStorage.getItem('x-token')
        },
    },
}
</script>

<style scoped>

</style>

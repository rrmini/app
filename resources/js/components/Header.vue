<template>
    <div>
        <div class="container-fluid fixed-top p-4">
            <div class="col-12">
                <div  class="d-flex justify-content-end">
                    <div>
                        <router-link v-if="!token" :to="'/user/login'" class="text-muted">Login</router-link>
                        <router-link v-if="!token" :to="'/user/register'" class="ms-4 text-muted">Register</router-link>
                        <router-link  :to="'/user/dashboard'" class="ms-4 text-muted">Dashboard</router-link>
                        <a href="#" v-if="token" @click.prevent="logout" class="ms-4 text-muted">logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
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

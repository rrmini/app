<template>
    <div>
        <div class="container-fluid fixed-top p-4">
            <div class="col-12">
                <div  class="d-flex justify-content-end">
                    <div>
<!--                        <a  class="text-muted">-->
<!--                            Dashboard-->
<!--                        </a>-->

<!--                        <template >-->
                        <router-link :to="'/user/login'" class="text-muted">Login</router-link>
                        <router-link :to="'/user/register'" class="ms-4 text-muted">Register</router-link>
                        <a href="#" @click.prevent="logout" class="ms-4 text-muted">logout</a>

<!--                        </template>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "../../axios/axios-instance";
export default {
    name: "Home",
    mounted() {
        this.getData()
    },
    methods: {
        getData(){
            axios.get('api/get')
            .then(response => {
                console.log(response)
            })
        },
        logout() {
            this.$store.dispatch('auth/logout', this.user)
        },
    },

}
</script>


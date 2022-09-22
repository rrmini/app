<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <p><b>Admin</b>LTE</p>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
                    <div class="alert alert-danger" role="alert"  v-if="invalidCredentials" >
                        {{ invalidCredentials }}
                    </div>
                    <validation-errors v-if="validationErrors" :errors="validationErrors"/>
                    <form @submit.prevent="submit">
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email" v-model="user.email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block"
                                    @click.prevent="sendForgotPassword">Send email</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <p class="mt-3 mb-1">
                        <router-link v-if="!token" :to="'/user/login'" class="nav-link">Login</router-link>
                    </p>
                    <p class="mb-0">
                        <router-link v-if="!token" :to="'/user/register'" class="nav-link">Register a new membership</router-link>
<!--                        <a href="register.html" class="text-center">Register a new membership</a>-->
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
        <!-- /.login-box -->
    </div>
</template>

<script>
import {defineComponent} from "vue";
import ValidationErrors from "@/Ui/ValidationErrors.vue";
import { mapGetters, mapActions} from 'vuex'
export default {
    name: "ForgotPassword",
    components: {
        ValidationErrors,
    },
    data: () => ({
        user: {
            email: '',
        },
    }),
    computed: {
        ...mapGetters({
            invalidCredentials: 'auth/invalidCredentials',
            validationErrors: "auth/errors"
        })
    },
    methods: {
        ...mapActions({
            forgotPassword: 'auth/forgotPassword',
        }),
        sendForgotPassword() {
            this.$store.dispatch('auth/forgotPassword', this.user)
        },
    },
}
</script>

<style scoped>

</style>

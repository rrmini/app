<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <p><b>Admin</b>LTE</p>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
<!--                    <p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>-->
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

                        <div class="input-group mb-3">
                            <input
                                class="form-control"
                                type="password"
                                placeholder="Password"
                                v-model="user.password" />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>

                        <div class="input-group mb-3">
                            <input
                                class="form-control"
                                type="password"
                                placeholder="Retype password"
                                v-model="user.password_confirmation" />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block"
                                    @click.prevent="sendResetPassword">Reset password</button>
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
import { mapGetters, mapActions } from 'vuex';
import ValidationErrors from "@/Ui/ValidationErrors.vue";

export default {
    name: "ResetPassword",
    components: {
        ValidationErrors,
    },
    data: () => ({
        user: {
            email: "",
            password: "",
            password_confirmation: ""
        }
    }),
    computed: {
        ...mapGetters({
            invalidCredentials: 'auth/invalidCredentials',
            validationErrors: 'auth/errors',
        })
    },
    methods: {
        ...mapActions({
            checkUserState: 'auth/setLoggedInstate',
            resetPassword: 'auth/resetPassword',
        }),
        sendResetPassword() {
            const token = this.$route.params.token;
            this.resetPassword({...this.user, token})
            window.location.replace('/login')
        }
    },
}
</script>

<style scoped>

</style>

<template>
    <authentication-card>
        <h3>Registration</h3>
        <div class="card-body">
            <!--            <jet-validation-errors class="mb-3" />-->
            <!--            <div v-if="status" class="alert alert-success mb-3 rounded-0" role="alert">-->
            <!--                {{ status }}-->
            <!--            </div>-->

            <form @submit.prevent="submit">
                <div class="mb-3">
                    <my-label for="name" value="Name" />
                    <my-input id="name" type="text" v-model="user.name" required autofocus />
                </div>

                <div class="mb-3">
                    <my-label for="email" value="Email" />
                    <my-input id="email" type="email" v-model="user.email" required autofocus />
                </div>

                <div class="mb-3">
                    <my-label for="password" value="Password" />
                    <my-input id="password" type="password" v-model="user.password" required autocomplete="current-password" />
                </div>

                <div class="mb-3">
                    <my-label for="password" value="Password confirmation" />
                    <my-input id="password_confirm" type="password" v-model="user.password_confirmation" required autocomplete="current-password" />
                </div>

                <!--                <div class="mb-3">-->
                <!--                    <div class="custom-control custom-checkbox">-->
                <!--                        <my-checkbox id="remember_me" name="remember" v-model:checked="user.remember" />-->

                <!--                        <label class="custom-control-label" for="remember_me">-->
                <!--                            Remember Me-->
                <!--                        </label>-->
                <!--                    </div>-->
                <!--                </div>-->

                <div class="mb-0">
                    <div class="d-flex justify-content-between align-items-baseline">
                        <!--                  v-if="canResetPassword"      :href="route('password.request')"-->
                        <router-link to="/user/login" class="text-muted me-3">
                            <a href="">Already registered ?</a>
                        </router-link>

                        <my-button class="ms-4 text-white-50" @click.prevent="register" >
                            <!--                            <div class="spinner-border spinner-border-sm" role="status">-->
                            <!--                                <span class="visually-hidden">Loading...</span>-->
                            <!--                            </div>-->
                            Registration
                        </my-button>
                    </div>
                </div>
            </form>
        </div>
    </authentication-card>
</template>

<script>
import {defineComponent} from "vue";
import AuthenticationCard from '@/Layouts/AuthenticationCard.vue'
import MyButton from '@/Ui/My-Button.vue'
import MyCheckbox from '@/Ui/Checkbox.vue'
import MyInput from '@/Ui/Input.vue'
import MyLabel from '@/Ui/Label.vue'
export default defineComponent ({
    name: "Register",
    components: {
        AuthenticationCard,
        MyButton,
        MyCheckbox,
        MyInput,
        MyLabel,
    },
    data() {
        return {
            user: {
                name: '',
                email : '' ,
                password: '',
                password_confirmation: '',
            }
        }
    },
    methods: {
        register () {
            this.$store.dispatch('auth/registerUser', this.user)
        },
    },
})
</script>

<style scoped>

</style>

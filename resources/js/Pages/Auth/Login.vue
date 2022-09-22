<template>
    <authentication-card>
        <h3>Login</h3>
        <div class="card-body">
            <validation-errors v-if="validationErrors" :errors="validationErrors"/>
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <my-label for="email" value="Email" />
                    <my-input id="email" type="email" v-model="user.email" required autofocus />
                </div>

                <div class="mb-3">
                    <my-label for="password" value="Password" />
                    <my-input id="password" type="password" v-model="user.password" required autocomplete="current-password" />
                </div>

                <div class="mb-0">
                    <div class="d-flex justify-content-between align-items-baseline flex-column">
<!--                  v-if="canResetPassword"      :href="route('password.request')"-->
                        <router-link :to="'/user/register'" class="text-muted me-3">
                            Not registered ?
                        </router-link>

                        <router-link :to="'/forgot-password'" class="text-muted me-3">
                            Forgot your password?
                        </router-link>

                        <my-button class="ms-4 text-white-50" @click.prevent="login" >
                            Log in
                        </my-button>
                    </div>
                </div>
            </form>
        </div>
    </authentication-card>
</template>

<script>
import {defineComponent} from "vue";
import { mapGetters } from 'vuex';

import AuthenticationCard from '@/Layouts/AuthenticationCard.vue'
import MyButton from '@/Ui/My-Button.vue'
import MyCheckbox from '@/Ui/Checkbox.vue'
import MyInput from '@/Ui/Input.vue'
import MyLabel from '@/Ui/Label.vue'
import ValidationErrors from "@/Ui/ValidationErrors.vue";
export default defineComponent ({
    name: 'Login',
    components: {
        AuthenticationCard,
        MyButton,
        MyCheckbox,
        MyInput,
        MyLabel,
        ValidationErrors,
    },
    data() {
        return {
            user: {
                email : '' ,
                password: '',
            }
        }
    },
    computed: {
        ...mapGetters({
            validationErrors: "auth/errors"
        })
    },
    methods: {
        login() {
            this.$store.dispatch('auth/loginUser', this.user)
        },
    },
})
</script>


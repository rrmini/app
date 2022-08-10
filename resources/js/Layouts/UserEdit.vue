<template>
    <div class="container">
        <form>
            <h1>Edit User</h1>
            <div class="mb-3">
                <Input type="text" placeholder="username"  v-model="user.name" />
            </div>
            <div class="mb-3">
                <Input type="text" placeholder="email address" v-model="user.email" />
            </div>
            <!--        <div class="mb-3">-->
            <!--             v-model="user.password"-->
            <!--            <Input type="password" placeholder="password" />-->
            <!--        </div>-->
            <!--        <div class="mb-3">-->
            <!--            v-model="user.password_confirmation"-->
            <!--            <Input type="password" placeholder="password confirmation" />-->
            <!--        </div>-->
        </form>
        <div class="mb-3">
            <Button @click="updateUsers">Update</Button>
        </div>
    </div>
</template>

<script>
import axios from "../../axios/axios-instance.js"
import Button from "@/Ui/Button.vue";
import Input from "@/Ui/Input.vue";
export default {
    name: "UserEdit",
    data() {
        return {
            user: {
                name: "",
                email: "",
            }
        }
    },
    components: {
        Button,
        Input,
    },
    methods: {
        updateUsers() {
            axios.put("/api/users/" + this.$route.params.id, {
                name: this.user.name,
                email: this.user.email,
            })
            .then(res => {
                this.$router.push({name: 'Dashboard'})
            })
        },
    },
}
</script>

<style scoped>

</style>

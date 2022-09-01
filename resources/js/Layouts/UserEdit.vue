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
            <div class="mb-3">
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="user.role.name">
                    <option disabled value="">Choose role</option>
                    <option v-for="role in getRoles" :key="role.id">
                        {{ role.name }}
                    </option>
                </select>

            </div>
        </form>
        <div class="mb-3">
            <Button @click="updateUsers">Update</Button>
        </div>
    </div>
</template>

<script>
import axios from "../../axios/axios-instance.js"
import Button from "@/Ui/My-Button.vue";
import Input from "@/Ui/Input.vue";
export default {
    name: "UserEdit",
    data() {
        return {
            user: {
                name: "",
                email: "",
                role: {
                    name
                }
            }
        }
    },
    components: {
        Button,
        Input,
    },
    created() {
        this.$store.dispatch('users/getRoles')
        this.getUser()
    },
    methods: {
        updateUsers() {
            axios.put("/api/users/" + this.$route.params.id, {
                name: this.user.name,
                email: this.user.email,
                role: this.user.role.name,
            })
            .then(res => {
                this.$router.push({name: 'UsersList'})
            })
        },
        getUser() {
            axios.get('/api/users/' + this.$route.params.id)
                .then( response => {
                    this.user.name = response.data.user.name
                    this.user.email = response.data.user.email
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
    computed: {
        getRoles: {
            get() {
                return this.$store.state.users.roleList
            }
        }
    },
}
</script>

<style scoped>

</style>

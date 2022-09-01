<template>
    <div class="container">
        <form>
            <h1>Edit Permission</h1>
            <div class="mb-3">
                <Input type="text" placeholder="permission"  v-model="permission.name" />
            </div>
        </form>
        <div class="mb-3">
            <Button @click="updatePermissions">Update</Button>
        </div>
    </div>
</template>

<script>
import axios from "../../axios/axios-instance.js"
import Button from "@/Ui/My-Button.vue";
import Input from "@/Ui/Input.vue";
export default {
    name: "EditPermissions",
    data() {
        return {
            permission: {
                name: "",
            }
        }
    },
    components: {
        Button,
        Input,
    },
    created() {
        this.getPermission()
        this.$store.dispatch('users/getRoles')
        // this.$store.dispatch('users/getPermissions')
    },
    methods: {
        updatePermissions() {
            axios.put("/api/permissions/" + this.$route.params.id, {
                name: this.permission.name,
            })
                .then(res => {
                    this.$router.push({name: 'Permissions'})
                })
        },
        getPermission() {
            axios.get("/api/permissions/" + this.$route.params.id)
            .then( response => {
                this.permission.name = response.data.permission.name
            })
            .catch(error => {
                console.log(error)
            })
        },
    },
}
</script>

<style scoped>

</style>

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
import Button from "@/Ui/Button.vue";
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
        this.$store.dispatch('users/getRoles')
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
    },
}
</script>

<style scoped>

</style>

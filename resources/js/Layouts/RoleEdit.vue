<template>
    <div class="container">
        <form>
            <h3>Edit Role</h3>
            <div class="mb-3">
                <Input type="text" placeholder="role name"  v-model="role.name" />
            </div>
        </form>
        <div class="mb-3">
            <Button @click="updateRole">Update</Button>
        </div>
    </div>
</template>

<script>
import axios from "../../axios/axios-instance.js"
import Button from "@/Ui/My-Button.vue";
import Input from "@/Ui/Input.vue";
export default {
    name: "RoleEdit",
    data () {
        return {
            role: {
                name: '',
            }
        }
    },
    components: {
        Button,
        Input,
    },
    created() {
        this.getRole()
    },
    methods: {
        updateRole() {
            axios.put("/api/roles/" + this.$route.params.id, {
                name: this.role.name,
            })
                .then(res => {
                    this.$router.push({name: 'Roles'})
                })
        },
        getRole() {
            axios.get("/api/roles/" + this.$route.params.id)
            .then( response => {
                this.role.name = response.data.role.name
            })
            .catch(error => {
                console.log(error)
            })
        },
    },
}
</script>


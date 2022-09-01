<template>
    <Modal v-if="isPopupVisible" :style="{ display, opacity }" @close="closePopup">
        <template #header>Add Role</template>
        <form>
            <div class="mb-3">
                <Input type="text" placeholder="add Role" v-model="role.name" />
            </div>
        </form>
        <div class="modal-footer">
            <button @click="addRoles" type="button" class="btn btn-info" data-bs-dismiss="modal">Add</button>
            <button type="button" class="btn btn-info">Close</button>
        </div>
    </Modal>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <!-- card-header -->
                <div class="card-header">
                    <h3 class="card-title">Role List</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                    <table class="table table-head-fixed text-nowrap">
                        <thead>
                        <tr>
                            <th>Role</th>
                            <th>Action 1</th>
                            <th>Action 2</th>
                            <th>
                                <button class="btn btn-info" @click="popup">Add</button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="role in getRoles" :key="role.id" >

                            <td v-if="role.name" >{{ role.name }}</td>
                            <td v-else>N/A</td>
                            <td>
                                <router-link
                                    :to="{ name: 'RoleEdit', params: { id: role.id }}">
                                    <button class="btn btn-info"><i class="fa-solid fa-pen"></i></button>
                                </router-link>
                            </td>
                            <td>
                                <button class="btn btn-danger" @click="deleteRoles(role.id)"><i class="fa-solid fa-trash"></i></button>
                            </td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "../../axios/axios-instance";
import Button from "@/Ui/My-Button.vue";
import Input from "@/Ui/Input.vue";
import Modal from "@/Ui/Modal.vue";
export default {
    name: "Roles",
    components: {
        Button,
        Input,
        Modal,
    },
    data() {
        return {
            isPopupVisible: false,
            block: 'none',
            opacity: 0,
            role: {
                name: '',
            }
        }
    },
    created() {
        this.$store.dispatch('users/getRoles')
    },
    methods: {
        popup() {
            this.isPopupVisible = true
            this.display = 'block'
            this.opacity = 1
        },
        closePopup() {
            this.isPopupVisible = false
        },
        addRoles() {
            this.$store.dispatch('users/addRole', this.role)
        },
        deleteRoles(id) {
            axios.delete('/api/roles/' + id).then(res =>{
                this.$store.dispatch('users/getRoles')
            })
        },
    },
    computed: {
        getRoles: {
            get() {
                return this.$store.state.users.roleList
            }
        },
    },
}
</script>

<style scoped>

</style>

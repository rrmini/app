<template>
    <Modal v-if="isPopupVisible" :style="{ display, opacity }" @close="closePopup">
        <template #header>Add Permission</template>
        <form>
            <div class="mb-3">
                <Input type="text" placeholder="add Permission" v-model="permission.name" id="user_name"/>
            </div>
        </form>
        <div class="modal-footer">
            <button @click="addPermission" type="button" class="btn btn-info" data-bs-dismiss="modal">Add</button>
            <button type="button" class="btn btn-info">Update</button>
        </div>
    </Modal>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <!-- card-header -->
                <div class="card-header">
                    <h3 class="card-title">Permissions list</h3>
                    <div class="card-tools">
                        <div class="input-group input-group-sm">
                            <input type="text" name="user_search" class="form-controlfloat-right" placeholder="Search">
                            <div class="input-group-append">
                                <button type="submit" class="btn btn-default">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                    <table class="table table-head-fixed text-nowrap">
                        <thead>
                        <tr>
                            <th>Permission</th>
                            <th>Action 1</th>
                            <th>Action 2</th>
                            <th>
                                <button class="btn btn-info" @click="popup">Add</button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="permission in getPermissions" :key="permission.id" >

                            <td v-if="permission.name" >{{ permission.name }}</td>
                            <td v-else>N/A</td>
                            <td>
                                <router-link
                                    :to="{ name: 'EditPermissions', params: { id: permission.id }}">
                                    <button class="btn btn-info"><i class="fa-solid fa-pen"></i></button>
                                </router-link>
                            </td>
                            <td>
                                <button class="btn btn-danger" @click="deletePermission(permission.id)"><i class="fa-solid fa-trash"></i></button>
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
import Button from "@/Ui/Button.vue";
import Input from "@/Ui/Input.vue";
import Modal from "@/Ui/Modal.vue";
export default {
    name: "Permissions",
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
            permission: {
                name: '',
            }
        }
    },
    created() {
        this.$store.dispatch('users/getPermissions')
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
        addPermission() {
            this.$store.dispatch('users/addPermission', this.permission)
        },
        deletePermission(id) {
            axios.delete('/api/permissions/' + id).then(res =>{
                this.$store.dispatch('users/getPermissions')
            })
        },
    },
    computed: {
        getPermissions: {
            get() {
                return this.$store.state.users.permissionsList
            }
        },
    },
}
</script>

<style scoped>

</style>

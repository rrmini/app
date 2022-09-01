<template>
    <Modal v-if="isPopupVisible" :style="{ display, opacity }" @close="closePopup">
        <template #header>Add User</template>
        <form>
            <div class="mb-3">
                <Input type="text" placeholder="username" v-model="user.name" id="user_name"/>
            </div>
            <div class="mb-3">
                <Input type="text" placeholder="email address" v-model="user.email" />
            </div>
            <div class="mb-3">
                <Input type="password" placeholder="password" v-model="user.password" />
            </div>
            <div class="mb-3">
                <Input type="password" placeholder="password confirmation" v-model="user.password_confirmation" />
            </div>
<!--            <div class="mb-3">-->
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="user.role.name">
                    <option disabled value="">Choose role</option>
                    <option v-for="role in getRoles" :key="role.id">
                        {{ role.name }}
                    </option>
                </select>

<!--            </div>-->
        </form>
        <div class="modal-footer">
            <button @click="addUser" type="button" class="btn btn-info" data-bs-dismiss="modal">Add</button>
            <button type="button" class="btn btn-info">Update</button>
        </div>
    </Modal>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <!-- card-header -->
                <div class="card-header">
                    <h3 class="card-title">Users list</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                    <table class="table table-head-fixed text-nowrap">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>
                                    <button class="btn btn-info" @click="popup">Add</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in getUsers" :key="user.id" >
                                <td>{{ user.id }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td v-if="user.role" >{{ user.role.name }}</td>
                                <td v-else>N/A</td>
                                <td>
                                    <router-link
                                        :to="{ name: 'UserEdit', params: { id: user.id }}">
                                        <button class="btn btn-info"><i class="fa-solid fa-pen"></i></button>
                                    </router-link>
                                </td>
                                <td>
                                    <button class="btn btn-danger" @click="deleteUser(user.id)"><i class="fa-solid fa-trash"></i></button>
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
    name: "Users",
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
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                role: {
                    name: ''
                }
            }
        }
    },
    created() {
        this.$store.dispatch('users/getUsers')
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
        addUser() {
            this.$store.dispatch('users/addUser', this.user)
        },
        deleteUser(id) {
            axios.delete('/api/users/' + id).then(res =>{
                this.$store.dispatch('users/getUsers')
            })
        },
    },
    computed: {
        getUsers: {
            get() {
                return this.$store.state.users.userList
            }
        },
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

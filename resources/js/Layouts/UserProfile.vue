<template>
    <div class="row">
        <div class="col-md-3">

            <!-- Profile Image -->
            <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                    <div class="text-center">
                        <img class="profile-user-img img-fluid img-circle"
                             src=""
                             alt="User profile picture">
                    </div>

                    <h3 class="profile-username text-center">Nina Mcintire</h3>

                    <p class="text-muted text-center">Software Engineer</p>

                    <ul class="list-group list-group-unbordered mb-3">
                        <li class="list-group-item">
                            <b>Followers</b> <a class="float-right">1,322</a>
                        </li>
                        <li class="list-group-item">
                            <b>Following</b> <a class="float-right">543</a>
                        </li>
                        <li class="list-group-item">
                            <b>Friends</b> <a class="float-right">13,287</a>
                        </li>
                    </ul>

                    <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->

            <!-- About Me Box -->
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">About Me</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <strong><i class="fas fa-book mr-1"></i> Education</strong>

                    <p class="text-muted">
                        B.S. in Computer Science from the University of Tennessee at Knoxville
                    </p>

                    <hr>

                    <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

                    <p class="text-muted">Malibu, California</p>

                    <hr>

                    <strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>

                    <p class="text-muted">
                        <span class="tag tag-danger">UI Design</span>
                        <span class="tag tag-success">Coding</span>
                        <span class="tag tag-info">Javascript</span>
                        <span class="tag tag-warning">PHP</span>
                        <span class="tag tag-primary">Node.js</span>
                    </p>

                    <hr>

                    <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.col -->
        <div class="col-md-9">
            <div class="card">
                <div class="card-header p-2">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
                    </ul>
                </div><!-- /.card-header -->
                <div class="card-body">
                    <div class="tab-content">
                        <div class="active tab-pane" id="settings">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                                    <div class="col-sm-10">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="inputName"
                                            placeholder="Name"
                                            v-model="user.name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="inputEmail"
                                            placeholder="Email"
                                            v-model="user.email">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                        <button type="submit" class="btn btn-danger">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- /.tab-content -->
                </div><!-- /.card-body -->
            </div>
            <!-- /.card -->
<!--     change password card       -->
            <div class="card"><!-- card-header -->
                <div class="card-header p-2">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Change password</a></li>
                    </ul>
                </div><!-- /.card-header -->
                <div class="card-body">
                    <div class="tab-content">
                        <div class="active tab-pane" >
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="oldPassword" class="col-sm-2 col-form-label">Old password</label>
                                    <div class="col-sm-10">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="oldPassword"
                                            v-model="user.oldPassword"
                                            placeholder="Old password">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="newPassword" class="col-sm-2 col-form-label">New password</label>
                                    <div class="col-sm-10">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="newPassword"
                                            v-model="user.newPassword"
                                            placeholder="New password">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="newPassword_confirmation" class="col-sm-2 col-form-label">New password confirmation</label>
                                    <div class="col-sm-10">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="newPassword_confirmation"
                                            v-model="user.newPassword_confirmation"
                                            placeholder="New password confirmation">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                        <button type="submit" class="btn btn-danger">Change password</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
<!--     /.change password card        -->
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
</template>

<script>
import axios from "../../axios/axios-instance.js"
// import Button from "@/Ui/My-Button.vue";
// import Input from "@/Ui/Input.vue";

export default {
    name: "UserProfile",
    data:  () => ({
        user: {
            name: "",
            email: "",
            role: {
                name
            },
            oldPassword: "",
            newPassword: "",
            newPassword_confirmation: "",
        }
    }),
}
</script>

<style scoped>

</style>

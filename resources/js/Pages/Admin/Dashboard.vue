<template>
    <admin-layout>
<!--        <template #header>-->
<!--            <h1 class="m-0">Title</h1>-->
<!--        </template>-->

        <section class="content">
            <div class="container-fluid">
                <router-view></router-view>
<!--                <users/>-->

            </div><!--/. container-fluid -->
        </section>
    </admin-layout>
</template>
<script>
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Users from "@/Layouts/Users.vue";
export default {
    name: "Dashboard",
    components: {
        AdminLayout,
        Users,
    },
    mounted() {},
    methods: {},
}
</script>


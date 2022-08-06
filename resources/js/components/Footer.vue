<template>
    <footer class="main-footer">
        <strong>Copyright &copy; 2014-{{ currentDate.getFullYear() }} <a href="#">Admin panel</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
            <b>Version</b> 2.0
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            currentDate: new Date,
        }
    },
}
</script>

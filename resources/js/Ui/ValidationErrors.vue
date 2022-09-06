<template>
    <div>
        <div class="font-medium text-danger">
            Whoops! Something went wrong.
        </div>
        <ul class="mt-3 text-sm list-group">
            <li v-for="(value, index) in validationErrors" :key="index" class="list-group-item list-group-item-danger">
<!--                <span class="closebtn" cursor="pointer" onclick="this.parentElement.style.display='none';">&times;</span>-->
                {{ value }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ValidationErrors",
    props: ['errors'],
    computed: {
        validationErrors() {
            let errors = Object.values(this.errors)
            errors = errors.flat()
            return errors;
        },
    }
}
</script>

<style scoped>

</style>

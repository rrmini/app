<template>
    <div class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <slot name="header"></slot>
                    </h5>
                    <button type="button" class="btn btn-tool" data-bs-dismiss="modal" aria-label="Close" @click="close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    methods: {
        close() {
            this.$emit('close')
        }
    },
}
</script>

<style scoped>

</style>

<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <slot name="modalHeader"></slot>
            </div>
            <div class="modal-body">
                <slot name="modalBody"></slot>
            </div>
            <div class="modal-footer">
                <slot name="modalFooter"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.modal {

}
.modal-body {
    display: block;
}
</style>

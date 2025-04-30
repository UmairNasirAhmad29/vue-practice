<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal=true">Show Modal</button>
        <Modal v-if="showModal" @hideModal="showModal = false" title="This is a modal (via Prop)"></Modal>
    </div>
</template>

<script setup>

    import {ref} from 'vue'
    import Modal from '@/components/Modal.vue'
    
    const showModal = ref(false)

</script>


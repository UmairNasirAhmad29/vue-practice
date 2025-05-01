<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal=true">Show Modal</button>
        <!-- fetching data from child files using emits -->
        <!-- <Modal v-if="showModal" @hideModal="showModal = false" title="This is a modal (via Prop)"></Modal> -->

        <!-- same work that is done up, we will do now using v-model for passing model value and getting the model value from child file -->
        <!-- <Modal v-model="showModal" title="This is a modal (via Prop)"></Modal> -->

        <!-- showing models in light and dark form using dynamic components -->
         <div>
            <label for="">
                Show dark mode:
                <input type="checkbox" v-model="showDarkModel" name="" id="">
            </label>
         </div>
         <pre>{{ showDarkModel }}</pre>
        <component :is="showDarkModel ? ModalDark : Modal" v-model="showModal" title="This is a modal (via Prop)"></component>

    </div>
</template>

<script setup>

    import {ref} from 'vue'
    import Modal from '@/components/Modal.vue' // creating and calling child component to pass data in between parent and child component
    import ModalDark from '@/components/ModalDark.vue' 
    
    const showDarkModel = ref(false)
    const showModal = ref(false)

</script>


<template>
    <div v-if="modelValue" class="modal-dark">
        <h2>{{ title }}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci nostrum, beatae unde inventore ipsam earum eveniet error. Deleniti pariatur illum molestias error ab nam dolorum quas, incidunt unde tempore!</p>
        <!-- <button @click="$emit('hideModal')">Hide Modal</button> -->
        <!-- <button @click="handleButtonClick">Hide Modal</button> -->

        <!-- passing update:modelValue using emit directly from button rather than calling from script -->
        <button @click="$emit('update:modelValue', false)">Hide Modal</button>
    </div>
</template>

<script setup>

    const props = defineProps({

        //this is a built in modelValue prop, this will get value of v-model from parent file to child file so it can be used here
        modelValue: {
            type: Boolean,
            default: false
        },

        // this is a built in title prop
        title: {
            type: String,
            default: 'No props found'
        }
    })
    console.log(props.title);

    // calling update:modelValue and setting it to false using emits
    const emit = defineEmits(['update:modelValue'])

    // sending data to parent file using emit, emits are basically like events, from here the event is triggered and we can get it's value in parent file
    // const emit = defineEmits()
    const handleButtonClick = () => {

        console.log('in handleButtonClick function');
        emit('update:modelValue', false);
    }


    

</script>

<style>
    h2, p{
        color: white;
    }
    .modal-dark{
        background: grey;
        padding: 10px;
    }
</style>
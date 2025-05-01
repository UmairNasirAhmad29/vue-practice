<template>
    <div v-if="modelValue" class="modal">
        <h2>{{ title }}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci nostrum, beatae unde inventore ipsam earum eveniet error. Deleniti pariatur illum molestias error ab nam dolorum quas, incidunt unde tempore!</p>
        <!-- <button @click="$emit('hideModal')">Hide Modal</button> -->
        <!-- <button @click="handleButtonClick">Hide Modal</button> -->

        <!-- passing update:modelValue using emit directly from button rather than calling from script -->
        <button @click="$emit('update:modelValue', false)">Hide Modal</button>
        <div class="data-using-provide-inject">
            Name is: {{ userData.name }} and Username is @{{ userData.username }}
        </div>
    </div>
</template>

<script setup>

    import { inject } from 'vue';

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

    // fetching a reactive object and using that data from parent of parent component using inject derivative (import before use)
    const userData = inject('userData')

    

</script>

<style>
    h2, p, .data-using-provide-inject{
        color: black;
    }
    .modal{
        background: beige;
        padding: 10px;
    }
</style>
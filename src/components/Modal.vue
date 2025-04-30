<template>
    <div class="modal">
        <h2>{{ title }}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci nostrum, beatae unde inventore ipsam earum eveniet error. Deleniti pariatur illum molestias error ab nam dolorum quas, incidunt unde tempore!</p>
        <!-- <button @click="$emit('hideModal')">Hide Modal</button> -->
        <button @click="handleButtonClick">Hide Modal</button>
    </div>
</template>

<script setup>

    const props = defineProps({
        title: {
            type: String,
            default: 'No props found'
        }
    })
    console.log(props.title);

    // const emit = defineEmits(['hideModal'])

    const emit = defineEmits()
    const handleButtonClick = () => {

        console.log('in handleButtonClick function');
        emit('hideModal');
    }


    

</script>

<style>
    h2, p{
        color: black;
    }
    .modal{
        background: beige;
        padding: 10px;
    }
</style>
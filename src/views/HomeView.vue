<template>
  <div class="home">
    <h1>{{ appTitle }}</h1>
    <h2>{{ counterData.title }}</h2>
    <div>
      <button @click="decreaseCounter(2, $event)" class="btn">--</button>
      <button @click="decreaseCounter(1, $event)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
      <p>The counter is {{ oddOrEven }}</p>
    </div>
    <div class="edit">
      <h4>Enter title to change heading</h4>
      <input v-model="counterData.title" type="text" v-autofocus>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated } from 'vue'
// import { vAutofocus } from '@/directives/vAutofocus' // this is to be used when we want to set and use directives globaly
  const appTitle = 'Vue 3 Composition API Basics'
  
  // using ref, ref is used to create a reactive data, i.e, initially it can be set using a default value
  // and it returns a reactive object to the dom element to show the value. It also monitors the change in
  // the ref variable and update it accordingly
  const counter = ref(0)
  const counterTitle = ref('Counter Title')

  // using reactive object
  const counterData = reactive ({
    count: 0,
    title: 'Counter Title'
  })

  // computed property code, this property is used on reactive data when changes are made in it
  // and automatically update the output, they are cached so it means that they will only change 
  // when the data it is dependent on changes e.g, in our case we are checking if the counter is odd or even
  const oddOrEven = computed(() => {

    return counterData.count %2 == 0 ? 'even' : 'odd'
  })

  // watch function is used to watch for changes that are made in the data and it triggers a call 
  // back when does changes occur, now in the below example as we are using reactive data so we 
  // cannot access count directly as it is a nested data, so for this we use getter function to 
  // access the data, and the second bracket is used for params like new values or old values
  watch(()=> counterData.count, (newCount, oldCount) => {

    console.log('newCount :: '+newCount);
    console.log('oldCount :: '+oldCount);

    if(newCount > 10){

      alert('Counter has crossed 10')
    }
    
  })

  const increaseCounter = (amount) => {
    counterData.count += amount
  }

  const decreaseCounter = (amount, $e) => {
    console.log($e);
    counterData.count -= amount
  }

  // mount hooks
  onBeforeMount(() =>{
    console.log('onBeforeMount')
  })

  onMounted(() => {
    console.log('onMounted')
  })

  onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
  })

  onUnmounted(() => {
    console.log('onUnmounted')
  })

  onActivated(() => {
    console.log('onActivated');
    
  })

  onDeactivated(() => {
    console.log('onDeactivated');
    
  })

  onBeforeUpdate(() => {
    console.log('onBeforeUpdate');
    
  })

  onUpdated(() => {
    console.log('onUpdated');
    
  })

  // directives are used if we want to add functionality to an element like 
  // autofocus an element. Directives work once the elements are loaded

  const vAutofocus = {
    mounted: (el) => {
      el.focus()
    }
  }

</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
.edit
{
  margin-top: 50px;
}
</style>
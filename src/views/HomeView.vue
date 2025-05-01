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
import { useCounter } from '@/use/useCounter';


// import { vAutofocus } from '@/directives/vAutofocus' // this is to be used when we want to set and use directives globaly

// the data in homeView.vue is being fetched and displayed using composibles. 
// In order to use composible we will have to create a new folder "use" in "src" directory 
// and place our whole script functions including the inmport line in that file e.g useCounter.js 
// then in the view file we need to import our composible file and use those functions as below
// the approach that we are using is called destructive approach as we are able to load only selected data
// that is required for this page also it lets us know that what we are grabbing from our composible. Another
// way is also shown below but it commented out and not recommended until it is required as it loads whole
// composible returned data. But for that we would also have to update our template by adding the const name 
// before it e.g, in our case the const name is counter so the data in the template would be shown e.g, counter.counterData.title
const {counter, counterTitle, counterData, oddOrEven, increaseCounter, decreaseCounter, vAutofocus} = useCounter()
// const counter = useCounter()

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
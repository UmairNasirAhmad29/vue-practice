<template>
  <div class="posts">
    <h1>Posts</h1>
    <textarea name="" id="" v-autofocus></textarea>

    <ul>
      <li
        v-for="post in posts" :key="post.id"
      >
        <RouterLink :to="`/postdetail/${post.id}`">{{post.title}}</RouterLink>
      </li>
    </ul>

  </div>
  <div>
    <button @click="counter.increaseCount(1)" class="counter-button" :class="{ 'odd-counter' : counter.oddOrEven === 'odd' }">
      {{ counter.count }}
    </button>
  </div>
</template>

<style scoped>
  ul{
    margin-top: 30px;
  }
</style>

<script setup>

import { vAutofocus } from '@/directives/vAutofocus';
// import { RouterLink } from 'vue-router';
import { ref } from 'vue'
// import {useCounter} from '@/use/useCounter'

import { useCounterStore } from '@/stores/counter';

// this is the way to show data dynamically in html, we set the object and then use that object in the html using v-for (lists) (similar to foreach in php) 
// the key attribute in v-for is used to let the DOM know that which element has changed
const posts = ref ([
  {
    id: 'id1',
    title: 'post 1'
  },
  {
    id: 'id2',
    title: 'post 2'
  },
  {
    id: 'id3',
    title: 'post 3'
  },
  {
    id: 'id4',
    title: 'post 4'
  }
])

// const {counterData, increaseCounter, oddOrEven} = useCounter()

const counter = useCounterStore()

</script>

<style>
  .counter-button{
    font-size: 60px;
    background-color: pink;
    width: 100%;
  }
  .odd-counter{
    background-color: yellow;
  }
</style>
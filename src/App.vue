<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>

  <RouterView />

  <div>
    {{ userData.name }} @{{ userData.username }}

    Network Status:
    <span :style="{ color: online ? 'green' : 'red'}">
      {{ online ? 'Online' : 'Offline' }}
    </span>
  </div>

  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
</template>

<script setup>
import { reactive, provide } from 'vue';
import { useOnline } from '@vueuse/core'

// setting up a reactive object and passing data to shild of child component using provide derivative (import before use)
const userData = reactive({
  name: 'umair',
  username: 'umairnasir'
})

provide('userData', userData)

// useOnline is one of a component from vue js VueUse library and tells wheter we are connected to the internet or not. 
// There are more than 100 composibles and they can be used using this library 
const online = useOnline()

</script>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

<template>
  <div class="post-detail">
    <h1>This is a Post Detail Page</h1>
    
    <p>This is a post detail page related to post id {{ $route.params.id }} </p>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
    <br>
    <!-- This button shows us how to get param values to the script -->
    <div>
      <button @click="getPostId">Get Post Id</button> 
    </div>
    <div>
      <button @click="goToHomePageIn2Secs">Got To Home Page in 2 secs</button>
    </div>
    <div>
      <button @click="goToPost1">Got To Post 1</button>
    </div>

  </div>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router' //for getting param values to script we use the router of vue "vue-router" and assign that router to a const. 
// We need to import the vue-router as useRoute (this is vue composible) and later use it as useRoute() and assign it to a const

const route = useRoute() //this is a vue js composible
const router = useRouter() //this is a vue js composible

const getPostId = () => {
  
  console.log('get post id is clicked');
  alert(`This is a post with id ${route.params.id}`)
}

// router.push is used if you want to redirect to a different page using script, 
// if you want to add params along with the router.push you can also do that as shown in the last example
const goToHomePageIn2Secs = () => {

  setTimeout(()=> {

    router.push({name: 'home'})
  }, 2000)
}

const goToPost1 = () => {

  router.push({

    name: 'postdetail',
    params: {
      id: 'id1'
    }
  })
}

</script>
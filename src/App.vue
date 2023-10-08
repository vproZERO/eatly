<template>
  <div class="app">
      <div class="component">
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
import './style.css'
import Home from './pages/home.vue'
export default {
  components:{
    Home
  }
}
</script>
<style scoped>
  
</style>
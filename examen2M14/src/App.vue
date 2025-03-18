<template>
  <div>
    <header>
      <Navigation />
    </header>
    <router-view />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
</script>


<style scoped>/* app.css */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
  padding: 20px;
}

</style>

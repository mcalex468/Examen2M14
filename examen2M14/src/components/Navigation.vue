<template>
  <nav>
    <!--<router-link to="/">Home</router-link>-->
    <router-link to="/posts">Posts</router-link>
    <router-link to="/aigua">Aigua</router-link>
    <router-link to="/pokemons">Pokemons</router-link>
    <router-link to="/llistaCompra">Llista de Compra</router-link>
    <router-link to="/usuaris">Llista de Usuaris</router-link>
    <router-link to="/contador">Contador</router-link>
    <router-link to="/lista">Lista Tareas</router-link>
  </nav>
</template>
<style scoped>
nav {
  background-color: #3498db;
  padding: 15px;
  display: flex;
  gap: 15px;
  justify-content: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background 0.3s;
}

nav a:hover {
  background-color: #2980b9;
}
</style>
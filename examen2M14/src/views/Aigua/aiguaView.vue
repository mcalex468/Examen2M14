<template>
  <div class="contenedor">
    <h1>Llistat d’Embassaments</h1>
    <ul class="embassament-list">
      <li v-for="(embassament, index) in uniqueEmbassaments" :key="index">
        <router-link :to="`/aigua/${embassament.estaci}`" class="embassament-link">
          {{ embassament.estaci }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useEmbassaments } from '../../composables/useEmbassaments';
const { uniqueEmbassaments } = useEmbassaments();
</script>

<style scoped>
.contenedor {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.embassament-list {
  list-style: none;
  padding: 0;
}

.embassament-list li {
  margin: 10px 0;
}

.embassament-link {
  display: block;
  padding: 10px;
  background-color: #76a7db;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.5s ease;
}

.embassament-link:hover {
  background-color: #1d80ebd7;
}
</style>

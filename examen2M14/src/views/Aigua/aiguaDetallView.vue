<template>
    <div>
      <h1>Detall de l’embassament: {{ nom }}</h1>
      <p v-if="loading">Carregant dades...</p>
      <p v-if="error">{{ error }}</p>
  
      <div>
        <div v-for="item in dades" :key="item.dia" class="embassament-detall">
          <p><strong>Dia:</strong> {{ item.dia }}</p>
          <p><strong>Nivell Absolut:</strong> {{ item.nivell_absolut }}</p>
          <p><strong>Percentatge Volum Embassat:</strong> {{ item.percentatge_volum_embassat }}%</p>
          <p><strong>Volum Embassat:</strong> {{ item.volum_embassat }}</p>
          <p v-if="item.percentatge_volum_embassat && item.volum_embassat">
            <strong>Capacitat Total:</strong> 
            {{ calcularCapacitatTotal(item.volum_embassat, item.percentatge_volum_embassat) }}
          </p>
          <hr />
          <button @click="$router.push('/aigua')">Tornar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useEmbassaments } from '../composables/useEmbassaments';
  
  const { dades, loading, error, getDetallEmbassament } = useEmbassaments();
  const route = useRoute();
  const nom = route.params.nom;
  
  function calcularCapacitatTotal(volum, percentatge){
    return ((volum / percentatge) * 100).toFixed(2);
  }
  
  onMounted(() => getDetallEmbassament(nom));
  </script>
  
  <style scoped>
  .embassament-detall {
    background: #f8f8f8;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }
  </style>
  
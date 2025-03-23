<template>
    <div class="contenedor">
        <h1>Lista de Pokémon</h1>

        <!-- Aqui en el router-link debemos poner el path del detalle -->
        <!-- '/pokemons/:name' -->
        <ul class="pokemon-list">
            <li v-for="pokemon in pokemons" :key="pokemon.name">
                <router-link :to="`/pokemons/${pokemon.name}`" class="pokemon-link">
                    {{ pokemon.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { usePokemons } from '../../composables/usePokemons.js';

const { pokemons, loading, error } = usePokemons();
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

.pokemon-list {
    list-style: none;
    padding: 0;
}

.pokemon-list li {
    margin: 10px 0;
}

.pokemon-link {
    display: block;
    padding: 10px;
    background-color: #76a7db;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.5s ease;
}

.pokemon-link:hover {
    background-color: #1d80ebd7;
}
</style>

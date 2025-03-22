<template>
    <div>
        <h1>Detall del Pokemon {{ nom }}</h1>
        <p v-if="loading">Carregant dades...</p>
        <p v-if="error">{{ error }}</p>

        <div>
            <div v-for="pokemon in pokemonDetail" :key="pokemon.name" class="pokemon-detall">
                <p><strong>Base:</strong> {{ pokemon.base_experience }}</p>
                <p><strong>Heigth:</strong> {{ pokemon.heigth }}</p>
                <p><strong>Name:</strong> {{ pokemon.name }}</p>
                <p><strong>Order:</strong> {{ pokemon.order }}</p>
                <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
                <p v-if="pokemon.base_experience && pokemon.heigth">
                    <strong>Daño Total:</strong>
                    {{ calcularDaño(item.base_experience, item.heigth) }}
                </p>
                <hr />
                <button @click="$router.push('/pokemons')">Tornar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePokemons } from '../composables/usePokemons.js';

const { pokemonDetail, loading, error } = usePokemons();
const route = useRoute();
const nom = route.params.nom;

function calcularDaño(base, daño) {
    return (base * daño).toFixed(2);
}

onMounted(() => getPokemonDetail(nom));
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
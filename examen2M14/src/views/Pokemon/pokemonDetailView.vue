<template>
    <div>
        <h1>Detalle del Pokémon</h1>
        <p v-if="loading">Cargando datos...</p>
        <p v-if="error">{{ error }}</p>

        <div v-for="pokemon in pokemonDetail" :key="pokemon.name" class="pokemon-detall">
            <h2>{{ pokemon.name }}</h2>
            <p><strong>Base Experience:</strong> {{ pokemon.base_experience }}</p>
            <p><strong>Height:</strong> {{ pokemon.height }}</p>
            <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
            <p><strong>Order:</strong> {{ pokemon.order }}</p>
            <p v-if="pokemon.base_experience && pokemon.height">
                <strong>Daño Total:</strong> {{ calcularDaño(pokemon.base_experience, pokemon.height) }}
            </p>
            <hr />
            <button @click="$router.push('/pokemons')">Volver</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePokemons } from '../../composables/usePokemons.js';

const { pokemonDetail, loading, error, getPokemonDetail } = usePokemons();
const route = useRoute();
const name = route.params.name;

function calcularDaño(base, altura) {
    return (base * altura).toFixed(2);
}

onMounted(() => {
    getPokemonDetail(name);
});
</script>

<style scoped>
.pokemon-detall {
    background: #f8f8f8;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>

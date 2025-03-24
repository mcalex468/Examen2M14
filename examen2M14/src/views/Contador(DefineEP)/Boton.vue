<template>
    <button @click="$emit('accion')">{{ texto }}</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    texto: String // Texto del botón (ejemplo: texto="Sumar", texto="Restar")
});

defineEmits(['accion']); // Evento que se emitirá cuando se haga clic
</script>

<style scoped>
button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #3498db;
    color: white;
}

button:hover {
    background-color: #2980b9;
}
</style>

<template>
    <div>
        <input v-model="nuevaTarea" type="text" placeholder="Escribe una tarea" />
        <button @click="añadir">Añadir</button>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';

const nuevaTarea = ref('');
const agregarTarea = inject('agregarTarea');

const añadir = () => {
    if (nuevaTarea.value.trim()) {
        agregarTarea(nuevaTarea.value);
        nuevaTarea.value = '';
    }
};
</script>

<style scoped>
input {
    padding: 8px;
    width: 60%;
}

button {
    padding: 8px;
    margin-left: 5px;
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #219150;
}
</style>

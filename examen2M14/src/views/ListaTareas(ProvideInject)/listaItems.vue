<template>
    <ul>
        <li v-for="tarea in tareas" :key="tarea.id" :class="{ completada: tarea.completada }">
            {{ tarea.texto }}
        </li>
    </ul>
</template>

<script setup>
import { inject } from 'vue';

const tareas = inject('tareas');
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 10px;
    margin: 5px 0;
    background-color: #f1f1f1;
    border-radius: 5px;
}

.completada {
    text-decoration: line-through;
    color: green;
}
</style>

<template>
    <div class="contenedor">
        <h1>Lista de Tareas</h1>
        <FormularioTarea />
        <ListaItems />
    </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import FormularioTarea from './formularioTarea.vue';
import ListaItems from './listaItems.vue';
// COMPONENTE PADRE --> PROVEEMOS LA FUNCION Y ARRAY 
const tareas = ref([
    { id: 1, texto: 'Aprender Vue', completada: false },
    { id: 2, texto: 'Hacer ejercicios', completada: true }
]);

const agregarTarea = (texto) => {
    tareas.value.push({ id: tareas.value.length + 1, texto, completada: false });
};

provide('tareas', tareas);
provide('agregarTarea', agregarTarea);
</script>

<style scoped>
.contenedor {
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
</style>

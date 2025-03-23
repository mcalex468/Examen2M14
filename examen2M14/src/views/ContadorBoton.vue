<template>
    <div class="contador">
        <h1>Contador: {{ contador }}</h1>
        <BotonAccion texto="Sumar" @accion="incrementar" />
        <BotonAccion texto="Restar" @accion="decrementar" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BotonAccion from './Boton.vue';

const contador = ref(0);

const incrementar = () => contador.value++;
const decrementar = () => contador.value--;
</script>

<style scoped>
.contador {
    text-align: center;
    padding: 20px;
    background: #f1f1f1;
    border-radius: 10px;
    width: 300px;
    margin: auto;
}
</style>

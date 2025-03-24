<template>
    <div class="contador">
        <h1>Contador: {{ contador }}</h1>
        <!-- Nombre de la funcion emit se utiliza en el @click => @accion -->
        <BotonAccion texto="Sumar" @accion="incrementar" />
        <!-- Pasamos TEXTO="Restar" como prop , ya que esto es el componente-->
        <BotonAccion texto="Restar" @accion="decrementar" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BotonAccion from '../Contador(DefineEP)/Boton.vue';

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

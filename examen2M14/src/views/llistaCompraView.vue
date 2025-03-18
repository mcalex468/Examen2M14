<template>
    <div class="contenedor">
        <h1>Llista de la Compra</h1>

        <!-- Formulario per afegir elements -->
        <div class="formulario">
            <input v-model="nomElement" type="text" placeholder="Afegeix un producte" />
            <label>
                <input v-model="prioritari" type="checkbox" /> Prioritari</label>
            <label>
                <input v-model="comprat" type="checkbox" />Comprat</label>
            <button @click="afegirElement">Afegir Element</button>
        </div>

        <!-- Llista de productes -->
        <ul class="llista">
            <li v-for="element in llistaCompra" :key="element.id" :class="{
                comprat: element.comprat,
                prioritari: element.altaPrioritat
            }">
                {{ element.nom }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const llistaCompra = ref([]);
const nomElement = ref('');
const prioritari = ref(false);
const comprat = ref(false);
const id = ref(1);

const afegirElement = () => {
    if (!nomElement.value.trim()) {
        alert("¡Debes rellenar el campo antes de agregar un elemento!");
        return;
    }
    llistaCompra.value.unshift({
        id: id.value++,
        nom: nomElement.value,
        comprat: comprat.value,
        altaPrioritat: prioritari.value
    });

    // Resetear valores
    nomElement.value = '';
    prioritari.value = false;
    comprat.value = false;
};
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

.formulario {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

button {
    padding: 8px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9;
}

.llista {
    list-style: none;
    padding: 0;
    margin-top: 20px;
}

.llista li {
    padding: 10px;
    margin: 5px 0;
    border-radius: 6px;
}

.comprat {
    text-decoration: line-through;
    color: green;
    background-color: #eaf8ea;
}

.prioritari {
    color: red;
    font-weight: bold;
    background-color: #fde8e8;
}
</style>
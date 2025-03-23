<template>
    <div>
        <h1>Posts del Usuario {{ userId }}</h1>
        <div v-for="post in postsUserId" :key="post.id">
            <h3>ID: {{ post.id }}</h3>
            <h4>TITLE: {{ post.title }}</h4>
            <p>BODY: {{ post.body }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { usePosts } from '@/composables/usePosts.js';

// Obtener parámetros de la ruta
const route = useRoute();
const userId = ref(route.params.userId);

// Obtener métodos y estado desde usePosts
const { postsUserId, getPostsUserId } = usePosts();

// Verificar si userId es correcto
console.log("User ID recibido:", userId.value);

// Obtener posts al montar el componente
onMounted(() => {
    getPostsUserId(userId.value);
});
</script>

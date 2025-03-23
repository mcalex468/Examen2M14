<template>
    <div v-if="postsId.title">
        <h2>ID: {{ postsId.id }}</h2>
        <h3>TITLE: {{ postsId.title }}</h3>
        <p>BODY: {{ postsId.body }}</p>
    </div>
    <p v-else>Cargando...</p>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { usePosts } from '@/composables/usePosts.js';

const route = useRoute();
const { postsId, getPostsId } = usePosts();

onMounted(() => {
    getPostsId(route.params.id);
});
</script>

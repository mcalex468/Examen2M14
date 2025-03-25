<template>
    <div v-for="post in posts" :key="post.id">
        <h2>
            <router-link :to="`/posts/user/${post.userId}`">USER ID: {{ post.userId }}</router-link>
        </h2>
        <h3>
            <router-link :to="`/posts/${post.id}`">ID: {{ post.id }}</router-link>
        </h3>
        <p>BODY: {{ post.body }}</p>
    </div>
</template>

<script setup>
// Import Composable
import { usePosts } from '@/composables/usePosts.js';
// Cogemos la Variable retornada en el usePosts()
const { posts } = usePosts();
</script>

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
import { usePosts } from '@/composables/usePosts.js';

const { posts } = usePosts();
</script>

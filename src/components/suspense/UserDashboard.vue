<template>
    <div>
        <h1>Welcome, {{ user.name }}!</h1>
        <p>Email: {{ user.email }}</p>
        <h2>Posts</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Simulating API calls

const fetchUser = () => {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove({ id: 1, name: "naresh jupalle", email: "naresh.jupalle410@gmail.com" });
        }, 1000);
    })
}

const fetchPosts = (userId) => new Promise(resolve =>
    setTimeout(() => resolve([
        { id: 1, title: 'Vue 3 is awesome' },
        { id: 2, title: 'Understanding Suspense' }
    ]), 7000)
)

// Async setup

console.log(await fetchUser())
console.log(await fetchPosts())
const user = ref(await fetchUser())
const posts = ref(await fetchPosts(user.value.id))
</script>
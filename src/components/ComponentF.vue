<template>
    <div>
        <h1>Component F</h1>
    <h2> user is from nested child component  : {{ username }}</h2>
    </div>
</template>


<script setup>
import { inject } from 'vue'

let username = inject('userName');

console.log(username);

setTimeout(() => {
    username.value = 'nani'
}, 5000);

</script>
<template>
    <h1>Vue Transition</h1>
    <button @click="show = !show">Toggle</button>
<Transition>
  <p v-if="show">hello</p>
</Transition>
</template>


<script setup>

import { ref } from 'vue';

const show = ref(true);
</script>
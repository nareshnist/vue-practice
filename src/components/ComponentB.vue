<!-- Mouse tracker -->
<script setup>

import { useFetchData } from '@/composables/fetch';
import useMouseTraclker from '@/composables/mouse-tracker';
import { ref } from 'vue';
const url = ref('https://jsonplaceholder.typicode.com/todos');
const {x,y} = useMouseTraclker();
const {data,error} = useFetchData(url);
console.log(data);
console.log(error);

setTimeout(() => {
  console.log("re exicuted")
  url.value = 'https://jsonplaceholder.typicode.com/todos/12';
}, 5000);



</script>

<template>


<div>
    Mouse position is at: {{ x }}, {{ y }} <strong>Component B</strong> 
</div>

<!-- fetch composables  -->

<div v-if="error">Oops! Error encountered: {{ error.message }}</div>
<div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div>

</template>

<style scoped>
div  {
    padding: 24px;
    border: 2px solid black;
}
</style>
<template>
  <h2>Component A</h2>
  <provideComponentB></provideComponentB>
  
</template>

<script setup>
import { provide, ref } from "vue";
import provideComponentB from "./provideComponentB.vue";

provide("message","hello");


const data =  ref(0);

 setInterval(() => {
  data.value = data.value + 1;
}, 5000);


function addWithThousand(){
  data.value = data.value + 1000;
}

provide("count",
{
  data,
  addWithThousand
})

</script>

<style>

</style>
<template>
    <h2>Component C</h2>
    {{ message }}
    {{ data }}

    <div class="alert alert-primary">Injection Default Values : {{alert  }}</div>

    <button type="button" @click="addWithThousand"> Increment by 100</button>
  </template>
  
  <script setup>
import { inject } from 'vue';

const message = inject("message");
const {data,addWithThousand} =  inject("count");
const alert = inject("alert-data",() => `Default Values ===>`,true);

// console.log(data);
 
  </script>
  
  <style>
  
  </style>
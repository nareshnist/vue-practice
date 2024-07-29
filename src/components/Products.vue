<template>
    <h1>Products vue</h1>
    <Product welcome-message="hi hello" :user-name="dynamicPros"></Product>
</template>

<script setup>
import Product from './Product.vue';

// 

const dynamicPros = 'Naresh'

</script>

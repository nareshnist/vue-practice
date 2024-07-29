<template>
  <h1>Parent Component </h1>
      <div class="product-list row m-0">
        <Product v-for="product in products" :product="product" :key="product.id" @delete-product="deleteProduct"/>
      </div>
</template>
<script setup>
import { reactive} from 'vue';
import Product from './Product.vue';


const data = await fetch('https://freetestapi.com/api/v1/products');
let products = reactive(await data.json());
console.log(products);

function deleteProduct(productId){
  const idx = products.findIndex(res => res.id === productId );
  products.splice(idx,1)
}
</script>

<style>

</style>
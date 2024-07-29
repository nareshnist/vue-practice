<template>
  <div class="col-md-4">
    <div class="card">
  <img :src="product.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>
    <p class="card-text">{{ product.description }}</p>
    <!-- <p class="mb-1">Price : {{ product.price }}</p>
    <p class="mb-1"> Rating : {{ product.rating }}</p>
    <p class="mb-1">Color : {{ product.color }}</p>
    <p class="mb-1">Color : {{ product.brand }}</p> -->
    <a href="#" class="btn btn-primary">Product Details </a>
    <button class="btn btn-danger mt-4 d-block" @click="deleteProduct(product.id)">Delete</button>
  </div>
  </div>

</div>
</template>

<script setup>

defineProps(
  {
    product :{
      type :Object,
      required:true
    },
    // productTitle : {
    //   required:true,
    //   type:String,

    // just for an validation
    // }
  }
);
const emits = defineEmits(["deleteProduct"])

// console.log(prps.title)


function deleteProduct(productId){
  emits('deleteProduct',productId)
}



</script>

<style>

</style>
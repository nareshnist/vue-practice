<template>
  <h1>Reactivity: Utilities</h1>
</template>

<script setup>
import { isReactive, isRef, reactive, ref, toRef, toRefs, toValue, unref } from 'vue';


const refVariable  = ref(0);
const reactiveVariable = reactive({name:"Naresh",age:26});


// IsRef 

console.log(isRef(refVariable));
console.log(isReactive(reactiveVariable));
console.log(unref(refVariable));
console.log(toValue(refVariable));

console.log(toRefs(reactiveVariable));
console.log(toRef(reactiveVariable));


// tovalue is usefull to convert ref into normal values
// torefs is useful when  you want to make connectin with reactive obejct with destructure 

// checing isref , is recactive , isreadonly 

//  ref ref object 
// reactive proxy object 


</script>

<style>

</style>
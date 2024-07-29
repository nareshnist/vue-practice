<template>
  <h1>Parent component</h1>
  <childComVue class="large"  @click="addData"/>
</template>

<script setup>
import childComVue from "./childCom.vue";

function addData(){
  console.log("add data");
}

</script>

<style>

</style>
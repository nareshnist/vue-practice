<template>
  <h1 class="child-class" @click="childComMethode">child componnet </h1>

  {{ $attrs.onClick }}
  <!-- fallthru attributes will merge -->
</template>

<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
// console.log(attrs)
defineOptions(
  {
    inheritAttrs:true
  }
)

function childComMethode(){
  console.log("child com methode")
}
</script>

<style>

</style>
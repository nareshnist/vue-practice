<template>
  <h1>Slot Parent </h1>



<SlotChild></SlotChild>
</template>

<script setup>
import SlotChild from './SlotChild.vue';

</script>

<style scoped>
h1  {
  border: 2px solid #333;
}

</style>
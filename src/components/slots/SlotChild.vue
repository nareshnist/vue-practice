<template>
  <div class="container">
    <BaseCardVue>
        <template #[slotName]>
          <h1>card content</h1>
          <h2>{{ username }}</h2>
        </template>


      <template #footer="{count}">
        <h1>{{ count }}</h1>
      </template>
    </BaseCardVue>

    <!-- <BaseCardVue>
        <h1>actual content </h1>
    </BaseCardVue> -->
  </div>
</template>

<script setup> 
import { ref } from "vue";
import BaseCardVue from "./BaseCard.vue";

const  username = ref("Naresh");

// example for an dynbamic slots 
const slotName = ref("body");

setTimeout(() => {
    slotName.value  = "default"
}, 5000);

</script>

<style>

</style>
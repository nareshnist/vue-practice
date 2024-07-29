<template>

<Suspense>
<template #default>
    <user-dashboard></user-dashboard>
</template>

<template #fallback>
   <div>contnet being loading please wait for until its load .</div>
</template>

</Suspense>
  </template>
  
  <script setup>
  import UserDashboard from './UserDashboard.vue';
  </script>
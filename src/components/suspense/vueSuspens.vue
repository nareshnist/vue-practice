<template>

<!-- @error-captured="handleError" -->
<Suspense >
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
import { onErrorCaptured } from 'vue';


// one way of doing 
// onErrorCaptured((error) => {
//   debugger;
//   console.log(error);
// })

// second listening event on suspense tag.

// function handleError(error) {
//   debugger
//   console.log(error)
// }



  </script>
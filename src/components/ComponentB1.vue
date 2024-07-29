<!-- Mouse tracker -->
<script setup>
import useMouseTraclker from '@/composables/mouse-tracker';

const {x,y} = useMouseTraclker();
</script>

<template>

    <div>
        Mouse position is at: {{ x }}, {{ y }} <strong>Component B1 </strong>
    </div>
</template>

<style scoped>
div  {
    padding: 24px;
    border: 2px solid black;
    margin-top: 10px;
}

</style>
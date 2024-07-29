<template>
    <div :class="['hidden-element', { 'visible': isVisible }]">
        You have scrolled 66% of the page!
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const isVisible = ref(false);

const onScroll = () => {
    const scrollPosition = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    if (scrollPosition >= totalHeight * 0.66) {
        isVisible.value = true;
    } else {
        isVisible.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', onScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.hidden-element {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #333;
    color: #fff;
    border-radius: 8px;
}

.visible {
    display: block;
}
</style>
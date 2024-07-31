<template>
    <div class="card shadow-none p-3 m-5 rounded ">
        <div class="card-header" v-if="$slots.default">
            <slot></slot>
        </div>
        <div class="card-body">
            <slot name="body">
                <div class="alert alert-danger">
                    default content
                </div>
            </slot>
        </div>
        <div class="card-footer" v-if="$slots.footer">
            <slot name="footer" :count="count"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const count = ref(0);

const id = setInterval(() => {
    count.value = count.value + 10;

    if (count.value > 300) {
        clearInterval(id);
    }

}, 3000);

</script>

<style></style>
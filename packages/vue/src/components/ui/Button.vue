<template>
    <button class="btn" :disabled="disabled" @click="emit('click', $event)">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import type { ButtonProps } from "../../types/index.ts";

withDefaults(defineProps<ButtonProps>(), {
    size: "medium",
    variant: "primary",
    disabled: false,
});

const emit = defineEmits<{
    (e: "click", event: MouseEvent): void;
}>();
</script>

<style>
.btn {
    background-color: red;
}
</style>

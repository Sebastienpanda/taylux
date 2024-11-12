<template>
    <button :class="classes" class="btn" :disabled="disabled" @click="emit('click', $event)">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from "vue";
import type { ButtonProps } from "../../types/index.ts";

const props = withDefaults(defineProps<ButtonProps>(), {
    size: "medium",
    variant: "primary",
    disabled: false,
});

const emit = defineEmits<{
    (e: "click", event: MouseEvent): void;
}>();

const classes = computed(() => ["taylux-button", `taylux-button--${props.variant}`, `taylux-button--${props.size}`]);
</script>

<style>
.btn {
    background-color: red;
}
</style>

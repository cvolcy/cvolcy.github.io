<script setup lang="ts">
defineProps<{
    id: string
}>();
</script>
<template>
    <div class="flex flex-col my-4">
        <span :id class="-mt-16 mb-16"/>
        <p v-if="$slots.title" class="text-4xl mb-4 uppercase">
            <slot name="title"></slot>
        </p>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};
</script>

<template>
    <div
        class="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 dark:border-gray-800">
        <div class="container mx-auto flex items-center justify-between p-4">
            <div class="text-lg font-bold">
                <img class="w-6" src="/logo2-white-transparent-150x150.png" alt="avatar" />
            </div>
            <div v-if="!menuOpen"
                @click="toggleMenu"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </div>
            <div :class="['fixed inset-0 transform transition-transform bg-black bg-opacity-80 z-20', { 'translate-x-0': menuOpen, 'translate-x-full': !menuOpen }]"
                @click="toggleMenu">
                <div class="absolute right-0 w-64 h-full px-4 pb-4" @click.stop>
                    <ul>
                        <li class="text-right text-5xl"><a href="javascript:void(0)" class="block" @click="toggleMenu">x</a></li>
                        <li class="py-2"><a href="#" class="block">Home</a></li>
                        <li class="py-2"><a href="#aboutme" class="block">About</a></li>
                        <li class="py-2"><a href="javascript:void(0)" class="block">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
/* Ensure the menu slides in from the right */
.translate-x-full {
    transform: translateX(100%);
}

.translate-x-0 {
    transform: translateX(0);
}
</style>
<script setup lang="ts">
import { useNow } from '@vueuse/core';
import { LinkedinIcon } from 'lucide-vue-next';

const now = useNow()
</script>

<template>
    <footer
        class="flex w-full shrink-0 flex-col items-center gap-2 border-t border-gray-200 px-4 py-6 dark:border-gray-700 sm:flex-row md:px-6">
        <p class="text-xs text-gray-500 dark:text-gray-400">
            © 2014-{{ now.getFullYear() }} Clervens Volcy. All rights reserved.
        </p>
        <nav class="flex gap-4 sm:ml-auto sm:gap-6">
            <a class="text-xs underline-offset-4 hover:underline"
                href="https://www.linkedin.com/in/clervens-volcy-b-ing-👨🏾‍💻-5522a670"><LinkedinIcon class="inline" /></a>
        </nav>
    </footer>
</template>
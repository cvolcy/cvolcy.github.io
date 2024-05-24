<script setup lang="ts">
import { computed } from 'vue';
import { useColorMode } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import { SunIcon, MoonIcon } from 'lucide-vue-next'

const mode = useColorMode();
const icon = computed(() => mode.value == 'dark' ? SunIcon : MoonIcon);
</script>
<template>
    <Button
        variant="ghost"
        :title="`${ mode } mode`"
        @click="mode = mode === 'dark' ? 'light' : 'dark'"
    >
        <component :is="icon" />
    </Button>
</template>
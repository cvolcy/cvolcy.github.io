<script setup lang="ts">
import ISkill from '@/models/ISkill.ts'
defineProps<{
    index: number,
    skill: ISkill
}>()
</script>
<template>
    <div class="skill-card rounded-lg border bg-card text-card-foreground shadow-sm">
        <div class="flex flex-col items-start p-6">
            <div class="flex w-full items-center justify-between">
                <span class="text-lg font-semibold">({{ index }})</span>
                <component :is="skill.icon" />
            </div>
            <div class="grid gap-0.5">
                <h3 class="mt-2 text-2xl font-bold leading-8 tracking-tight">{{ skill.title }}</h3>
                <p class="mt-2 text-base text-gray-500 text-justify">{{ skill.description }}</p>
            </div>
        </div>
    </div>
</template>
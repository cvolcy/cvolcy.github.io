<script setup lang="ts">
import type IProject from '@/models/IProject';
import { GlobeIcon } from 'lucide-vue-next'

defineProps<{
    project: IProject
}>()
</script>

<template>
    <div class="border bg-card text-card-foreground shadow-sm flex flex-1 basis-80 flex-col justify-between overflow-hidden rounded-md">
        <div class="inline-block h-full overflow-hidden p-0">
            <img alt="Image of Recipe Sharing App" loading="lazy"
                width="0" height="0" decoding="async" data-nimg="1"
                class="h-full max-h-96 w-full object-cover transition-transform duration-200 hover:scale-110"
                style="color:transparent" sizes="100vw"
                :src="project.backgroundImage"
            />
        </div>
        <div class="grid grid-cols-1 items-center gap-4 p-4 md:p-6">
            <div>
                <h3 class="text-xl font-bold">{{ project.title }}</h3>
                <p class="text-sm text-pretty text-gray-500 dark:text-gray-400">{{ project.description }}</p>
            </div>
            <div class="flex items-center justify-end">
                <!-- <a
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ml-2 justify-self-end"
                    href="https://github.com/" target="_blank" data-state="closed">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-github ">
                        <path
                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                        </path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                </a> -->
                <a
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ml-2 justify-self-end"
                    :href="project.link"
                    target="_blank"
                    data-state="closed"
                >
                    <GlobeIcon />
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped></style>

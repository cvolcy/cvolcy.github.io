<script setup lang="ts">
import { computed, ref } from 'vue'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

const testimonials = ref<ITestimonial[]>([
    {
        pravatarIndex: 23,
        name: 'Janine Melnitz',
        username: '@JanineBuster',
        message: `Working with John on this initiative was truly exceptional. His commitment and in-depth knowledge played a crucial role in achieving our goals.`,
    },
    {
        pravatarIndex: 30,
        name: 'Barbara Minerva',
        username: '@fiercearchaeologist',
        message: `John's contribution to the project was nothing short of remarkable. His analytical skills and meticulous nature significantly propelled our success.`,
    },
    {
        pravatarIndex: 64,
        name: 'Victor S.',
        username: '@TechCyborg',
        message: `John's innovative thinking and technical expertise were instrumental in the project's triumph. I wholeheartedly recommend partnering with him.`,
    },
    {
        pravatarIndex: 11,
        name: 'Ron Swanson',
        username: '@SwansonRon',
        message: `Teaming up with John was an extraordinary experience. His passion and mastery in his field were essential to the project's accomplishments.`,
    },
    {
        pravatarIndex: 3,
        name: 'Dexter Morgan',
        username: '@dextermorgan',
        message: `John's exceptional problem-solving abilities and attention to detail made a substantial impact on our project's outcome. His work was exemplary.`,
    },
    {
        pravatarIndex: 59,
        name: 'Miles M.',
        username: '@therealnewspiderman',
        message: `John's creative mindset and adeptness in technology were pivotal in our project's success. I highly endorse collaborating with him.`,
    }
]);

const nb_testimonial = 3;
const random_testimonials = computed(() => testimonials.value
    .map(a => [a, Math.random()])
    .sort((a,b) => {return a[1] < b[1] ? -1 : 1;})
    .slice(0, nb_testimonial)
    .map(a => a[0]));

interface ITestimonial {
    pravatarIndex: number,
    name: string,
    username: string,
    message: string
}
</script>

<template>
    <div class="mt-6 space-y-4">
        <div class="grid gap-10 lg:grid-cols-2">
            <div class="space-y-4">
                <p class="text-gray-500 dark:text-gray-400">
                    Here are some of my testimonials.
                    <TooltipProvider disable-closing-trigger>
                        <Tooltip>
                        <TooltipTrigger>
                            <span class="text-4xl inline-block align-bottom leading-[0.4rem]">*</span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>All to testimonials are randomly generated 😉</p>
                        </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </p>
            </div>
            <div class="flex items-center justify-center overflow-hidden lg:px-12">
                <Carousel class="relative w-full">
                    <CarouselContent>
                        <CarouselItem v-for="t in random_testimonials" :key="t.username">
                            <Card class="border bg-card text-card-foreground shadow-sm w-full rounded-xl">
                                <CardHeader class="pb-1">
                                    <div class="flex items-center p-1">
                                            <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                                                <img
                                                    :alt="t.name"
                                                    class="aspect-square h-auto w-full rounded-full object-cover"
                                                    loading="lazy"
                                                    width="40"
                                                    height="40"
                                                    decoding="async"
                                                    data-nimg="1"
                                                    :srcset="`https://i.pravatar.cc/75?img=${t.pravatarIndex} 1x, https://i.pravatar.cc/150?img=${t.pravatarIndex} 2x`"
                                                    :src="`https://i.pravatar.cc/75?img=${t.pravatarIndex}`">
                                            </div>
                                            <div class="ml-4">
                                                <p class="font-semibold">{{ t.name }}</p>
                                                <p class="text-sm text-gray-500">{{ t.username }}</p>
                                            </div>
                                        </div>
                                </CardHeader>
                                <CardContent class="flex items-center justify-center p-6 select-none">
                                    <p class="text-sm leading-loose">{{ t.message }}</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    </div>
</template>

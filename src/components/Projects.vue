<script setup lang="ts">
import { ref } from 'vue'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import ProjectCard from './projects/ProjectCard.vue'
import IProject from '../models/IProject.ts'

const projects = ref<IProject[]>([{
  title: 'Detection',
  description: 'An objects detection neural network built with the YOLOv3 architecture.',
  link: 'https://fast-everglades.azurewebsites.net/detection',
  tags: ['vuejs', 'python'],
  backgroundImage: 'https://cvolcy.s3.amazonaws.com/uploads/2020/02/file0001655960310-2.jpg',
  color: '#00bcd4',
},
{
  title: 'Minesweeper',
  description: 'A minesweeper clone, built in using Vuejs and canvas.',
  link: 'https://fast-everglades.azurewebsites.net/Views/minesweeper.html',
  tags: ['vuejs', 'html5'],
  backgroundImage: 'https://cvolcy.s3.amazonaws.com/uploads/2019/09/fff30993c11dbcd527755767eca3bb213.jpg',
  color: '#ffeb3b',
},
{
  title: 'Emotion recognition',
  description: 'Real time emotion recognition using client side inference model. The model is using an enhanced version of FER emotion dataset called FER+.',
  link: 'https://fast-everglades.azurewebsites.net/emotion-recognition',
  tags: ['vuejs', 'node-js'],
  backgroundImage: 'https://s3.amazonaws.com/cvolcy/uploads/2019/03/e9262c3d9263ee9b1243f1b0cf58a857.jpg',
  color: '#616161',
},
{
  title: 'GraphQL',
  description: 'A simple lambda in nodejs that return the informations about the current date and time of the server.',
  link: 'https://fast-everglades.azurewebsites.net/api/graphql?query={videos(lang:%22fr%22){title%20url}}',
  tags: ['node-js'],
  backgroundImage: 'https://s3.amazonaws.com/cvolcy/uploads/2019/03/0001279117911.jpg',
  color: '#e91e63',
},
{
  title: 'Cowsay',
  description: "A lambda function in python that render a cow in ASCII art with a message You can update the message by setting the message query string parameter in the url.Exemple : Message = 'Hello Boi'",
  link: 'https://fast-everglades.azurewebsites.net/api/cowsay?message=Hello%20Boi',
  tags: ['python'],
  backgroundImage: 'https://s3.amazonaws.com/cvolcy/uploads/2019/03/aa4c1b80ea25d9d1230967b5347d65602.jpg',
  color: '#4CAF50',
},
{
  title: 'Bring Umbrella',
  description: 'A simple progressive web app that telling you if you should bring your umbrella for the current day.',
  link: 'https://fast-everglades.azurewebsites.net/Umbrella',
  tags: ['vuejs', 'node-js'],
  backgroundImage: 'https://s3.amazonaws.com/cvolcy/uploads/2019/04/77153e213c2273d4b08b82ad881b66a4.jpg',
  color: '#9c27b0',
},
{
  title: 'Date',
  description: 'A simple lambda in nodejs that return the informations about the current date and time of the server.',
  link: 'https://fast-everglades.azurewebsites.net/api/date',
  tags: ['node-js'],
  backgroundImage: 'https://s3.amazonaws.com/cvolcy/uploads/2019/03/dfc3a12f93431b141d2cf03f0fe5c65d.jpg',
  color: '#009688',
},
{
  title: 'Videos',
  description: 'A lambda function in nodejs using mongoose the fetch data about the available videos in the database.',
  link: 'https://fast-everglades.azurewebsites.net/api/videos',
  tags: ['node-js'],
  backgroundImage: 'https://s3.amazonaws.com/cvolcy/uploads/2019/03/dwarf_mongoose2.jpg',
  color: '#ff5722',
}])
</script>

<template>
  <ScrollArea class="border md:border-0 rounded-md w-full whitespace-nowrap">
    <div class="mt-6 flex px-4 md:px-0 gap-4 md:flex-wrap w-max md:w-auto">
      <ProjectCard v-for="project in projects" class="max-w-96 md:max-w-none" :key="project.title" :project="project" />
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
</template>

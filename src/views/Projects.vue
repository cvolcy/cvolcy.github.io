<template>
  <div class="projects">
    <div class="columns">
      <h2 class="column">Projects</h2>
    </div>
    <div class="columns is-multiline">
      <div
        v-for="project in projects"
        :key="project.title"
        class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-2by1">
              <img
                :src="project.backgroundImage"
                :alt="project.title"
                loading="lazy"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ project.title }}</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              <p
                class="description"
                :title="project.description"
              >
                {{ project.description }}
              </p>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

interface IProject {
  title: string,
  description: string,
  link: string,
  tags: string[],
  backgroundImage: string,
  color: string
}

export default class Projects extends Vue {
  projects: IProject[] = [{
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
  }];
}
</script>
<style lang="scss" scoped>
@import 'bulma/sass/components/card';

.card {
  .card-image figure {
    max-height: 200px;
    overflow: hidden;
  }
  .card-content {
    .description {
      @include from($tablet) {
        display: -webkit-box;
        max-width: 200px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>

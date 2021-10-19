<template>
  <div class="about">
    <h1>This is an about <a href="javascript:void(0)" @click="hello">pages</a></h1>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class About extends Vue {
  hello($event: MouseEvent): void {
    console.log('Hello world', $event, this);
  }
}
</script>

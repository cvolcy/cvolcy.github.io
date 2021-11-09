<template>
  <div class="home">
    <div class="columns is-mobile">
      <div id="photo" class="column is-5-tablet is-6-desktop">
        <img alt="cvolcy avatar" src="../assets/avatar.png">
      </div>
      <div id="presentation" class="column is-7-tablet is-6-desktop">
        <h2>Hello</h2>
        <h3>I'm Clervens Volcy</h3>
        <p>a programmer from Montréal</p>
        <p>
          I'm Software Engineer bachelor with a keen interest in solving problems, Web technologies,
          machine learning and artificial intelligence.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
  .home .columns {
    @include mobile {
      flex-direction: column;
    }
  }

  #photo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include mobile {
      order: 2;
    }

    img {
      height: 100%;
      min-height: 250px;
    }
  }

  #presentation {
    h2 {
      color: $link-active-color;
      font-size: 60px;
      line-height: 60px;
      line-height: 65px;
      margin-left: -6px;

      @include tablet {
        font-size: 100px;
        line-height: 100px;
        line-height: 100px;
      }

      @include desktop {
        font-size: 150px;
        line-height: 150px;
        font-weight: 700;
      }
    }
    h3 {
      font-size: 25px;
      line-height: 25px;
      line-height: 25px;

      @include tablet {
        font-size: 40px;
        line-height: 40px;
        line-height: 45px;
      }

      @include desktop {
        font-size: 63px;
        line-height: 70px;
        font-weight: 400;
      }
    }
  }
</style>

<template>
  <div class="app">
    <div class="app__container">
      <header class="app__header">
        <div class="app__header-logo" @click="proceedTo('/')">
          THE WERTEY BLOG
        </div>
        <div class="app__header-menu">
          <menuTemplate/>
        </div>
      </header>
      <router-view/>
    </div>
  </div>
</template>

<script>
import menuTemplate from '@/components/menu/menuTemplate.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {
    menuTemplate,
  },
  setup() {
    const router = useRouter();
    const proceedTo = (route) => {
      router.push(route);
    };

    return {
      proceedTo,
    };
  },
};
</script>

<style lang="scss">
@import "assets/scss/reset.scss";
@import "assets/scss/variables.scss";
@import "assets/scss/core.scss";

@font-face {
  font-family: 'Ubuntu';
  font-display: swap;
  src: url('./assets/fonts/ubuntu/ubuntu.woff') format('woff');
  font-style: normal;
}

@font-face {
  font-family: 'Ubuntu-medium';
  src: url('./assets/fonts/ubuntu/ubuntumedium.woff') format('woff');
  font-style: normal;
}

@font-face {
  font-family: 'Ubuntu-bold';
  src: url('./assets/fonts/ubuntu/ubuntubold.woff') format('woff');
  font-style: normal;
}
</style>

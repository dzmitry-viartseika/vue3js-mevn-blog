<template>
  <div class="app-home">
    <h1 class="app__title">
      HOME
    </h1>
    <postsList />
  </div>
</template>

<script>
import postsList from '@/components/post/postsList.vue';

export default {
  name: 'homePage',
  components: {
    postsList,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

</style>

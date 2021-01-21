<template>
  <div class="app-posts">
    <postItem />
  </div>
</template>

<script>
import postItem from '@/components/post/postItem.vue';

export default {
  name: 'postsList',
  components: {
    postItem,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

</style>

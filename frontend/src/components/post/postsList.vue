<template>
  <div class="app-posts">
    <postItem v-for="item in allArticles" :key="item._id" :item="item"/>
  </div>
</template>

<script>
import postItem from '@/components/post/postItem.vue';
import { inject } from 'vue';

export default {
  name: 'postsList',
  components: {
    postItem,
  },
  setup() {
    const allArticles = inject('allArticles');
    return {
      allArticles,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-posts {
  margin-top: 50px;
}

</style>

<template>
  <div class="app-posts">
    <postItem v-for="item in allArticles"
              :key="item._id"
              :item="item"
              @selectTagArticle="selectTagArticle"
    />
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
  setup(props, { emit }) {
    const allArticles = inject('allArticles');
    const selectTagArticle = ((tag) => {
      emit('selectTagArticle', tag);
    });
    return {
      allArticles,
      selectTagArticle,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-posts {
  margin-top: 50px;
  width: 60%;
}

</style>

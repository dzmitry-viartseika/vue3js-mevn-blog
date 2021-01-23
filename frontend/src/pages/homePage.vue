<template>
  <div class="app-home">
    <h1 class="app__title">
      HOME {{ allArticles }}
    </h1>
    <postsList />
  </div>
</template>

<script>
import postsList from '@/components/post/postsList.vue';
import { onMounted, ref } from 'vue';
import postApi from '@/api/articlesApi';

export default {
  name: 'homePage',
  components: {
    postsList,
  },
  setup() {
    const allArticles = ref([]);
    onMounted(() => {
      postApi.getAllArticles().then((resp) => {
        console.log('resp', resp.data);
        allArticles.value = resp.data;
      }).catch((e) => {
        console.error(e);
      });
    });

    return {
      allArticles,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

</style>

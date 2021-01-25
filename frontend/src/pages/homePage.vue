<template>
  <div class="app-home">
    <h1 class="app__title">
      HOME
    </h1>
    <loader v-if="isLoader"/>
    <postsList v-if="allArticles.length" />
    <div class="app-home__placeholder" v-else>
      No articles yet
    </div>
  </div>
</template>

<script>
import postsList from '@/components/post/postsList.vue';
import loader from '@/components/loader.vue';
import { onMounted, ref, provide } from 'vue';
import postApi from '@/api/articlesApi';
import { sortBy } from 'lodash';

export default {
  name: 'homePage',
  components: {
    postsList,
    loader,
  },
  setup() {
    const allArticles = ref([]);
    const isLoader = ref(false);

    provide('allArticles', allArticles);

    onMounted(() => {
      isLoader.value = true;
      postApi.getAllArticles().then((resp) => {
        isLoader.value = false;
        allArticles.value = sortBy(resp.data, (el) => el.created_at).reverse();
      }).catch((e) => {
        isLoader.value = false;
        console.error(e);
      });
    });

    return {
      allArticles,
      isLoader,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-home {

  &__placeholder {
    margin-top: 20px;
  }
}

</style>

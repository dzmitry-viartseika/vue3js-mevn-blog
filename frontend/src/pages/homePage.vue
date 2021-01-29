<template>
  <div class="app-home">
    <h1 class="app__title">
      HOME
    </h1>
    <div>
      <h2 class="app__subtitle">Tags</h2>
      <div class="app-home__tags">
        <div class="app-home__tags-item"
             @click="selectTagArticle(tag)"
             v-for="tag in uniqueTags"
             :key="tag">
          #{{ tag }}
        </div>
      </div>
    </div>
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
    const uniqueTags = ref([]);
    const isLoader = ref(false);

    provide('allArticles', allArticles);

    onMounted(() => {
      isLoader.value = true;
      postApi.getAllArticles().then((resp) => {
        isLoader.value = false;
        allArticles.value = sortBy(resp.data, (el) => el.created_at).reverse();
        const tagsList = [];
        resp.data.forEach((el) => {
          el.tags.forEach((tag) => {
            tagsList.push(tag);
          });
        });
        const unique = [...new Set(tagsList.map((item) => item))];
        uniqueTags.value = unique;
      }).catch((e) => {
        isLoader.value = false;
        console.error(e);
      });
    });

    const selectTagArticle = ((tag) => {
      console.log('tag', tag);
      const test = allArticles.value.filter((el) => el.tags.forEach((item) => item === tag));
      console.log('test', test);
    });

    return {
      allArticles,
      isLoader,
      uniqueTags,
      selectTagArticle,
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

  &__tags {
    display: flex;
    max-width: 400px;
    padding: 10px;
    flex-wrap: wrap;
    border-top: 1px solid $color-logo;

    &-item {
      padding: 10px;
      color: $color-logo;
      cursor: pointer;
      transition: color .15s ease-in;

      &:hover {
        color: $color-black;
      }
    }
  }
}

</style>

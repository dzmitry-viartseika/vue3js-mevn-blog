<template>
  <div class="app-home">

    <h1 class="app__title">
      HOME
    </h1>
    <div class="app-home__content">
      <loader v-if="isLoader"/>
      <postsList v-if="allArticles.length" @selectTagArticle="selectTagArticle"/>
      <div class="app-home__placeholder" v-else>
        <div>
          No articles yet
        </div>
        <button class="app-button" @click="createPost">Create first article</button>
      </div>
      <div v-if="uniqueTags.length">
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
    </div>
  </div>
</template>

<script>
import postsList from '@/components/post/postsList.vue';
import loader from '@/components/loader.vue';
import { onMounted, ref, provide } from 'vue';
import { useRouter } from 'vue-router';
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
    const router = useRouter();

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

    const createPost = () => {
      router.push({
        name: 'CreatePost',
      });
    };

    const selectTagArticle = ((tag) => {
      isLoader.value = true;
      postApi.getAllArticles().then((resp) => {
        isLoader.value = false;
        allArticles.value = sortBy(resp.data, (el) => el.created_at).reverse();
        const newArr = [];
        allArticles.value.forEach((el) => {
          el.tags.forEach((item) => {
            if (item === tag) {
              newArr.push(el);
            }
          });
        });
        allArticles.value = newArr;
      }).catch((e) => {
        isLoader.value = false;
        console.error(e);
      });
    });

    return {
      allArticles,
      isLoader,
      uniqueTags,
      selectTagArticle,
      createPost,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-home {

  &__content {
    display: flex;
  }

  &__placeholder {
    margin-top: 20px;
    width: 60%;

    button {
      margin-top: 20px;
    }
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

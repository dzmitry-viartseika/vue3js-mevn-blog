<template>
  <div class="app-post-item">
    <div class="app-post-item__title"
    >
      {{ article.title }}
    </div>
    <div class="app-post-item__content">
      {{ article.content }}
    </div>
    <div class="app-post-item__tags">
      <div class="app-post-item__tags-tag"
           v-for="tag in article.tags"
           :key="tag"
      >
        #{{ tag }}
      </div>
    </div>
    <button class="app-button" @click="deleteArticle(article._id)">Delete article</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import articlesApi from '@/api/articlesApi';

export default {
  name: 'articlePage',
  components: {
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { id } = route.params;
    const isLoader = ref(false);
    const article = ref({
      id: '',
      title: '',
      content: '',
      tags: [],
    });

    onMounted(() => {
      isLoader.value = true;
      articlesApi.getAllArticles().then((resp) => {
        isLoader.value = false;
        const { data } = resp;
        // eslint-disable-next-line no-underscore-dangle
        article.value = data.find((item) => item._id === id);
      }).catch((e) => {
        isLoader.value = false;
        console.error(e);
      });
    });

    const deleteArticle = ((idx) => {
      articlesApi.deleteArticle((idx)).then(() => {
        router.push('/');
      }).catch((e) => {
        console.error(e);
      });
    });

    return {
      id,
      isLoader,
      article,
      deleteArticle,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-post-item {

  margin-top: 30px;

  &__title {
    font-size: 30px;
    margin-bottom: 20px;
  }

  &__content {
    max-width: 600px;
    margin-bottom: 20px;
  }

  &__tags {
    display: flex;
    color: $color-logo;
    margin-bottom: 20px;

    &-tag + .app-post-item__tags-tag {
      margin-left: 5px;
    }
  }
}

</style>

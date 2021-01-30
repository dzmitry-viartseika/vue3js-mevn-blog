<template>
  <loader v-if="isLoader"/>
  <div class="app-post-item">
    <div class="app-post-item__title"
    >
      {{ article.value.title }}
    </div>
    <div class="app-post-item__content">
      {{ article.value.content }}
    </div>
    <div class="app-post-item__tags">
      <div class="app-post-item__tags-tag"
           v-for="tag in article.value.tags"
           :key="tag"
      >
        #{{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import postApi from '@/api/articlesApi';
import loader from '@/components/loader.vue';

export default {
  name: 'articlePage',
  components: {
    loader,
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    const isLoader = ref(false);
    const article = reactive([]);

    onMounted(() => {
      isLoader.value = true;
      postApi.getAllArticles().then((resp) => {
        isLoader.value = false;
        const { data } = resp;
        // eslint-disable-next-line no-underscore-dangle
        article.value = data.find((item) => item._id === id);
      }).catch((e) => {
        isLoader.value = false;
        console.error(e);
      });
    });

    return {
      id,
      isLoader,
      article,
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

    &-tag + .app-post-item__tags-tag {
      margin-left: 5px;
    }
  }
}

</style>

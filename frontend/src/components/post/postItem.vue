<template>
  <div class="app-post-item">
    <div class="app-post-item__title"
         @click="proceedToArticle(item)"
    >
      {{ item.title }}
    </div>
    <div class="app-post-item__content">
      {{ item.content }}
    </div>
    <div class="app-post-item__tags">
      <div class="app-post-item__tags-tag"
           v-for="tag in item.tags"
           :key="tag"
           @click="selectTagArticle(tag)"
      >
          #{{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'postItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const selectTagArticle = ((tag) => {
      emit('selectTagArticle', tag);
    });
    const proceedToArticle = ((item) => {
      const { _id: id } = item;
      router.push({
        name: 'articlePage',
        params: {
          id,
        },
      });
    });
    return {
      selectTagArticle,
      proceedToArticle,
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 20px;
  }

  &__tags {
    display: flex;
    color: $color-logo;

    &-tag {
      cursor: pointer;
      transition: color .15s ease-in;

      &:hover {
        color: $color-black;
      }
    }

    &-tag + .app-post-item__tags-tag {
      margin-left: 5px;
    }
  }
}

</style>

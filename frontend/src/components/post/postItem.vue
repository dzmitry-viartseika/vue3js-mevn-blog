<template>
  <div class="app-post-item">
    <div class="app-post-item__title">
      {{ item.title }}
    </div>
    <div class="app-post-item__content">
      {{ item.content }}
    </div>
    <div class="app-post-item__tags">
      <div class="app-post-item__tags-tag" v-for="tag in item.tags" :key="tag">
        #{{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'postItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
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
  }
}

</style>

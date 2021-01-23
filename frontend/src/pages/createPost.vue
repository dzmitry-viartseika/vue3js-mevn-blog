<template>
  <div class="app-post">
    <div class="app-field">
      <div class="app-field__title">
        Title
      </div>
      <input type="text" v-model="post.title" class="app__input" placeholder="Enter title">
    </div>
    <div class="app-field">
      <div class="app-field__title">
        Content
      </div>
      <textarea class="app__textarea" v-model="post.content" placeholder="Enter content"></textarea>
    </div>
    <div class="app-field">
      <div class="app-field__title">
        Tags
      </div>
      <input type="text" v-model="post.tags" class="app__input" placeholder="Enter tags">
    </div>
    <div class="app-post__btn">
      <button class="app-button" @click="addNewPost">Add Post</button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import postApi from '@/api/articlesApi';

export default {
  name: 'createPost',
  setup() {
    const post = reactive({
      title: '',
      content: '',
      tags: [],
    });

    const addNewPost = () => {
      console.log('post', post);
      postApi.addNewPost(post).then((resp) => {
        console.log('resp', resp.data);
      })
        .catch((e) => {
          console.error(e);
        });
    };
    return {
      post,
      addNewPost,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-post {
  max-width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
}

</style>

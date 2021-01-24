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
        Tags (Hit enter to add a tag)
      </div>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKey"
             class="app__input"
             placeholder="Enter tags">
    </div>
    <div class="app-post__btn">
      <button class="app-button" @click="addNewPost">Add Post</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import postApi from '@/api/articlesApi';
import { useRouter } from 'vue-router';

export default {
  name: 'createPost',
  setup() {
    const router = useRouter();
    const post = reactive({
      title: '',
      content: '',
      tags: [],
    });

    const tag = ref('');

    const handleKey = () => {
      if (post.tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '');
        post.tags.push(tag.value);
      }
      tag.value = '';
    };

    const addNewPost = () => {
      postApi.addNewPost(post).then(() => {
        router.push('/');
      })
        .catch((e) => {
          console.error(e);
        });
    };
    return {
      post,
      tag,
      addNewPost,
      handleKey,
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

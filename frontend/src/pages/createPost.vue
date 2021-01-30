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
      <input type="text" v-model="tag" @keydown.enter.prevent="checkTags"
             class="app__input"
             placeholder="Enter tag">
      <div class="app-field__tags">
        <div class="app-field__tags-item" v-for="tag in tags" :key="tag">
          #{{ tag }}
        </div>
      </div>
    </div>
    <div class="app-post__btn">
      <button class="app-button"
              :class="{'app-button_disabled': !post.title || !post.content  || !tags.length}"
              @click="addNewPost">Add Post</button>
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
    const tag = ref('');
    const tags = ref([]);
    const checkTags = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '');
        tags.value.unshift(tag.value);
      }
      tag.value = '';
    };

    const post = reactive({
      title: '',
      content: '',
      tags,
    });

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
      tags,
      addNewPost,
      checkTags,
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

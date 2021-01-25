<template>
  <header class="app-menu">
    <div class="app-menu__item"
         :class="{'app-menu__item_active': item.route === routePathActive}"
         v-for="item in menuList"
         :key="item.id"
         @click="proceedTo(item)"
    >
      {{ item.name }}
    </div>
  </header>
</template>

<script>
import menuItemsList from '@/constants/menuItemsList';
import { useRouter, useRoute } from 'vue-router';
import { onMounted, ref, watch } from 'vue';

export default {
  name: 'headerTemplate',
  setup() {
    const router = useRouter();
    const routePath = useRoute();
    const menuList = menuItemsList;
    const routePathActive = ref('');

    const proceedTo = (item) => {
      const { route } = item;
      router.push(route);
    };

    onMounted(() => {
      routePathActive.value = routePath.path;
    });

    watch(
      () => routePath.path,
      (newVal) => {
        routePathActive.value = newVal;
      },
    );

    return {
      menuList,
      proceedTo,
      routePathActive,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-menu {
  display: flex;

  &__item {
    cursor: pointer;
    transition: color .15s ease-in;
    color: $color-logo;

    &:hover {
      color: $color-black;
    }

    &_active {
      color: $color-black;
    }

    & + .app-menu__item {
      margin-left: 5px;
    }
  }
}

</style>

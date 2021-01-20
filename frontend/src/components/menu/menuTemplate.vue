<template>
  <header class="app-menu">
    <div class="app-menu__item"
         :class="{'app-menu__item_active': activeItem === item.id}"
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
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'headerTemplate',
  setup() {
    const router = useRouter();
    const menuList = menuItemsList;
    const activeItem = ref(-1);

    const proceedTo = (item) => {
      const { route, id } = item;
      activeItem.value = id;
      router.push(route);
    };

    return {
      menuList,
      proceedTo,
      activeItem,
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

<script setup lang="ts">
    import { computed } from 'vue';
    import router from './router/router';

    const IsAppearNav = computed(() => router.currentRoute.value.path === "/")

</script>

<template>
  <nav
    v-if="IsAppearNav"
    class="PADDING"
  >
    <ul>
      <li>menu</li>
      <li>logo</li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
    nav {
        height: 10vh;

        ul {
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: space-between;

            background-color: blue;
        }

        background-color: red;
    }
</style>


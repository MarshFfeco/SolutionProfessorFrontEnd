<script setup lang="ts">
    import LoginComponent from '../components/LoginComponent.vue';
</script>

<template>
  <div id="MainView">
    <LoginComponent />
  </div>
</template>

<style lang="scss" scoped>
    #MainView {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>


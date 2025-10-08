<script setup>
import navMenu from './components/navMenu.vue';
import footMenu from './components/footMenu.vue';
</script>

<template>
  <header>
    <navMenu></navMenu>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
  <footer>
    <footMenu></footMenu>
  </footer>
</template>

<style scoped></style>

<script setup>
import Header from "./Header.vue";
import CalendarGrid from "./CalendarGrid.vue";
</script>

<template>
  <main>
    <Header />
    <CalendarGrid />
  </main>
</template>

<style scoped lang="less">
main {
  width: 500px;
  padding-bottom: 30px;
  border-radius: 5px;
  background-color: var(--secondary);
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.5);
  @media (max-width: 500px) {
    width: 90vw;
  }
}
</style>

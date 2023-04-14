<script setup>
import chevron from "../assets/chevron.svg";
</script>

<template>
  <div class="header">
    <div class="info">
      <div class="year">
        <p>2023</p>
      </div>
    </div>

    <div class="wrapper">
      <div class="left-chevron chevron">
        <img :src="chevron" alt="left-chevron" />
      </div>

      <div class="month">
        <h2>April</h2>
      </div>

      <div class="right-chevron chevron">
        <img :src="chevron" alt="right-chevron" />
      </div>
    </div>
  </div>
</template>

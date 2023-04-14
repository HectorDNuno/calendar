<script setup>
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
</script>

<template>
  <div class="calendar-grid">
    <div class="days-grid">
      <div v-for="(day, index) in DAYS" :key="index" class="day" :title="day">
        {{ day[0] }}
      </div>
    </div>

    <div class="date-grid">
      <div class="date" v-for="date in range(31)">
        <div class="val">{{ date }}</div>
      </div>
    </div>
  </div>
</template>

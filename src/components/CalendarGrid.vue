<script setup>
import { ref, computed, inject } from "vue";
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const { state, dispatch } = inject("store");

const current = ref({
  currentDay: DAYS[new Date().getDay()],
  currentDate: new Date().getDate(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
});

const isCurrentMonthAndYear = computed(
  () =>
    state.value.date.str.getMonth() === current.value.currentMonth &&
    state.value.date.str.getFullYear() === current.value.currentYear
);

console.log(state.value.dateGrid);
</script>

<template>
  <div class="calendar-grid">
    <div class="days-grid">
      <div
        v-for="(day, index) in DAYS"
        :key="index"
        :class="['day', { today: day === current.currentDay && isCurrentMonthAndYear }]"
        :title="day"
      >
        {{ day[0] }}
      </div>
    </div>

    <div class="date-grid">
      <div class="date" v-for="date in state.dateGrid" :key="date.id">
        <div :class="['val', { today: date.dt === current.currentDate && isCurrentMonthAndYear }]" v-if="date.dt">
          {{ date.dt }}
        </div>
        <div v-else></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.calendar-grid {
  margin-top: 15px;
  display: grid;
  gap: 20px;
  user-select: none;
  color: var(--blue);
  .days-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: space-between;
    align-items: center;
    .day {
      text-align: center;
      font-weight: bold;
      color: var(--blue);
      &.today {
        color: var(--red);
      }
    }
  }
  .date-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: space-between;
    align-items: center;
    row-gap: 20px;
    .date {
      display: flex;
      justify-content: center;
      cursor: pointer;
      .val {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        position: relative;
        &.today {
          text-align: center;
          border-radius: 50%;
          background-color: var(--red);
        }
      }
    }
  }
}
</style>

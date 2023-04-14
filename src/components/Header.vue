<script setup>
import { ref, inject, watch } from "vue";
import chevron from "../assets/chevron.svg";

const MONTHS = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

const state = inject("store");
const [_, month, __, year] = state.state.value.date.dateString.split(" ");

const current = ref({
  month: MONTHS[month], //gets month full name from MONTHS object using month initials
  year,
});

watch(
  () => state.state.value.date,
  (updateDate) => {
    const [_, month, __, year] = updateDate.dateString.split(" ");
    current.value = {
      month: MONTHS[month],
      year,
    };
  }
);

const handleClick = (direction) => state.dispatch({ type: "updateDate", payload: { direction } });
</script>

<template>
  <div class="header">
    <div class="info">
      <div class="year">
        <p>{{ current.year }}</p>
      </div>
    </div>

    <div class="wrapper">
      <div @click="handleClick" class="left-chevron chevron">
        <img :src="chevron" alt="left-chevron" />
      </div>

      <div class="month">
        <h2>{{ current.month }}</h2>
      </div>

      <div @click="handleClick('next-month')" class="right-chevron chevron">
        <img :src="chevron" alt="right-chevron" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: antiquewhite;
  border-radius: 5px 5px 0 0;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .month {
      h2 {
        font-size: 32px;
        font-weight: bolder;
        letter-spacing: 5.5px;
      }
    }
    .chevron {
      user-select: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.5s;
      &:hover {
        background-color: rgb(243, 206, 158);
      }
      img {
        width: 100%;
        height: auto;
        transform: translateX(2px);
      }
    }
    .left-chevron {
      transform: rotate(180deg);
    }
  }
}
</style>

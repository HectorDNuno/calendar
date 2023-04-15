<script setup>
import { ref, inject, watch } from "vue";

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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            id="chevron"
            d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"
          />
        </svg>
      </div>

      <div class="month">
        <h2>{{ current.month }}</h2>
      </div>

      <div @click="handleClick('next-month')" class="right-chevron chevron">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            id="chevron"
            d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: var(--main);
  color: var(--red);
  border-radius: 10px 10px 0 0;
  .info {
    text-align: center;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .chevron {
      fill: var(--red);
    }
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
        background-color: var(--blue);
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

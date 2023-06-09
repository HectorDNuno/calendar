import { ref } from "vue";

export const state = ref({
  date: {
    str: new Date(),
    dateString: new Date().toDateString(),
  },
  dateGrid: [],
});

export const dispatch = (action) => {
  if (action.type === "updateDate") {
    const newDate = updateDate(state.value.date, action.payload);
    state.value = { ...state.value, date: newDate };
  }
  state.value = { ...state.value, dateGrid: updateDateGrid(state.value.date) };
};

const updateDate = (date, payload) => {
  const year = date.str.getFullYear();
  const month = date.str.getMonth() + 1;
  let newDate = {};

  if (payload.direction === "next-month") {
    newDate = increase(month, year);
  } else {
    newDate = decrease(month, year);
  }

  return newDate;
};

const increase = (month, year) => {
  const obj = {};

  if (month !== 12) {
    obj.str = new Date(`${year}, ${month + 1}`);
    obj.dateString = new Date(`${year}, ${month + 1}`).toDateString();
  } else {
    obj.str = new Date(`${year + 1}, 01`);
    obj.dateString = new Date(`${year + 1}, 01`).toDateString();
  }

  return obj;
};

const decrease = (month, year) => {
  const obj = {};

  if (month !== 1) {
    obj.str = new Date(`${year}, ${month - 1}`);
    obj.dateString = new Date(`${year}, ${month - 1}`).toDateString();
  } else {
    obj.str = new Date(`${year - 1}, 12`);
    obj.dateString = new Date(`${year - 1}, 12`).toDateString();
  }

  return obj;
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const arrangeGridAccordingToDays = (currentMonthDates) => {
  let newDateGrid = [];
  const firstDay = DAYS.indexOf(currentMonthDates[0].day);

  for (let i = 0; i <= firstDay; i++) {
    if (i < firstDay) {
      newDateGrid = [
        ...newDateGrid,
        {
          id: Math.random(),
          dt: "",
          day: DAYS[i],
        },
      ];
    } else {
      newDateGrid = [...newDateGrid, ...currentMonthDates];
    }
  }

  return newDateGrid;
};

const getNumberOfDays = (month, year) => {
  const monthsWithThirtyOneDays = ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"];
  if (monthsWithThirtyOneDays.includes(month)) {
    return 31;
  } else if (month === "Feb") {
    return isLeapYear(year) ? 29 : 28;
  } else {
    return 30;
  }
};

const isLeapYear = (year) => {
  const firstCondition = year % 4 === 0 && year % 100 !== 0;
  const secondCondition = year % 4 === 0 && year % 100 === 0 && year % 400 === 0;

  if (firstCondition || secondCondition) {
    return true;
  } else {
    return false;
  }
};

const updateDateGrid = (date) => {
  const [_, monthName, __, year] = date.dateString.split(" ");
  const numberOfDays = getNumberOfDays(monthName, year);
  const currentMonthDates = [];
  const monthNumber = date.str.getMonth() + 1;

  for (let i = 0; i < numberOfDays; i++) {
    const item = {};
    const day = new Date(`${year}, ${monthNumber}, ${i + 1}`).getDay();
    item.id = i + 1;
    item.dt = i + 1;
    item.day = DAYS[day];
    currentMonthDates.push(item);
  }

  return arrangeGridAccordingToDays(currentMonthDates);
};

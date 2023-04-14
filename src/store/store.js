import { ref } from "vue";

export const state = ref({
  date: {
    str: new Date(),
    dateString: new Date().toDateString(),
  },
});

export const dispatch = (action) => {
  if (action.type === "updateDate") {
    const newDate = updateDate(state.value.date, action.payload);
    state.value = { ...state.value, date: newDate };
  }
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
    obj.str = new Date(`${year - 1}, 11`);
    obj.dateString = new Date(`${year - 1}, 11`).toDateString();
  }

  return obj;
};

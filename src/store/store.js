import { ref } from "vue";

export const state = ref({
  date: {
    str: new Date(),
    dateString: new Date().toDateString(),
  },
});

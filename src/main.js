import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { state } from "./store/store.js";

createApp(App).provide("store", state).mount("#app");

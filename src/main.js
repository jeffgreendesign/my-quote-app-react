// src/main.js
import "./assets/main.css"; // Optional: keep if you want base styling

import { createApp } from "vue";
import { createPinia } from "pinia"; // <-- Import Pinia

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia()); // <-- Tell Vue to use Pinia

app.mount("#app");

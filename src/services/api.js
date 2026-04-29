import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "https://slp-sleep-like-a-panda.onrender.com",
});

export { api };

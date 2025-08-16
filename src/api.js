import axios from "axios";

const api = axios.create({
  baseURL: "https://church-website-optimized.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

import axios from "axios";
<<<<<<< HEAD

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4500",
    withCredentials: true,
});

export default api;
=======
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4500",
  withCredentials: true,
});

export default api;
>>>>>>> origin/main

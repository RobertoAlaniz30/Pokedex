import axios from "./config.axios";

export const api = (limit = 100) =>
  axios.get(`/pokemon?limit=${limit}`).then((response) => response.data);

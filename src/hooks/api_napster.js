import axios from "axios";

const api = axios.create({
  baseURL: "https://api.napster.com/",
});


export default api
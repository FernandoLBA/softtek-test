import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "https://rimac-front-end-challenge.netlify.app/api",
});

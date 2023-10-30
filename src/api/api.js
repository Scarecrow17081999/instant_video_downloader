import axios from "axios";

// const apiUrl = import.meta.env.VITE_BASE_URI;
const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URI,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
// console.log(import.meta.env.VITE_BASE_URI);
export const instaVideos = (body) => API.post(`/video`, body);
export const response = (y) => API.get(`/`);
export const instaPic = (body) => API.post(`/picture`, body);
export const instaStory = (body) => API.post(`/story`, body);

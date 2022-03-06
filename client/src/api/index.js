import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
  }
  return req;
});

export const signUp = (formData) => API.post("/user/signup", formData);
export const googleLogin = (result) => API.post("/user/googleLogin", result);
export const signIn = (formData) => API.post("/user/signin", formData);
export const getProfile = (id) => API.get(`/profile/${id}`);
export const updateProfile = (id, userProfile) => API.patch(`/profile/${id}`, userProfile);
export const getPropery = (id) => API.get(`/property/${id}`);
export const createProperty = (id, property) => API.post(`/property/${id}`, property);
export const updateProperty = (id, property) => API.patch(`/property/${id}`, property);
export const deleteProperty = (id) => API.delete(`/property/${id}`);
export const getProperties = (page) => API.get(`/property?page=${page}`);

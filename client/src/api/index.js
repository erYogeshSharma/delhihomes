import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const signUp =(formData) => API.post('/user/signup',formData);
export const googleLogin =(result) => API.post('/user/googleLogin',result);
export const signIn =(formData) => API.post('/user/signin',formData);
export const getProfile = (email) => API.get(`/profile/${email}`);
export const updateProfile = (id, userProfile) => API.patch(`/profile/${id}`, userProfile);
 
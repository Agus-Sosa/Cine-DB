import axios from './axios.js'

export const registerRequest = (user)=> axios.post(`/sessions/register`, user);

export const loginRequest = (user)=>axios.post(`/sessions/login`, user);

export const verifySession =()=> axios.get("/sessions/verify")
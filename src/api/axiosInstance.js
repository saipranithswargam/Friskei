import axios from "axios";
// https://freskeiapi.onrender.com/
const instance = axios.create({
    baseURL: "https://freskeiapi.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default instance;

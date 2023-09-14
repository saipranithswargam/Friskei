import axios from "axios";

const instance = axios.create({
    baseURL: "https://freskeiapi.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default instance;

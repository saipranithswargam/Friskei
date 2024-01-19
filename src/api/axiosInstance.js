import axios from "axios";
// https://freskeiapi.onrender.com/
const instance = axios.create({
    // baseURL: "https://petlevert-57yoh.ondigitalocean.app/",
    baseURL:"http://localhost:5050/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default instance;

import axios from "axios";


// Configuration pour axios
export const api = axios.create({
    baseURL: "http://localhost:3000/api",
});
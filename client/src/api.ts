import axios from "axios";

const API_BASE_URL = "https://writewise-8ki5.onrender.com";

export default axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
import type { AxiosResponse } from "axios";
import api from "../api";
import { useState } from "react";

interface IUsers {
    name?: string;
    email: string;
    password: string;
}

export default function UseAuth() {

    const [user, setUser] = useState(null);
    const handleRegister = async ({name, email, password}: IUsers) => api.post("auth/register", {
        name,
        email,
        password
    });
    
    const handleLogin = async ({email, password}: IUsers) => api.post("auth/login", {
        email,
        password
    }).then((response: AxiosResponse) => {
        console.log(response.data.token);
        setUser(response.data.token);
    });

    return {
        user,
        handleRegister,
        handleLogin
    }
}

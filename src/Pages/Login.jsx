import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { FaUnlock } from "react-icons/fa";

const Login = () => {
    const [error, setError] = useState()
    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");
    const navigate = useNavigate();
    const onLogin = () => {
        axios.post(`${import.meta.env.VITE_BASE_URL}/admin-login`, {username : username,password : password})
            .then((res) => {
                res.data.isAuth ? setTimeout(() => navigate("/"),1000) : setError("username and password doesn't match")
            })
            .catch(err => setError(err))
    };
    return (
        <div className="w-screen my-32 flex flex-col items-center justify-center text-xl">
            <div className="bg-blue-100 rounded-lg flex flex-col gap-y-5 shadow-lg">
                <div className="flex items-center justify-center bg-blue-500 rounded-t-lg font-bold text-2xl py-4 overflow-hidden text-white text-center"><h1>Login</h1><RiLoginCircleLine size={30} className="ml-3 max-h-fit"/></div>
                <div className="flex flex-col p-6 gap-y-5">
                    <div className="flex items-center gap-x-4 py-2 px-4 rounded-full bg-white border-blue-500 focus-within:ring-2">
                        <IoPerson/>
                        <input onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter username" className=" ring-0 border-0 outline-0" />
                    </div>
                    <div className="flex items-center gap-x-4 py-2 px-4 rounded-full bg-white border-blue-500 focus-within:ring-2">
                        <FaUnlock/>
                        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter username" className=" ring-0 border-0 outline-0" />
                    </div>
                    <button onClick={onLogin} className="py-2 px-8 bg-blue-600 text-white rounded-full hover:bg-white hover:text-blue-500 duration-300 shadow-md">login</button>
                    {error && <h2 className="text-sm px-4 text-red-600">*{error}</h2>}
                </div>
            </div>
        </div>
    );
};

export default Login;
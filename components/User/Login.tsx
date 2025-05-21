import axios from "axios";
import React, { useState } from "react";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit =async (e:React.FormEvent)=>{
        e.preventDefault();
        try {
            const response= await axios.post('https://backend-fullstack-kbiq.onrender.com/api/v1/login', {email,password});
            if(response.status===200){
                localStorage.setItem('token',response.data.token);
                localStorage.setItem('user',JSON.stringify(response.data.user));
                window.location.href='/';
            }
         } 
         catch (error) {
            setError('Đăng nhập không thành công'); 
        }
    }
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-100">
                    <h2 className="text-2xl font-bold mb-6 text-center">Đăng Nhập</h2>
                    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Tên đăng nhập
                            </label>
                            <input
                                type="email"
                                id="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Tên đăng nhập"
                                className=" border-none bg-gray-100  appearance-none rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Mật khẩu
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Mật khẩu"
                                className="border-none bg-gray-100  appearance-none rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            Đăng Nhập
                        </button>
                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                Quên mật khẩu?
                            </a>
                            <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                Đăng ký
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

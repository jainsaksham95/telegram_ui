import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-100 p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                {/* Login form */}
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input type="text" id="username" className="mt-1 p-2 w-full border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 p-2 w-full border rounded" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
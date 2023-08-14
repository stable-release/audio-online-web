import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        async function postData() {
            const data = formData;
            /// await API request
        }

        return () => {
            if (connected) {
                // on connection success
            }
        };
    }, [submitting]);

    const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting((prev) => !prev);
        console.log("submitted");
    };

    return (
        <div
            className="w-screen h-screen flex justify-center flex-col items-center"
            style={{ background: "rgb(17 24 39)" }}
        >
            <div className="h-full w-[50%] flex flex-col justify-center items-center">
                <h2 className="text-2xl font-medium leading-tight text-white">
                    Sign in to your account
                </h2>
                <form
                    className="flex rounded px-8 pt-6 pb-8 mb-4 flex-col w-[75%] justify-center"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            className="block text-white text-md font-bold mb-2"
                            for="email"
                        >
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required={true}
                            placeholder="Email"
                            onChange={handleChange}
                            value={formData.email}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-white text-md font-bold mb-2"
                            for="password"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            required={true}
                            placeholder="Password"
                            onChange={handleChange}
                            value={formData.password}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                        />
                    </div>
                    <div className="flex items-center">
                        <button
                            className=" bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <text className="text-white">
                    Not a member?{" "}
                    <Link to="/signUp">
                        <a className="text-indigo-500">Create an account</a>
                    </Link>
                </text>
            </div>
        </div>
    );
}

export default SignIn;
